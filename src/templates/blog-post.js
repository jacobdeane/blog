import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Comparison from "../components/comparison"

const shortcodes = { Comparison }

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    // Get the article title only if there is no hero image set
    const articleTitle = post.frontmatter.hero_image ? null : <h1>{post.frontmatter.title}</h1>
    // Get the article date only if there is no hero image set
    const articleDate = post.frontmatter.hero_image ? null : <p className='date'>{post.frontmatter.date}</p>
    // Set the hero theme based on if the image is dark or not
    const theme = post.frontmatter.dark_image ? 'dark' : 'light'
    // Go get the hero (if we have a hero image)
    const hero = post.frontmatter.hero_image ? 
        <Hero
          categories={post.frontmatter.other_categories}
          theme={theme}
          fluid={post.frontmatter.hero_image.childImageSharp.fluid}
          title={post.frontmatter.title}
          excerpt={post.excerpt}
          date={post.frontmatter.date}
        />
    : null

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle} 
        theme={theme}
        hero={post.frontmatter.hero_image}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          location={this.props.location.pathname}
        />
        {hero}
        <article>
          {articleTitle}
          {articleDate}
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        category
        other_categories
        hero_image {
          childImageSharp{
            fluid(maxWidth: 1920){
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
            lightMuted
            vibrant
            darkMuted
          }
        }
        dark_image
      }
    }
  }
`
