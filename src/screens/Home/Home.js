import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { CoursesScreen } from '../CoursesScreen/CoursesScreen'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { ProjectsScreen } from '../ProjectsScreen/ProjectsScreen'
import { SoftwareScreen } from '../SoftwareScreen/SoftwareScreen'
import { TechnologiesScreen } from '../TechnologiesScreen/TechnologiesScreen'

export const Home = () => {
  return (
    <>
      <HomeScreen />
      <ProjectsScreen />
      <TechnologiesScreen />
      <CoursesScreen />
      <SoftwareScreen />
      <Footer />
    </>
  )
}
