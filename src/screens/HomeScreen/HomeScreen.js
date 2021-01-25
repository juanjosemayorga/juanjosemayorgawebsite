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
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  PLATZI_PROFILE,
  FREECODECAMP_PROFILE
} from '../../utils/links'

import { SocialMediaItem } from '../../components/screens/homescreen/SocialMediaItem/SocialMediaItem'

const logos = [
  { name: "LinkedIn", path: LINKEDIN_PROFILE, Logo: LinkedinLogo },
  { name: "Github", path: GITHUB_PROFILE, Logo: GithubLogo },
  { name: "Twitter", path: TWITTER_PROFILE, Logo: TwitterLogo },
  { name: "Platzi", path: PLATZI_PROFILE, Logo: PlatziLogo },
  { name: "FreeCodeCamp", path: FREECODECAMP_PROFILE, Logo: FreecodecampLogo },
]

export const HomeScreen = () => {
  return (
    <main className="home-screen">
      <section className="home-screen-section-1">
          <div className="home-screen-background"></div>
          <div className="home-screen-section-1__image-container">
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
            {
              logos.map((logo, i) => <SocialMediaItem key={i} socialmediaitem={logo} />)
            }
          </div>
          <ReactLogo className="home-screen-section-1__logo-react"/>
      </section>
      <section className="home-screen-section-2__about-me">
        <p className="home-screen-section-2__about-me-text--part-1">Luego de muchos años de auto-formación que me definen porque nunca paro de aprender, soy un <strong>Frontend Developer</strong> con experiencia en HTML, CSS, JavaScript y diseño UI. Hoy me encuentro trabajando con tecnologías como React y Redux.</p>
        <p className="home-screen-section-2__about-me-text--part-2">Todo esto combinado con mi experiencia en la rama audiovisual manejando Software como Premiere Pro CC, After Effects o Photoshop, puedo apoyar en proyectos multidisciplinarios.
        Busco colaborar en proyectos desarrollando productos digitales con piezas de código re-utilizables construidas en React, y así convertirme en un experto en mi área, pues en verdad me apasiona lo que hago.</p>
      </section>
      <section className="home-screen-section-3__contact-and-location">
        <div className="home-screen-section-3__contact-and-location--section-1">
          <MailIcon className="home-screen-section-3__icon"/>
          <a
            className="home-screen-section-3__mail"
            href="mailto:devjuanjose@gmail.com">devjuanjose@gmail.com</a>
        </div>
        <div className="home-screen-section-3__contact-and-location--section-2">
          <LocationIcon className="home-screen-section-3__icon"/>
          <p className="home-screen-section-3__location">Zacatecas, México</p>
        </div>
      </section>
    </main>
  )
}
