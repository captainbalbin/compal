import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import PageWrapper from '../components/PageWrapper'
import ExploreSection from '../components/ExploreSection'
import SearchContainer from '../containers/SearchContainer'

const Home = () => {
  return (
    <PageWrapper isStartPage>
      <Header />
      <ContentWrapper>
        <SearchContainer />
        <ExploreSection />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}

export default Home
