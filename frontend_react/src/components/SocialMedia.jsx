import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'

const SocialMedia = () => {

  
  return (
    <div className='app__social'>
      

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

      <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b44be890-3f23-423a-ad40-849cf416f498/JoshuaWorden-Dev.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230214T232144Z&X-Amz-Expires=86400&X-Amz-Signature=ba3b77ee4877cecdc5428bf0afd2a7d7f6faddcde43eb5e62efaa5adc0f1ae80&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22JoshuaWorden-Dev.pdf%22&x-id=GetObject">
        <div>
            <AiFillFolderOpen/>
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
