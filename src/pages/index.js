import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Preview from "../components/preview"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" location={this.props.location.pathname} />
        <Bio />
        <div >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Preview
                slug={node.fields.slug}
                category={node.frontmatter.category}
                year={node.frontmatter.year}
                fluid={node.frontmatter.hero_image.childImageSharp.fluid}
                title={title}
                date={node.frontmatter.date}
                timeToRead={node.timeToRead}
                excerpt={node.frontmatter.description || node.excerpt}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {fields: {sourceInstanceName: {eq: "blog"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            year: date(formatString: "YYYY")
            title
            category
            hero_image {
              childImageSharp{
                fluid(maxWidth: 640, quality:75){
                  base64
                  originalImg
                  originalName
                  sizes
                  src
                  srcSet
                  aspectRatio
                  presentationHeight
                  presentationWidth
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
