import { getDbConnection } from '../../utils/dbClient'

export default async (req, res) => {
  if (req.method != 'POST') {
    res.status(404).end()
    return
  }

  const query = req.body.query

  if (typeof query != 'string' || query == '') {
    res.status(400).json('Missing query paramter')
    return
  }

  const db = await getDbConnection('switches')
  const autocomplete = await db
    .aggregate([
      {
        $search: {
          index: 'autocomplete',
          autocomplete: {
            query: query,
            path: 'name',
            fuzzy: {
              maxEdits: 1,
              prefixLength: 1,
              maxExpansions: 128,
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
        },
      },
      {
        $limit: 8,
      },
    ])
    .toArray()

  res.status(200).json(autocomplete)
}
