import {Component} from "react"

import './comparison.scss'

export default class Comparison extends Component {

  componentDidMount () {
      let script = document.createElement("script");
      let anchor = document.getElementById("page__footer");
      script.setAttribute("src", "/js/juxtapose/juxtapose.min.js");
      anchor.appendChild(script);
  }

  render() {
  	return null
  }
}