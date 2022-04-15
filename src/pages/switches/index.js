import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getServerSideProps = async () => {
  const switches = await prisma.switch.findMany()
  return { props: { switches } }
}

const Switches = ({ switches }) => {
  return (
    <div className="flex flex-col items-center h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <div>
        {switches.map((s) => (
          <li key={s.id}>
            <Link href={`switches/${JSON.stringify(s.id)}`}>{s.name}</Link>
          </li>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Switches
