const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const page = path.resolve(`./src/templates/page.js`)
  const astroPost = path.resolve(`./src/templates/astrophotography-post.js`)

  return graphql(
    `
      {
        allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000 ) {
          edges {
            node {
              fields {
                slug
                sourceInstanceName
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      //choose the right template and fields based on the collection source
      switch(post.node.fields.sourceInstanceName) {
        case "pages":

          createPage({
            path: `${post.node.fields.slug}`,
            component: page,
            context: {
              slug: post.node.fields.slug,
            },
          })

          break;
        case "astrophotography":

          createPage({
            path: `astrophotography${post.node.fields.slug}`,
            component: astroPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })

          break;
        default: //blog

          createPage({
            path: `blog${post.node.fields.slug}`,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })

      }

    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    const fileNode = getNode(node.parent)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({ //adds the collection slug as a field.
      name: `sourceInstanceName`,
      node,
      value: fileNode.sourceInstanceName
    })
  }
}
