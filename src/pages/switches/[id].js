import React from 'react'
import HeaderAlt from '../../components/HeaderAlt'
import Footer from '../../components/Footer'
import PageWrapper from '../../components/PageWrapper'
import Product from '../../containers/Product'
import { testData } from '../../utils/testData'

export const getStaticPaths = async () => {
  // const res = await fetch('./data.json') // TODO: Replace with fetch request against MongoDB
  const data = testData
  // const data = await res.json()

  const paths = data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const data = testData // TODO: Replace with fetch of real data, ish as above but adding the id

  // const details = testData.variants.filter((v1) => product.variants.find((v2) => v1.url === v2.url))
  const product = data.find((item) => item.id === id)

  return { props: { product } }
}

const Switches = ({ product }) => {
  return (
    <PageWrapper>
      <HeaderAlt />
      <Product product={product} />
      <Footer />
    </PageWrapper>
  )
}

export default Switches
