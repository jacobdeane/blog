import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import getConstellation from "../utils/constellation"

import "../pages/astrophotography.scss"

class AstroPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    const designations = post.frontmatter.designations ? <p className="designations">(Also known as: {post.frontmatter.designations.join(', ').replace(/,(?=[^,]*$)/, ' &')})</p> : null
    
    let ra, dec, constellation = null;
    
    //RA
    if (post.frontmatter.ra) {
      let raArray = post.frontmatter.ra.split(' ')
      ra = <li>RA: <span>{raArray[0]}<sup>h</sup> {raArray[1]}<sup>m</sup> {raArray[2]}<sup>s</sup></span></li>
    }
    //DEC
    if (post.frontmatter.dec) {
      let decArray = post.frontmatter.dec.split(' ')
      dec = <li>DEC: <span>{decArray[0]}<sup>&deg;</sup> {decArray[1]}<sup>'</sup> {decArray[2]}<sup>"</sup></span></li>
    }
    //Constellation
    if (post.frontmatter.ra && post.frontmatter.dec) {
      const decimalCoords = post.frontmatter.ra + ' ' + post.frontmatter.dec
      const constellationName = getConstellation(decimalCoords)
      constellation = <li>{constellationName}</li>
    }
    //Distance
    const distance = post.frontmatter.distance ? <li>Distance from Earth: <span>{post.frontmatter.distance.toLocaleString()}</span> ly</li> : null
    //Shot From
    const location = post.frontmatter.location ? <li>Shot from: {post.frontmatter.location}</li> : null

    return (
      <Layout location={this.props.location} title={siteTitle} theme="dark">
        <SEO
          title={post.frontmatter.title}
          description={post.body || post.excerpt}
        />
        <header className={`hero dark fixed`} >
        <Img
          className='hero__img fixed'
          fluid={post.frontmatter.hero_image.childImageSharp.fluid} 
        />
        </header>
        <article>
        <h1>{post.frontmatter.title}</h1>
        {designations}
        <MDXRenderer>{post.body}</MDXRenderer>
        <div className="column__wrapper column__two">
          <div className="column">
            <h4 className="details__heading">Image Details:</h4>
            <ul className="details">
              {ra}{dec}{constellation}{distance}{location}
            </ul>
          </div>
          <div className="column">
            <h4 className="details__heading">Exposures:</h4>
          </div>
        </div>
        </article>
      </Layout>
    )
  }
}

export default AstroPostTemplate

export const astroQuery = graphql`
  query AstroPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        hero_image {
          childImageSharp{
            fluid(maxWidth: 1920, quality:75){
              ...GatsbyImageSharpFluid
            }
          }
          colors{
            lightMuted
            vibrant
            darkMuted
          }
        }
        designations
        ra
        dec
        distance
        location
      }
    }
  }
`
