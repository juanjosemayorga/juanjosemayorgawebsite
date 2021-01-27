import React from 'react'
import './projectcarditem.css'

export const ProjectCardItem = ({ project }) => {

  const { name, information, image, technology } = project

  // const WORLD_PICTURE = 'https://jjmg-pictures.s3.amazonaws.com/coronadata-example.png';

  return (
    <div className="card-container">
      <figure className="card-container__figure">
        <img
          className="card-container__img"
          src={image}
          alt={name}/>
      </figure>
      <h3 className="card-container__title">{name}</h3>
      <p className="card-container__text">
        {/* CoronaData es un proyecto creado para mostrar la cantidad de camas de las que dispone cada país para atender a sus enfermos de COVID-19, todo esto en un mapa interactivo con gráficos. */}
        {information}
      </p>
      <hr className="card-container__divisor"/>
      <div className="card-container__technologies">
        <p>Tecnología 1</p>
        <p>Tecnología 2</p>
        <p>Tecnología 3</p>
      </div>
    </div>
  )
}
