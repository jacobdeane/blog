import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


class ThankYouPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title="Success">
        <SEO
          title="Thank you for your message"
        />
        <article className="page">
          <h1>Thank you</h1>
          <p>Your message has been recieved and I'll endeavour and get back to you as soon as possible.</p>
        </article>
      </Layout>
    )
  }
}

export default ThankYouPage