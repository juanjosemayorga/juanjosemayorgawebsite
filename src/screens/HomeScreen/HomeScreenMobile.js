import React from 'react'
import ReactLogo from '../../assets/pages/HomeScreen/ReactLogo'
import './homescreenmobile.css'

export const HomeScreenMobile = () => {

  const PROFILE_PICTURE = 'https://jjmg-pictures.s3.amazonaws.com/square_profile_picture.png'

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
        profesion
        social media logos
        adress
        location
      </section>
    </main>
  )
}
