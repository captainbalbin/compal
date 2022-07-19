import { getDbConnection } from '../utils/dbClient'

export async function autcompleteQuery(query) {
  if (!query) {
    return []
  }

  const db = await getDbConnection('switches')
  const res = await db.aggregate([
    {
      $search: {
        index: 'autocomplete',
        autocomplete: {
          query: query,
          path: 'name',
          fuzzy: {
            maxEdits: 1,
            // "prefixLength": 1,
            maxExpansions: 256,
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
  ])

  return await res.toArray()
}
