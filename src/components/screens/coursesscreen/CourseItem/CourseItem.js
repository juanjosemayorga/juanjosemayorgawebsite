import React from 'react'
import './courseitem.css'

export const CourseItem = ({ image, title }) => {
  return (
    <figure className="course-item-container">
      <img
        className="course-item__image"
        loading="lazy"
        src={image}
        alt={title}
        title={title}/>
    </figure>
  )
}
