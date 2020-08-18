import React, { Component } from "react"
import { Helmet } from "react-helmet"

import "./comparison.scss"

class Comparison extends Component {
  render(props) {
    return (
      <React.Fragment>
        <Helmet>
          <script src="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/juxtapose/juxtapose.min.js" />
        </Helmet>
      </React.Fragment>
    )
  }
}

export default Comparison