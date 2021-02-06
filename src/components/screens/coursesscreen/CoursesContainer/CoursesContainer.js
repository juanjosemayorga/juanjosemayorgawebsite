import React, { useEffect, useState } from 'react'
import './coursescontainer.css'
import Carousel from 'react-elastic-carousel'

import { CourseItem } from '../CourseItem/CourseItem'
import db from '../../../../data/db.json'

export const CoursesContainer = () => {

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
    <div className="course-card-container">
      <Carousel
        className="course-card-container__carousel"
        enableAutoPlay
        autoPlaySpeed={5000}
        pagination={false}
        showArrows={desktop ? true : false}
        breakPoints={breakpoints}>
          {
            db.certificates.map(certificate => <CourseItem key={certificate.id} {...certificate} />)
          }
      </Carousel>
    </div>
  )
}
