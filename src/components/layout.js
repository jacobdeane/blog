import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "styled-components"

import hexToHSL from "../utils/hexToHSL"

import SiteLogo from "../../content/assets/logo.svg"

//import { rhythm, scale } from "../utils/typography"

import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { title, children, theme, vibrant } = this.props

    let global_styles = ""

    if(vibrant) {
      const color_link = hexToHSL(vibrant, null, 50)
      const color_link_hover = hexToHSL(vibrant, null, 70)
      const color_selection = hexToHSL(vibrant)

      global_styles = (
        <Global
          styles={css`
            article a:link, article a:visited {
              color: ${color_link};
            }
            article a:hover, article a:active {
              color: ${color_link_hover};
            }
            *::selection {
              background: ${color_selection};
              color: white;
            }
            *::moz-selection {
              background: ${color_selection};
              color: white;
            }
          `}
        />
      )
    }
    
    return (
      <Wrapper>
          <header className={`navbar ${theme}`}>
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
        {global_styles}
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
