import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

import hexToHSL from "../utils/hexToHSL"
import "./hero.scss"

class Hero extends React.Component {
  render() {
  	const {theme, color, vibrant, fluid, title, excerpt, categories, date } = this.props

  	//theme based colors
	let category_multiplier = 1
	let category_brightness = 70
	let overlay_bg = hexToHSL(color, null, 80, 0.6)

	if(theme === 'dark') {
		category_multiplier = -1
		category_brightness = 30
		overlay_bg = hexToHSL(color, null, 20, 0.6)
	}

  	const Overlay = styled.div`
	  background-color:${overlay_bg};
	`

  	return (
  		<header className={`hero ${theme}`} >
	  		<Img
	  			className='hero__img'
	  			fluid={fluid} 
	  		/>
	  		<Overlay className='hero__overlay' >
	  			<div className='hero__row' >
		  			<div className='hero__text' >
		  				<ul className='hero__categories'>
							{categories.map((link, index) => (
								<li key={link} className='hero__categories__item' style={{backgroundColor: hexToHSL(vibrant, null, category_brightness + index * category_multiplier * 5)}}	>
									<Link to={'/' + link}>
									{link.replace('-',' ')}
									</Link>
								</li>
							))}
						</ul>
		  				<h1>{title}</h1>
		  				<p className='hero__excerpt' >{excerpt}</p>
		  				<p className='hero__date' >{date}</p>
		  			</div>
		  		</div>
	  		</Overlay>
  		</header>
  	)
  }
}

export default Hero