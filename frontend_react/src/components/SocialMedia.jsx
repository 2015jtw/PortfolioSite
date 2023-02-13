import React from 'react'
import {BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs'

const SocialMedia = () => {

 
  return (
    <div className='app__social'>
      <a href="https://www.facebook.com/joshua.worden.7">
        <div>
            <BsFacebook/>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/josh-worden/">
        <div>
          <BsLinkedin/>
        </div>
      </a>
      <a href="https://github.com/2015jtw">
        <div>
          <BsGithub/>
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
