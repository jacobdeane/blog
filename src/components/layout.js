import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "styled-components"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import hexToHSL from "../utils/hexToHSL"

import SiteLogo from "../../content/assets/logo.svg"

import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { title, children, theme, hero, menu } = this.props

    let global_styles = ""

    if(hero) {

      //set the colors for easy reference...
      const vibrant = hero.colors.vibrant
      const lightMuted = hero.colors.lightMuted
      const darkMuted = hero.colors.darkMuted

      const color_link = hexToHSL(vibrant, null, 50)
      const color_link_hover = hexToHSL(vibrant, null, 75)
      const color_selection = hexToHSL(vibrant)

      global_styles = (
        <Global
          styles={css`
            .hero__overlay {
              background-color: ${hexToHSL(darkMuted, null, 20, 0.6)};
            }
            body.light .hero.light .hero__overlay {
              background-color: ${hexToHSL(lightMuted, null, 80, 0.6)};
            }

            .hero__categories__item { background-color: black; }
            .hero__categories__item:nth-of-type(1) { background-color: ${hexToHSL(vibrant, null, 30)}; }
            .hero__categories__item:nth-of-type(2) { background-color: ${hexToHSL(vibrant, null, 25)}; }
            .hero__categories__item:nth-of-type(3) { background-color: ${hexToHSL(vibrant, null, 20)}; }
            .hero__categories__item:nth-of-type(4) { background-color: ${hexToHSL(vibrant, null, 15)}; }
            .hero__categories__item:nth-of-type(5) { background-color: ${hexToHSL(vibrant, null, 10)}; }
            .hero__categories__item:nth-of-type(6) { background-color: ${hexToHSL(vibrant, null, 5)}; }

            body.light .hero.light .hero__categories__item { background-color: white; }
            body.light .hero.light .hero__categories__item:nth-of-type(1) { background-color: ${hexToHSL(vibrant, null, 70)}; }
            body.light .hero.light .hero__categories__item:nth-of-type(2) { background-color: ${hexToHSL(vibrant, null, 75)}; }
            body.light .hero.light .hero__categories__item:nth-of-type(3) { background-color: ${hexToHSL(vibrant, null, 80)}; }
            body.light .hero.light .hero__categories__item:nth-of-type(4) { background-color: ${hexToHSL(vibrant, null, 85)}; }
            body.light .hero.light .hero__categories__item:nth-of-type(5) { background-color: ${hexToHSL(vibrant, null, 90)}; }
            body.light .hero.light .hero__categories__item:nth-of-type(6) { background-color: ${hexToHSL(vibrant, null, 95)}; }

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
          <header className={`navbar ${theme}${menu}`}>
            <h1
              className='header__title' 
              title={title}
            >
              <Link to={`/`} aria-label='home' title='home'>
                <SiteLogo
                  id='logo'
                  title='home'
                />
              </Link>
            </h1>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label className="darkmode__switch" >
                  <input
                    className="darkmode__switch__input"
                    aria-label="Toggle Dark Mode"
                    type="checkbox"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                  />
                  <span className="darkmode__switch__slider">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                </label>
              )}
            </ThemeToggler>
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
