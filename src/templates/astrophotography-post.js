import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import getConstellation from "../utils/constellation"
import {parse_coordinates} from "../utils/constellation"
import dateRange from "../utils/dateRange"
import sformat from "../utils/functions"

import "../pages/astrophotography.scss"


class AstroPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    const designations = post.frontmatter.designations ? <p className="designations">(Also known as: {post.frontmatter.designations.join(', ').replace(/,(?=[^,]*$)/, ' &')})</p> : null
    
    let ra, dec, constellation, date, virtualsky = null;
    
    //RA
    if (post.frontmatter.ra) {
      let raArray = post.frontmatter.ra.split(' ')
      ra = <li>RA: {raArray[0]}<sup>h</sup> {raArray[1]}<sup>m</sup> {raArray[2]}<sup>s</sup></li>
    }
    
    //DEC
    if (post.frontmatter.dec) {
      let decArray = post.frontmatter.dec.split(' ')
      dec = <li>DEC: {decArray[0]}<sup>&deg;</sup> {decArray[1]}<sup>'</sup> {decArray[2]}<sup>"</sup></li>
    }
    
    if (post.frontmatter.ra && post.frontmatter.dec) {
      //Constellation
      const decimalCoords = post.frontmatter.ra + ' ' + post.frontmatter.dec
      const constellationName = getConstellation(decimalCoords)
      constellation = <li>{constellationName}</li>

      //VirtualSky
      const coords = parse_coordinates(decimalCoords)
      
      let url = new URL("https://virtualsky.lco.global/embed/index.html")
      url.searchParams.set("gradient", "false")
      url.searchParams.set("projection", "gnomic")
      url.searchParams.set("showdate", "false")
      url.searchParams.set("showposition", "false")
      url.searchParams.set("showplanets", "false")
      url.searchParams.set("cardinalpoints", "false")
      url.searchParams.set("ra", 15 * coords[0])
      url.searchParams.set("dec", coords[1])
      url.searchParams.set("constellations", "true")
      url.searchParams.set("scalestars", "1.5")
      url.searchParams.set("fov", "90")
      url.searchParams.set("mouse", "false")
      url.searchParams.set("keyboard", "false")
      url.searchParams.set("ground", "false")
      url.searchParams.set("fontfamily","monospace")
      url.searchParams.set("negative", "false")

      const virtualskyDark = (
        <iframe 
          className="virtualsky dark"
          title="virtualskyDark" 
          width="800" 
          height="400" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src={url.href} 
        ></iframe>)

      //set the iframe for a white background
      url.searchParams.set("negative", "true")

      const virtualskyLight = (
        <iframe 
          className="virtualsky light"
          title="virtualskyLight" 
          width="800" 
          height="400" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src={url.href} 
        ></iframe>)

      virtualsky = (
        <div className="virtualsky__wrapper">
          {virtualskyLight}
          {virtualskyDark}
          <div className="virtualsky__reticle__wrapper">
            <div className="virtualsky__reticle">
            </div>
            <label className="virtualsky__reticle__label">{post.frontmatter.title}</label>
          </div>
        </div>
      )

    }
    
    //Distance
    const distance = post.frontmatter.distance ? <li>Distance from Earth: {post.frontmatter.distance.toLocaleString()} ly</li> : null
    
    //Shot From
    const location = post.frontmatter.location ? <li>Shot from: {post.frontmatter.location}</li> : null
    
    //Date
    if (post.frontmatter.start_date && post.frontmatter.end_date) {
      date = <li>Dates: {dateRange(post.frontmatter.start_date, post.frontmatter.end_date)}</li>
    }

    //Exposures
    const exposures = []
    const allExposures = post.frontmatter.exposure_details.map((subExposure) => {
      exposures.push(<li>{subExposure.filter}: {subExposure.multiple} x {sformat(subExposure.sub)}</li>)
      //return the total exposure for that filter
      let exposure = subExposure.multiple * subExposure.sub
      return (exposure)
    })
    const totalExposure = <li className='total'>Total Integration: {sformat(allExposures.reduce((a,b) => a + b))}</li>

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
        <article className="astro">
        <h1>{post.frontmatter.title}</h1>
        {designations}
        <MDXRenderer>{post.body}</MDXRenderer>
        <div className="column__wrapper column__two">
          <div className="column">
            <h4 className="details__heading">Image Details:</h4>
            <ul className="details">
              {ra}
              {dec}
              {constellation}
              {distance}
              {location}
              {date}
            </ul>
          </div>
          <div className="column">
            <h4 className="details__heading">Exposures:</h4>
             <ul className="details">
              {exposures}
              {totalExposure}
            </ul>
          </div>
        </div>
        {virtualsky}
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
        start_date(formatString: "Do MMMM YYYY")
        end_date(formatString: "Do MMMM YYYY")
        exposure_details{
          filter
          multiple
          sub
        }
      }
    }
  }
`
