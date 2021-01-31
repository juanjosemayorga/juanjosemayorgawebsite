import React from 'react'
import './technologiescontainer.css'
import { TechnologyItem } from '../technologyitem/TechnologyItem'

// Import Technologies

import HTML_LOGO from '../../../../assets/pages/TechnologiesScreen/html.svg'
import CSS_LOGO from '../../../../assets/pages/TechnologiesScreen/css.svg'
import JAVASCRIPT_LOGO from '../../../../assets/pages/TechnologiesScreen/javascript.svg'
import REACT_LOGO from '../../../../assets/pages/TechnologiesScreen/react.svg'
import REDUX_LOGO from '../../../../assets/pages/TechnologiesScreen/redux.svg'
import NODE_LOGO from '../../../../assets/pages/TechnologiesScreen/nodejs.svg'

const TECHNOLOGY_LOGOS = [
  { id: 1, image: HTML_LOGO, name: 'HTML' },
  { id: 2, image: CSS_LOGO, name: 'CSS' },
  { id: 3, image: JAVASCRIPT_LOGO, name: 'JavaScript' },
  { id: 4, image: REACT_LOGO, name: 'React.js' },
  { id: 5, image: REDUX_LOGO, name: 'Redux' },
  { id: 6, image: NODE_LOGO, name: 'Node.js' },
]

export const TechnologiesContainer = () => {
  return (
    <div className="technology-screen-technologies-container">
      {
        TECHNOLOGY_LOGOS.map(technology => <TechnologyItem key={technology.id} technology={technology} />)
      }
    </div>
  )
}
