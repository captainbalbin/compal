import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import SearchBar from '../components/SearchBar'
import PageWrapper from '../components/PageWrapper'

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SearchBar />
      </ContentWrapper>
      <Footer />
    </PageWrapper>

    // <div className="flex flex-col items-center h-screen bg-zinc-900">

    // </div>
  )
}

export default Home
