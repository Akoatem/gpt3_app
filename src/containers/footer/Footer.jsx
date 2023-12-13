import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
        {/* <button type='button'></button> */}
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Address: 204 wale street,Cape Town, South Africa</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Contact</p>
          <p>Testimonial</p>
      </div>
      <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Workshop</p>
          <p>Learning</p>
          <p>Delivery</p>
          <p>Courses</p>
          <p>FAQ</p>
      </div>
      <div className='gpt3__footer-links_div'>
          <h4>Get intouch</h4>
          <p>23 Godorn street</p>
          <p>Phone: 097473647</p>
          <p>Email: akoatem@gmail.com</p>
      </div>
    </div>
    <div className='gpt3__footer-copyright'>
     <p>CopyRight@ 2023 GPTS | All Right Reserved-AKO ATEM DEV</p>
    </div>
   </div>
  )
}

export default Footer