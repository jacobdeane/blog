import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import hexToHSL from "../utils/hexToHSL"

import SiteLogo from "../../static/logo.svg"
import LinkedInLogo from "../../static/linkedin.svg"
import InstagramLogo from "../../static/instagram.svg"
import PinterestLogo from "../../static/pinterest.svg"
import VimeoLogo from "../../static/vimeo.svg"

import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { title, children, theme, hero } = this.props

    let global_styles = ""

    //set the navbar class so the color works when there is a hero image.
    const headerClass = theme ? 'navbar hashero ' + theme : 'navbar'

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
      <div className='page__wrapper'>
        <div className='page__body'>
          <header className={headerClass} >
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
        </div>
        <footer className='footer'>
          <div className='footer__text'>
            <div className='footer__columns'>
              
              <div>
                <Link to={`/`} aria-label='home' title='home'>
                  <SiteLogo
                    className='footer__logo'
                    title='home'
                  />
                </Link>
                <p>Submarine designer by day, astrophotographer by night.</p>
                <Link className="footer__link" to="/contact/"><button className="footer__button">Contact Me</button></Link>
              </div>
              
              <div>
                <h2 className="category__list__title">Read more about:</h2>
                <ul className="category__list">
                  <ListLink to="/astronomy">Astronomy</ListLink>
                  <ListLink to="/audio-visual">Audio/Visual</ListLink>
                  <ListLink to="/home-automation">Home Automation</ListLink>
                  <ListLink to="/iot">Internet of Things</ListLink>
                  <ListLink to="/smart-home">Smart Home</ListLink>
                  <ListLink to="/technology">Technology</ListLink>
                </ul>
              </div>
            
            </div>

            <ul className="social__list">
              <SocialLink class="linkedin" to="https://www.linkedin.com/in/jacobdeane/" title="Linked In"><LinkedInLogo /></SocialLink>
              <SocialLink class="instagram" to="https://www.instagram.com/jd_astronomy/" title="Instagram"><InstagramLogo /></SocialLink>
              <SocialLink class="pinterest" to="https://pinterest.com/jacobdeane" title="Pinterest"><PinterestLogo /></SocialLink>
              <SocialLink class="vimeo" to="https://vimeo.com/jacobdeane" title="Vimeo"><VimeoLogo /></SocialLink>
            </ul>

            <ul className='legal__list'>
              <li className='legal__list__item'>© {new Date().getFullYear()} Jacob Deane</li>
              <li className='legal__list__item'><Link to="/privacy/">Privacy</Link></li>
              <li className='legal__list__item'><Link to="/terms-and-conditions/">Terms<span className="notMobile" > & Conditions</span></Link></li>
            </ul>

          </div>
        </footer>
        {global_styles}
      </div>
    )
  }
}

const ListLink = props => (
  <li className='menu__item'>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const SocialLink = props => (
  <li className="social__list__item">
    <a className={props.class} href={props.to} rel="noopener noreferrer nofollow" target="_blank" title={props.title} aria-label={props.title}>{props.children}</a>
  </li>      
)

export default Layout
