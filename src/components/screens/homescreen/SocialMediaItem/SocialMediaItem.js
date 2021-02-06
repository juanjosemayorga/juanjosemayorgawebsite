import React from 'react'
import './socialmediaitem.css'

export const SocialMediaItem = ({ socialmediaitem }) => {

  const { Logo, path, name } = socialmediaitem;

  return (
    <a
      className="social-media-item-container"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      title={name}>
        <Logo className="social-media-item-container__logo"/>
    </a>
  )
}
