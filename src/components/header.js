import React from "react"

import "./header.scss"

class Header extends React.Component {
  render() {
  	
  	const { heading, description } = this.props

  	const headingOutput = heading ?
  		<h1 className="header__heading">{heading}</h1>
  	:null

  	const descriptionOutput = description ?
  		<p className="header__description">{description}</p>
  	:null

  	return (
  		<header className='header'>
			{headingOutput}
			{descriptionOutput}
      	</header>
  	)
  }
}

export default Header