import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getStaticProps = async () => {
  const manufacturers = await prisma.manufacturer.findMany()

  return {
    props: {
      manufacturers,
    },
  }
}

const Submit = ({ manufacturers }) => {
  const [name, setName] = useState('')
  const [manufacturer, setManufacturer] = useState('')

  return (
    <div className="flex flex-col items-center h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <div>{name}</div>
      <div>{manufacturer}</div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
          type="text"
        />
        <input
          onChange={(e) => setManufacturer(e.target.value)}
          placeholder="Manufacturer"
          value={manufacturer}
          type="text"
        />
        <input className="mb-auto" type="submit" value="Create" />
      </form>
      <ul>
        {manufacturers.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>

      <Footer />
    </div>
  )
}

export default Submit
