import React, { Component } from "react"
import {Helmet} from 'react-helmet'

//import './photoswipe.css'

export default class Gallery extends Component {

  componentDidMount () {
    let photoswipe = document.getElementById("photoswipe__script");
    if(!photoswipe){ //only load these scripts once!
      let anchor = document.getElementById("page__footer");
      
      let scriptPhotoswipe = document.createElement("script");
      scriptPhotoswipe.setAttribute("src", "/js/photoswipe/photoswipe.min.js");
      scriptPhotoswipe.setAttribute("id", "photoswipe__script");

      let scriptPhotoswipeUI = document.createElement("script");
      scriptPhotoswipeUI.setAttribute("src", "/js/photoswipe/photoswipe-ui-default.min.js");

      let scriptPhotoswipeInit = document.createElement("script");
      scriptPhotoswipeInit.setAttribute("src", "/js/photoswipe/photoswipe.init.js");

      //we should probably combine the above at some point...

      anchor.appendChild(scriptPhotoswipe);
      anchor.appendChild(scriptPhotoswipeUI);
      anchor.appendChild(scriptPhotoswipeInit);

    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <link rel="stylesheet" href="/js/photoswipe/photoswipe.css"></link>
          <link rel="stylesheet" href="/js/photoswipe/default-skin/default-skin.css"></link>
        </Helmet>
      </React.Fragment>
    )
  }
}