import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Products</h1>
    <ul>
    {
      data.allContentfulProduct.edges.map(({ node }) => (
        <li key={node.slug}><Link to={`/${node.slug}`}>{node.productName.productName}</Link></li>
      ))
    }
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          productName {
            productName
          }
          slug
        }
      }
    }
  }
`

export default IndexPage
