import React from 'react'
import {Helmet} from 'react-helmet'

import "./comparison.scss"

class Comparison extends React.Component {
  render() {
    const { imageLeft, imageRight, captionLeft, captionRight } = this.props

    return (
      <div className="juxtapose">
        <img src={imageLeft} alt={captionLeft} data-label={captionLeft} />
        <img src={imageRight} alt={captionRight} data-label={captionRight} />
        <Helmet>
          <script src="/juxtapose.min.js"></script>
        </Helmet>
      </div>
    )
  }
}

export default Comparison