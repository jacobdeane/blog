import {Component} from "react"

import './comparison.scss'

export default class Comparison extends Component {

	componentDidMount () {
		let juxtapose = document.getElementById("juxtapose__script");
		if(!juxtapose){ //only load this script once!
			let script = document.createElement("script");
			let anchor = document.getElementById("page__footer");
			script.setAttribute("src", "/js/juxtapose/juxtapose.min.js");
			script.setAttribute("id", "juxtapose__script");
			anchor.appendChild(script);
		}
	}

	render() {
		return null
	}
}