import React from 'react'
import './technologiesscreen.css'
import { TechnologiesContainer } from '../../components/screens/technologiesscreen/technologiescontainer/TechnologiesContainer'

export const TechnologiesScreen = () => {
  return (
    <div className="technology-screen-container">
      <h2 className="technology-screen__title">Tecnologías</h2>
      <TechnologiesContainer />
      <hr/>
    </div>
  )
}
