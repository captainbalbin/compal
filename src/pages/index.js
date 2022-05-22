import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import PageWrapper from '../components/PageWrapper'
import ExploreSection from '../components/ExploreSection'
import Search from '../containers/Search'

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <Search />
        <ExploreSection />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}

export default Home
