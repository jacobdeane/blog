import React from 'react'
import {Helmet} from 'react-helmet'

class Gallery extends React.Component {
  render() {

    return (
        <Helmet>
          <link rel="stylesheet" href="/js/photoswipe/photoswipe.css"></link>
          <link rel="stylesheet" href="/js/photoswipe/default-skin/default-skin.css"></link>
          <script src="/js/photoswipe/photoswipe.min.js"></script>
          <script src="/js/photoswipe/photoswipe-ui-default.min.js"></script>
          <script src="/js/photoswipe/photoswipe.init.js"></script>
        </Helmet>
    )
  }
}

export default Gallery