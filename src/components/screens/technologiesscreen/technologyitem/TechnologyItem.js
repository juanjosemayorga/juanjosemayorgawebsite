import React, { useState } from 'react'
import './technologyitem.css'

export const TechnologyItem = ({ technology }) => {

  const [techItemClicked, setTechItemClicked] = useState(false)

  const handleTechItemClick = _ => setTechItemClicked(!techItemClicked)

  const { image, name } = technology

  return (
    <div
      onClick={handleTechItemClick}
      className="technology-screen-item-container">
      <figure
        className={techItemClicked ? "technology-screen-item__figure--clicked" : "technology-screen-item__figure"}>
        <img
          className="technology-screen-item__image"
          src={image}
          alt={name}
          title={name}/>
      </figure>
      <p
        className={techItemClicked ? "technology-screen-item__technology-text--clicked" : "technology-screen-item__technology-text"}>{name}</p>
    </div>
  )
}
