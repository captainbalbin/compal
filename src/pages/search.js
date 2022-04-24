import React from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'
import HeaderAlt from '../components/HeaderAlt'
import PageWrapper from '../components/PageWrapper'

const Search = () => {
  const router = useRouter()

  const {
    query: { q },
  } = router

  return (
    <PageWrapper>
      <HeaderAlt />
      <ContentWrapper>{q}</ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}

export default Search
