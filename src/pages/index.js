import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-zinc-800">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
