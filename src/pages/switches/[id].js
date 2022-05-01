import React from 'react'
import HeaderAlt from '../../components/HeaderAlt'
import Footer from '../../components/Footer'
import ContentWrapper from '../../components/ContentWrapper'
import PageWrapper from '../../components/PageWrapper'
import Overview from '../../components/Overview'
import StoreList from '../../components/StoreList'

const Switches = () => {
  return (
    <PageWrapper>
      <HeaderAlt />
      <ContentWrapper>
        <Overview />
        <StoreList />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}

export default Switches
