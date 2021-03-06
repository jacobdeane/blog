import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./404.scss"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <article className="page fourofour">
          <h1>404</h1>
          <h2>Whoops! I seem to have lost this page. Sorry about that.</h2>
          <p>Try finding what you are looking for on the <Link to={`/`}>homepage</Link>.</p>
        </article>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
