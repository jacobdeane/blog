import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/input"


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

            <Input
              type="text"
              name="name"
              placeholder="First Last"
              label="Name"
            />

            <Input
              type="email"
              name="email"
              placeholder="email@example.com"
              label="Email"
            />

            <Input
              type="textarea"
              name="message"
              placeholder="What do you have to say?"
              label="Message"
            />

            <Input
              type="submit"
              label="Send Message"
            />

          </form>
        </article>
      </Layout>
    )
  }
}

export default ContactPage