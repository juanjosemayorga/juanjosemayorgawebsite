import React from 'react'
import './technologyitem.css'

export const TechnologyItem = ({ technology }) => {

  const { image, name } = technology

  return (
    <div
      className="technology-screen-item-container">
      <figure
        className="technology-screen-item__figure">
        <img
          className="technology-screen-item__image"
          src={image}
          alt={name}
          title={name}/>
      </figure>
      <p
        className="technology-screen-item__technology-text">{name}</p>
    </div>
  )
}
