import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getServerSideProps = async ({ params }) => {
  const matchSwitch = await prisma.switch.findUnique({ where: { id: Number(params.id) } })
  return { props: { matchSwitch } }
}

const Switches = ({ matchSwitch }) => {
  console.log('matchSwitch', matchSwitch)
  return (
    <div className="mb-auto flex flex-col items-center h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <div>{matchSwitch?.id}</div>
      <div>{matchSwitch?.name}</div>
      <div>{matchSwitch?.manufacturerName}</div>
      <Footer />
    </div>
  )
}

export default Switches
