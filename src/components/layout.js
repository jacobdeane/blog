import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SiteLogo from "../../content/assets/logo.svg"

//import { rhythm, scale } from "../utils/typography"

import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    
    return (
      <Wrapper>
          <header>
            <h1
              className='header__title' 
              title={title}
            >
              <Link to={`/`}>
                <SiteLogo
                  id='logo'
                />
              </Link>
            </h1>
            <nav className='menu'>
              <input type="checkbox" id="menu" className="menu__hidden" aria-label="Open Menu"/>
              <label htmlFor="menu" className="menu__open">
                <i/>
                <i/>
                <i/>
              </label>
              <div className="menu__container">
                <ul className='menu__list'>
                  <ListLink to={`/`}>Home</ListLink>
                  <ListLink to={`/astrophotography/`}>Astrophotography</ListLink>
                  <li className='menu__item'><a href='https://shop.jacobdeane.com/'>Shop</a></li>
                  <ListLink to={`/about/`}>About</ListLink>
                  <ListLink to={`/contact/`}>Contact</ListLink>
                </ul>
              </div>
            </nav>
          </header>
          <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} Jacob Deane
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const ListLink = props => (
  <li className='menu__item'>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default Layout
