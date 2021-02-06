import React, { useEffect, useState } from 'react'
import './projectcardcontainer.css'
import { ProjectCardItem } from '../projectcarditem/ProjectCardItem'
import { projects } from '../../../../data/db.json'
import Carousel from 'react-elastic-carousel'

export const ProjectCardContainer = () => {

  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      const widthSize = window.innerWidth;
      if (widthSize >= 768) {
        setDesktop(true)
      } else {
        setDesktop(false)
      }
    })
  }, [])

  const breakpoints = [
    { width: 1, itemsToShow: 1 }
  ]

  return (
    <div className="project-card-container">
      <Carousel
        className="project-card-container__carousel"
        enableAutoPlay
        autoPlaySpeed={5000}
        pagination={true}
        showArrows={desktop ? true : false}
        breakPoints={breakpoints}>
        <ProjectCardItem project={projects[0]}/>
        <ProjectCardItem project={projects[0]}/>
        <ProjectCardItem project={projects[0]}/>
      </Carousel>
    </div>
  )
}
