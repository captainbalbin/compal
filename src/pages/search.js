import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import SearchBar from '../components/SearchBar'

const Search = () => {
  const router = useRouter()

  const {
    query: { q },
  } = router

  return (
    <div className="flex flex-col items-center h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <ContentWrapper>
        <SearchBar />
        {q}
      </ContentWrapper>
      <Footer />
    </div>
  )
}

export default Search
