import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    let hero = ""
    let article_title = (
      <h1>{post.frontmatter.title}</h1>
    )
    let article_date = (
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
    )

    //get the categories
    let categories = post.frontmatter.other_categories
    categories.sort()

    let theme = ''
    let hero_class = '';

    if (post.frontmatter.hero_image) {

      hero_class = ' hashero'
      theme = 'light'
      
      if(post.frontmatter.dark_image) {
        theme = 'dark'
      }

      hero = (
        <Hero
          theme={theme}
          fluid={post.frontmatter.hero_image.childImageSharp.fluid}
          title={post.frontmatter.title}
          excerpt={post.excerpt}
          categories={categories}
          date={post.frontmatter.date}
        />
       )
      article_title = article_date = ""
    }

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle} 
        theme={theme}
        hero={hero_class}
        vibrant={post.frontmatter.hero_image.colors.vibrant}
        lightMuted={post.frontmatter.hero_image.colors.lightMuted}
        darkMuted={post.frontmatter.hero_image.colors.darkMuted}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {hero}
        <article>
          {article_title}
          {article_date}
          <MDXRenderer>{post.body}</MDXRenderer>
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
        description
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
