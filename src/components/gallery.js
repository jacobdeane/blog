import React, { Component } from "react"
import {Helmet} from 'react-helmet'

class Gallery extends Component {
  render(props) {
    return (
      <React.Fragment>
        <Helmet>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/photoswipe.css"></link>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/default-skin/default-skin.css"></link>
          <script src="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/photoswipe.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/photoswipe-ui-default.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/photoswipe.init.js"></script>
        </Helmet>
      </React.Fragment>
    )
  }
}

export default Gallery