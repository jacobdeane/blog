import React from "react"

import "./input.scss"

class Input extends React.Component {
  render() {
  	
  	const {type, placeholder, label, name } = this.props

    if (type === 'submit') {
      return(
        <button type="submit" className="button input__submit" aria-label={label} >{label}</button>
      )
    }

  	const input = (type === 'textarea') ? <textarea name={name} aria-label={label}  placeholder={placeholder} required ></textarea> : <input type={type} name={name} aria-label={label} placeholder={placeholder} required />

  	return (
  		<label className="has-float-label" htmlFor={name} >
		  {input}
		  <span>{label}</span>
		</label>
  	)
  }
}

export default Input