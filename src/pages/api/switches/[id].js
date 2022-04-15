import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const switchName = req.query.name
  if (req.method === 'POST') {
    await prisma.switch.create({ data: { name: switchName } })
    res.json({ message: `${switchName} created` })
  } else {
    throw new Error(`The method ${req.method} is not allowed at this route.`)
  }
}
