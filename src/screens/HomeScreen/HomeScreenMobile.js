import React from 'react'
import './homescreenmobile.css'
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

export const HomeScreenMobile = () => {
  return (
    <main className="home-screen">
      <section className="home-screen__section-1">
        <ReactLogo className="home-screen__logo" />
        <figure className="home-screen__section-1--figure">
          <img
            src={PROFILE_PICTURE}
            alt="Profile"
            className="home-screen__section-1--image"/>
        </figure>
        <h1 className="home-screen__section-1--name">Juan Jose Mayorga Garcia</h1>
      </section>
      <section className="home-screen__section-2">
        <h3 className="home-screen__section-2--profession">Frontend Developer</h3>
        <div className="home-screen__section-2--container-social-media">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_PROFILE}>
            <LinkedinLogo />
            {/* <p>LinkedIn</p> */}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_PROFILE}>
            <GithubLogo />
            {/* <p>Github</p> */}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={TWITTER_PROFILE}>
            <TwitterLogo />
            {/* <p>Twitter</p> */}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={PLATZI_PROFILE}>
            <PlatziLogo />
            {/* <p>Platzi</p> */}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={FREECODECAMP_PROFILE}>
            <FreecodecampLogo />
            {/* <p>Freecodecamp</p> */}
          </a>
        </div>
        <div className="home-screen__section-2--container-contact">
          <div>
            <MailIcon />
            <p>devjuanjose@gmail.com</p>
          </div>
          <div>
            <LocationIcon />
            <p>Zacatecas, México</p>
          </div>
        </div>
      </section>
    </main>
  )
}
