import 'dotenv/config'
import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI
const connection = {}

export const dbConnect = async () => {
	if (connection.isConnected) return

	const db = await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	connection.isConnected = db.connections[0].readyState
	console.log(`* DB connected: ${!!connection.isConnected}`)
}
