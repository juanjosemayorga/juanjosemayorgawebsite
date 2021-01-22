import React from 'react'
import './homescreen.css'
import ReactLogo from '../../assets/pages/HomeScreen/ReactLogo'

// social media logos
import LinkedinLogo from '../../assets/pages/HomeScreen/social-media/LinkedinLogo'
import GithubLogo from '../../assets/pages/HomeScreen/social-media/GithubLogo'
import TwitterLogo from '../../assets/pages/HomeScreen/social-media/TwitterLogo'
import PlatziLogo from '../../assets/pages/HomeScreen/social-media/PlatziLogo'
import FreecodecampLogo from '../../assets/pages/HomeScreen/social-media/FreecodecampLogo'

import MailIcon from '../../assets/pages/HomeScreen/MailIcon'
import LocationIcon from '../../assets/pages/HomeScreen/LocationIcon'

// links
import {
  PROFILE_PICTURE,
  FREECODECAMP_PROFILE,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  PLATZI_PROFILE,
  TWITTER_PROFILE
} from '../../utils/links'

// Crear un arreglo o un objeto con las imagenes para poderlos iterar y no cargar 
// el componente de tanto texto

export const HomeScreen = () => {
  return (
    <main className="home-screen">
      <section className="home-screen-section-1">
          <div className="home-screen-background"></div>
          <div>
            <figure className="home-screen-section-1__figure">
              <img
                className="home-screen-section-1__image"
                src={PROFILE_PICTURE}
                alt="Profile"/>
            </figure>
          </div>
          <div className="home-screen-section-1__container-titles">
            <h1 className="home-screen-section-1__container-titles--title">Juan Jose Mayorga</h1>
            <h3 className="home-screen-section-1__container-titles--profession">Frontend Developer</h3>
          </div>
          <div className="home-screen-section-1__container-social-media">
            Social Media
          </div>
          <ReactLogo className="home-screen-section-1__logo-react"/>
      </section>
      <section>
        {/* About Me */}
      </section>
      <section>
        {/* Contact */}
      </section>
    </main>
  )
}
