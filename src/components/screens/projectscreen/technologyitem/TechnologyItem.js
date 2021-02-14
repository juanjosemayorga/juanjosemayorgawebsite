import React from 'react'
import './technologyitem.css'

export const TechnologyItem = ({ technology }) => {

  const { name, image } = technology

  return (
    <div className="technology-item-container">
      <figure className="technology-item-container__figure">
        <img
          className="technology-item-container__picture"
          src={image}
          alt={name}
          title={name}
        />
      </figure>
      <p className="technology-item-container__text">{name}</p>
    </div>
  )
}
