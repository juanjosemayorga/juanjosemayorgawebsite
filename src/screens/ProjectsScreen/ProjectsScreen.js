import React from 'react'
import { ProjectCardItem } from '../../components/screens/homescreen/projectcard/ProjectCardItem'
import './projectsscreen.css'

export const ProjectsScreen = () => {
  return (
    <div className="projects-screen-container">
      <h2 className="projects-screen__title">Proyectos</h2>
      <ProjectCardItem />
    </div>
  )
}
