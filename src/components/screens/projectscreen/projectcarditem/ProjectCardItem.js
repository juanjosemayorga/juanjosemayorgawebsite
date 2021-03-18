import React from 'react'
import './projectcarditem.css'
import { nanoid } from 'nanoid'
import { TechnologyItem } from '../technologyitem/TechnologyItem'

export const ProjectCardItem = ({ project }) => {

  const { name, information, image, technologies, link } = project

  return (
    <div className="card-container">
      <figure className="card-container__figure">
        <img
          className="card-container__img"
          src={image}
          alt={name}/>
      </figure>
      <h3 className="card-container__title">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
            {name}
        </a>
      </h3>
      <p className="card-container__text">
        {information}
      </p>
      <hr className="card-container__divisor"/>
      <div className="card-container__technologies">
        {
          technologies.map(tech => {
            return <TechnologyItem key={nanoid()} technology={tech} />
          })
        }
      </div>
    </div>
  )
}
