import { MongoClient } from 'mongodb'

const url = process.env.MONGODB
const client = new MongoClient(url)

let hasConnected = false
let connectionCache = {}

export async function getDbConnection(db, collection) {
  // Check for existing connection, otherwise connect
  if (!hasConnected) {
    hasConnected = true
    await client.connect()
  }

  // Check for cached db entries
  let cacheEntry = connectionCache[db + collection]
  if (cacheEntry) {
    return cacheEntry
  }

  // Create db and cache it
  let conn = client.db(db).collection(collection)
  connectionCache[db + collection] = conn
  return conn
}
