import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby" 

import "./hero.scss"

class Hero extends React.Component {
  render() {
  	const {theme, fluid, title, excerpt, categories, date } = this.props

  	return (
  		<header className={`hero ${theme}`} >
	  		<Img
	  			className='hero__img'
	  			fluid={fluid} 
	  		/>
	  		<div className='hero__overlay' >
	  			<div className='hero__row' >
		  			<div className='hero__text' >
		  				<ul className='hero__categories'>
							{categories.map((link, index) => (
								<li key={link} className='hero__categories__item' >
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
	  		</div>
  		</header>
  	)
  }
}

export default Hero