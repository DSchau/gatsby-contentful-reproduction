import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

function Product({ data }) {
  return (
    <Layout>
      <h1>{data.contentfulProduct.productName.productName}</h1>
    </Layout>
  )
}

export const productQuery = graphql`
  query ProductQuery($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      productName {
        productName
      }
    }
  }
`

export default Product