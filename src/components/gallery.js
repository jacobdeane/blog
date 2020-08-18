import React from 'react'
import {Helmet} from 'react-helmet'

import "/js/photoswipe/photoswipe.css"
import "/js/photoswipe/default-skin/default-skin.css" 

class Gallery extends React.Component {
  render() {

    return (
        <Helmet>
          <script src="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/photoswipe.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/photoswipe-ui-default.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/jacobdeane/blog/static/js/photoswipe/photoswipe.init.js"></script>
        </Helmet>
    )
  }
}

export default Gallery