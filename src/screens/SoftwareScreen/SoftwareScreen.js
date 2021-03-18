import React from 'react'
import './softwarescreen.css'
import { SoftwareScreenContainer } from '../../components/screens/softwarescreen/softwarescreencontainer/SoftwareScreenContainer'

export const SoftwareScreen = () => {
  return (
    <div className="software-screen-container">
      <h2 className="software-screen__title">Software I know</h2>
      <SoftwareScreenContainer />
    </div>
  )
}
