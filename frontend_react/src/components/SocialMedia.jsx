import React from 'react'
import {BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsFacebook/>
      </div>
      <div>
        <BsLinkedin/>
      </div>
      <div>
        <BsGithub/>
      </div>
    </div>
  )
}

export default SocialMedia
