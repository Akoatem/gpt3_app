import React from 'react'
import  possibility from '../../assets/possibility.png';
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content"> 
           <h4>Request early access to get started</h4>
           <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
           <p>We’re releasing an API for accessing new AI models developed by OpenAI. Unlike most AI systems which are designed for one use-case, the API today provides a general-purpose “text in, text out” interface, allowing users to try it on virtually any English language task. You can now request access in order to integrate the API into your product, develop an entirely new application, or help us explore the strengths and limits of this technology.</p>
           <h4>Request early access to get started</h4>
        </div>

    </div>
  )
}

export default Possibility