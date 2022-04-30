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
  )
}

export default Home
