import React from 'react'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import HeaderAlt from '../components/HeaderAlt'
import PageWrapper from '../components/PageWrapper'
import Results from '../containers/Results'

const Search = () => {
  return (
    <PageWrapper>
      <HeaderAlt />
      <ContentWrapper>
        <Results />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}

export default Search
