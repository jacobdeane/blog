import React from 'react'
import {Helmet} from 'react-helmet'

import "./comparison.scss"

class Comparison extends React.Component {
  render() {

    return (
        <Helmet>
          <script src="/juxtapose.min.js"></script>
        </Helmet>
    )
  }
}

export default Comparison