import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sformat from "../utils/functions"

import "./astrophotography.scss"

class Astrophotography extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    //calculate and sum the total exposure time for all images listed
    //first lets map the posts
    const allExposures = posts.map(({ node }) => {
      //then map each set of filters
      let exposures = node.frontmatter.exposure_details.map((subExposure) => {
        let exposure = subExposure.multiple * subExposure.sub
        //return the total exposure for that filter
        return (exposure)
      })
      //sum each filter's exposures to get total exposure for that image
      return exposures.reduce((a,b) => a + b)
    })
    //finally sum the exposure of each image
    const totalExposure = sformat(allExposures.reduce((a,b) => a + b))

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Astrophotography" location={this.props.location.pathname} />
        <header className="header">
          <h1>Astrophotography</h1>
          <p>Here are a few of my favourite images I have taken so far. Each photo was taken using amateur equipment in my back garden and all represent many hours of total exposure time and processing.</p>
          <p>Total integration time for all images showcased below: {totalExposure}.</p>
        </header>
        <div className="astroimage__wrapper">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className="astroimage">
                <Img className="astroimage__img" fixed={node.frontmatter.hero_image.childImageSharp.fixed} />
                <Link
                  className="astroimage__link"
                  to={`/astrophotography${node.fields.slug}`}
                >
                  <h1 className="astroimage__heading" >{title}</h1>
                </Link>
              </article>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Astrophotography

export const astroQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: {order: DESC, fields: [frontmatter___end_date]}, limit: 1000, filter: {fields: {sourceInstanceName: {eq: "astrophotography"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            exposure_details{
              multiple
              sub
            }
            hero_image {
             childImageSharp{
                fixed(width: 480, height: 480, quality:75){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
