import React from 'react'
import './softwarescreencontainer.css'
import { software } from '../../../../data/db.json'
import { SoftwareScreenItem } from '../softwarescreenitem/SoftwareScreenItem'

export const SoftwareScreenContainer = () => {
  return (
    <div className="software-screen-software-container">
      {
        software.map(software => <SoftwareScreenItem key={software.id} software={software} />)
      }
    </div>
  )
}
