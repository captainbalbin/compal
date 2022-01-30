import { dbConnect } from '../../utils/dbConnect'

dbConnect()

const test = async (req, res) => {
	res.json({ test: 'test' })
}

export default test
