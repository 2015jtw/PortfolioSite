import React, { Fragment } from 'react'
import './Footer.scss'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import {client} from '../../client'
import { useState } from 'react'

const Footer = () => {
  
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setloading] = useState(false)

  const {name, email, message} = formData;


  function handleChangeInput(e){
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  function handleSubmit(){
    setloading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact).then(() => {
      setloading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <Fragment>
      <h2 className="head-text">
        Grab a coffee & chat with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:2015JTW@gmail.com" className='p-text'>2015JTW@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (703) 486-6043" className='p-text'>+1 (703) 486-6043</a>
        </div>
      </div>

    {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className="app__flex">
          <input 
            type="text" className="p-text" placeholder='Your name' 
            value={name} onChange={handleChangeInput} name='name' 
          />
        </div>
        <div className="app__flex">
          <input 
            type="email" className="p-text" placeholder='Your Email' 
            value={email} onChange={handleChangeInput} name='email' 
          />
        </div>
        <div>
          <textarea 
            className='p-text' 
            placeholder='Your Message' 
            value={message} 
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button 
          type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
        </button>
      </div>
      : <div><h3 className='head-text'>Thank you for getting in touch!</h3></div>}
    </Fragment>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)