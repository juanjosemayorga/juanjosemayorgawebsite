import React from 'react'
import './projectcarditem.css'

import CORONA_DATA_IMG from '../../../../assets/pages/ProjectsScreen/corona-data-example-img.png'

export const ProjectCardItem = () => {
  return (
    <div className="project-card-item-container">
      <figure className="project-card-item__image-container">
        <img
          src={CORONA_DATA_IMG}
          alt="example project" className="project-card-item__image-container-image"/>
      </figure>
      <div>
        <h3>CoronaData</h3>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur doloribus nobis cupiditate soluta obcaecati, quisquam ducimus necessitatibus blanditiis facilis ipsam accusantium repellendus quaerat. Aliquam nihil totam facilis nemo nobis.</p>
      <hr/>
      tecnologias
    </div>
  )
}
