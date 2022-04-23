import React from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import HeaderAlt from '../components/HeaderAlt'

const Search = () => {
  const router = useRouter()

  const {
    query: { q },
  } = router

  return (
    <div className="flex flex-col items-center h-screen bg-zinc-900 text-zinc-100">
      <HeaderAlt />
      <ContentWrapper>{q}</ContentWrapper>
      <Footer />
    </div>
  )
}

export default Search
