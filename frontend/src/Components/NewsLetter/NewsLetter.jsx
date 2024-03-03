import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Offers  On your Email</h1>
        <p>Subscripe To Our NewLetter</p>
        <div>
            <input type='email' placeholder='Enter Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter