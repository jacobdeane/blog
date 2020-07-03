import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title="Contact">
        <SEO
          title="Contact "
        />
        <article>
          <h1>Contact</h1>
          <p>Contact form goes here</p>
        </article>
      </Layout>
    )
  }
}

export default ContactPage