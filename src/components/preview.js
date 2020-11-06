import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby" 

import "./preview.scss"

class Preview extends React.Component {
  render() {
  	
  	const { id, slug, category, year, fluid, title, date, timeToRead, excerpt } = this.props
  	return (
  		<article key={id} id={`post-${id}`} className='post' >
			<Link to={`/${category}/${year}${slug}`} className='post__thumb' >
				<Img
				className='post__thumb__img'
				fluid={fluid}
				alt={title}
				title={title}
				/>
			</Link>
			<div className='post__text'>
				<p className='post__date'>{date} &#8226; {timeToRead} min read</p>
				<h1 className='post__title'>
					<Link to={`/${category}/${year}${slug}`} >{title}</Link>
				</h1>
				<p
				className='post__excerpt'
				dangerouslySetInnerHTML={{
				__html: excerpt,
				}}
				/>
				<Link className='post__link' to={`/${category}/${year}${slug}`} >
					<button className='button' >Read More</button>
				</Link>
				
			</div>
      </article>
  	)
  }
}

export default Preview