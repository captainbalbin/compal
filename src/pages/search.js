import React from 'react'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import HeaderAlt from '../components/HeaderAlt'
import PageWrapper from '../components/PageWrapper'
import SearchResults from '../components/SearchResults'

const Search = () => {
  return (
    <PageWrapper>
      <HeaderAlt />
      <ContentWrapper>
        <SearchResults />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}

export default Search
