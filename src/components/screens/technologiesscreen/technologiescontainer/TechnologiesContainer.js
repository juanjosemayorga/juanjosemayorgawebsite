import React from 'react'
import './technologiescontainer.css'
import { TechnologyItem } from '../technologyitem/TechnologyItem'
import { technologies } from '../../../../data/db.json'

export const TechnologiesContainer = () => {
  return (
    <div className="technology-screen-technologies-container">
      {
        technologies.map(technology => <TechnologyItem key={technology.id} technology={technology} />)
      }
    </div>
  )
}
