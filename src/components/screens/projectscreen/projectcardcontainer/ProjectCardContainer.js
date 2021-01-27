import React from 'react'
import './projectcardcontainer.css'
import { ProjectCardItem } from '../projectcarditem/ProjectCardItem'
import db from '../../../../data/db.json'

export const ProjectCardContainer = () => {

  console.log(db[0]);

  return (
    <div className="project-card-container">
      <ProjectCardItem project={db[0]}/>
    </div>
  )
}
