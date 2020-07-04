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
          <p>Please enter your contact details and a short message below and I will try to answer your query as soon as possible.</p>
          <form name="contact" method="POST" data-netlify="true" netlify>
            <input type="hidden" name="form-name" value="contact" aria-label="form name" />
            <p>
              <label htmlFor="name">Your Name: <input type="text" name="name" aria-label="name" /></label>   
            </p>
            <p>
              <label htmlFor="email">Your Email: <input type="email" name="email" aria-label="email" /></label>
            </p>
            <p>
              <label htmlFor="message">Message: <textarea name="message" aria-label="message" ></textarea></label>
            </p>
            <p>
              <button type="submit">Send Message</button>
            </p>
          </form>
        </article>
      </Layout>
    )
  }
}

export default ContactPage