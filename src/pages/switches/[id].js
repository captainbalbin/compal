import React from 'react'
import HeaderAlt from '../../components/HeaderAlt'
import Footer from '../../components/Footer'
import PageWrapper from '../../components/PageWrapper'
import Product from '../../containers/Product'

const Switches = () => {
  return (
    <PageWrapper isStartPage={false}>
      <HeaderAlt />
      <Product />
      <Footer />
    </PageWrapper>
  )
}

export default Switches
