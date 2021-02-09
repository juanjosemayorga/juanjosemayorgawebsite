import React from 'react'
import './softwarescreencontainer.css'

import { SoftwareScreenItem } from '../softwarescreenitem/SoftwareScreenItem'

// Import Software Logos
import PHOTOSHOP_LOGO from '../../../../assets/pages/SoftwareScreen/photoshop.svg'
import PREMIERE_LOGO from '../../../../assets/pages/SoftwareScreen/premiere.svg'
import AFTER_EFFECTS_LOGO from '../../../../assets/pages/SoftwareScreen/aftereffects.svg'
import ILLUSTRATOR_LOGO from '../../../../assets/pages/SoftwareScreen/illustrator.svg'
import ADOBE_XD_LOGO from '../../../../assets/pages/SoftwareScreen/adobexd.svg'

const SOFTWARE_LOGOS = [
  { id: 1, image: PHOTOSHOP_LOGO, name: 'Adobe Photoshop CC' },
  { id: 1, image: PREMIERE_LOGO, name: 'Adobe Premiere Pro CC' },
  { id: 1, image: AFTER_EFFECTS_LOGO, name: 'Adobe After Effects CC' },
  { id: 1, image: ILLUSTRATOR_LOGO, name: 'Adobe Illustrator CC' },
  { id: 1, image: ADOBE_XD_LOGO, name: 'Adobe XD' },
]

export const SoftwareScreenContainer = () => {
  return (
    <div className="software-screen-software-container">
      {
        SOFTWARE_LOGOS.map(software => <SoftwareScreenItem key={software.id} software={software} />)
      }
    </div>
  )
}
