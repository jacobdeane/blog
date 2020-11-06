import React from "react"
import { graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Preview from "../components/preview"
import hexToHSL from "../utils/hexToHSL"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    const preview_styles = (
      <Global
        styles={css`
          ${posts.map(({ node }) => {

            const lightBackground = hexToHSL(node.frontmatter.hero_image.colors.vibrant,null,75);
            const lightText = hexToHSL(node.frontmatter.hero_image.colors.vibrant,null,20);
            const darkBackground = hexToHSL(node.frontmatter.hero_image.colors.darkMuted,null,20);
            const darkText = hexToHSL(node.frontmatter.hero_image.colors.darkMuted,null,80);

            return (`
              #post-${node.id} {background-color:${lightBackground};}
              #post-${node.id} .post__title a, #post-${node.id} p {color:${lightText};}
              #post-${node.id} .button {border-color: ${lightText}; color: ${lightText};}
              #post-${node.id} .button:hover {background-color: ${lightText}; color: ${lightBackground};}

              .dark #post-${node.id} {background-color:${darkBackground};}
              .dark #post-${node.id} .post__title a, .dark #post-${node.id} p {color:${darkText};}
              .dark #post-${node.id} .button {border-color: ${darkText}; color: ${darkText};}
              .dark #post-${node.id} .button:hover {background-color: ${darkText}; color: ${darkBackground};}
            `)
          })}
        `}
      />
    )
    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" location={this.props.location.pathname} />
        <Bio />
        <div >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Preview
                id={node.id}
                slug={node.fields.slug}
                //colors={node.frontmatter.hero_image.colors}
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
        {preview_styles}
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
          id
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
              colors{
                muted
                darkMuted
                lightMuted
                vibrant
                darkVibrant
                lightVibrant
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
