import { MongoClient } from 'mongodb'

const url = process.env.MONGODB
let clientPromise
let dbCache = {}

export async function getDbConnection(collection) {
  // Check for existing connection, otherwise connect
  if (!clientPromise) {
    const client = new MongoClient(url)
    clientPromise = client.connect()
  }

  // Check for cached db entries
  let cacheEntry = dbCache[collection]
  if (cacheEntry) {
    return cacheEntry
  }

  // Create db and cache it
  const client = await clientPromise
  const db = await client.db('products').collection(collection)
  dbCache[collection] = db
  return db
}
