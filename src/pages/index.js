import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

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
              <article key={node.fields.slug} className='post'>
                <Link to={`${node.frontmatter.category}/${node.frontmatter.year}${node.fields.slug}`} >
                  <Img
                    className='post__img'
                    fluid={node.frontmatter.hero_image.childImageSharp.fluid}
                    alt={title}
                    title={title}
                  />
                </Link>
                <div className='post__text'>
                  <p className='post__date'>{node.frontmatter.date} &#8226; {node.timeToRead} min read</p>
                  <h1 className='post__title'>
                    <Link to={`${node.frontmatter.category}/${node.frontmatter.year}${node.fields.slug}`} >
                      {title}
                    </Link>
                  </h1>
                  <p
                    className='post__excerpt'
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <p>
                    <Link
                      className='post__link'
                      to={`${node.frontmatter.category}/${node.frontmatter.year}${node.fields.slug}`}
                    >Read More
                    </Link>
                  </p>
                </div>
              </article>
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
            description
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
