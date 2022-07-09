import { autcompleteQuery } from '../../datasources/autocomplete'

export default async function handler(req, res) {
  if (req.method != 'POST') {
    res.status(404).end()
  }

  const query = req.body.query

  if (query == undefined) {
    res.status(400).json('Missing query paramter')
  }

  res.status(200).json(await autcompleteQuery(query))
}
