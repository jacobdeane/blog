import React, {Component} from "react"

import './comment.scss'

export default class Comment extends Component {

  componentDidMount () {
      let script = document.createElement("script");
      let anchor = document.getElementById("inject-comments-for-uterances");
      script.setAttribute("src", "https://utteranc.es/client.js");
      script.setAttribute("crossorigin","anonymous");
      script.setAttribute("async", true);
      script.setAttribute("repo", "jacobdeane/jacobdeane.com-comments");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute( "theme", "preferred-color-scheme");
      anchor.appendChild(script);
  }

  render() {
    return (
        <div className="comments" id="inject-comments-for-uterances"></div>
    );
  }
}