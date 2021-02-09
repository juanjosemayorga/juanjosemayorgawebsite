import React from 'react'
import './softwarescreenitem.css'

export const SoftwareScreenItem = ({ software }) => {

  const { image, name } = software

  return (
    <div className="software-screen-item-container">
      <figure className="software-screen-item__figure">
        <img
          src={image}
          alt={name}
          className="software-screen-item__image"/>
      </figure>
      <p
        className="software-screen-item__software-text">{name}</p>
    </div>
  )
}
