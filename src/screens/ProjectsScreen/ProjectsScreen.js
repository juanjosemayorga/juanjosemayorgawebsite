import React from 'react'
import { ProjectCardContainer } from '../../components/screens/projectscreen/projectcardcontainer/ProjectCardContainer'
import './projectsscreen.css'

export const ProjectsScreen = () => {
  return (
    <div className="projects-screen-container">
      <h2 className="projects-screen__title">Proyectos</h2>
      <ProjectCardContainer />
      <hr className="project-screen-divisor"/>
    </div>
  )
}
