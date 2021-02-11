import React from 'react'
import ReactLogo from '../../assets/pages/HomeScreen/ReactLogo'
import './footer.css'
import LOVE_LOGO from '../../assets/footer/love.svg'
export const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with React</p>
      <ReactLogo
        fill={'#61DAFB'}
        opacity={1}
        className="footer__react-logo" />
      <p>and lots of </p>
      <img src={LOVE_LOGO} alt="Love"/>
      <p>by Juan Jose Mayorga © 2021</p>
    </footer>
  )
}
