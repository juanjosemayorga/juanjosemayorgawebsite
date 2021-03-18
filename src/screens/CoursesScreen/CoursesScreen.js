import React from 'react'
import { CoursesContainer } from '../../components/screens/coursesscreen/CoursesContainer/CoursesContainer'
import './coursesscreen.css'

export const CoursesScreen = () => {
  return (
    <div className="courses-screen-container">
      <h1 className="courses-screen__title">My certifications and courses</h1>
      <CoursesContainer />
      <hr className="courses-screen-divisor"/>
    </div>
  )
}
