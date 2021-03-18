import React from 'react'
import './projectcardcontainer.css'
import { ProjectCardItem } from '../projectcarditem/ProjectCardItem'
import { projects } from '../../../../data/db.json'

export const ProjectCardContainer = () => {

  return (
    <div className="project-card-container">
      {
        projects.map(project => {
          return <ProjectCardItem key={project.id} project={project} />
        })
      }
    </div>
  )
}
