const path = require('path')

exports.createPages = async function createPages({ actions, graphql, reporter }) {
  const { data, errors } = await graphql(`{
    allContentfulProduct {
      edges {
        node {
          slug
        }
      }
    }
  }`)

  if (errors) {
    return reporter.panic(`An error has occurred: ${errors}`)
  }

  const productTemplate = path.resolve(`src/templates/product.js`)

  data.allContentfulProduct.edges.forEach(({ node }) => {
    const { slug } = node
    actions.createPage({
      component: productTemplate,
      path: `/${slug}`,
      context: {
        slug
      }
    })
  })
}
