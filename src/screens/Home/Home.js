import React from 'react'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { ProjectsScreen } from '../ProjectsScreen/ProjectsScreen'
import { TechnologiesScreen } from '../TechnologiesScreen/TechnologiesScreen'

export const Home = () => {
  return (
    <>
      <HomeScreen />
      <ProjectsScreen />
      <TechnologiesScreen />
    </>
  )
}
