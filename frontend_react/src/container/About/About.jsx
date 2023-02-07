import React, { Fragment } from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import {images} from '../../constants'
import { urlFor, client } from '../../client'

const abouts = [
  {title: 'Front-End Developer', description: 'I am an experienced Front-End Developer.', imgUrl: images.about01},
  {title: 'Back-End Developer', description: 'I am a proficient Back-End Developer.', imgUrl: images.about02},
  {title: 'Full-Stack Developer', description: 'I am a strong Full-Stack Developer.', imgUrl: images.about03},
  {title: 'MERN Stack', description: 'I excel in utilizing the MERN stack for developing applications', imgUrl: images.about04}
]

const About = () => {
  const [abouts, setAbout] = useState([])

  useEffect(() => {
    const query = '*[_type== "abouts"]';
    client.fetch(query).then((data) => {
      setAbout(data);
    })

  }, [])

  return (
    <Fragment>
      <h2 className='head-text'>
        I know that 
        <span> Good Design </span>
        <br />
        means 
        <span> Good Business</span>
      </h2>

      <div className="app__profile">
        {abouts.map((about, idx) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + idx}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </Fragment>
  )
}

export default About
