import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'


const LoginSignup = () => {

  const [state, setState] = useState("Login")
  const [formDate, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    
  })

  const handleChange = (e) => {
    setFormData({
      ...formDate,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {
    console.log('login executed', formDate)
    let responseData
    await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDate)
    }).then(response => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    } else {
      alert(responseData.erros)
    }
  }

  const signup = async () => {
    console.log('signup executed', formDate)
    let responseData
    await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDate)
    }).then(response => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    } else {
      alert(responseData.erros)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==='Sign Up' ? <input name='username' value={formDate.username} onChange={handleChange} type="text" placeholder="Your name" /> : <></>} 
          <input name='email' value={formDate.email}  onChange={handleChange} type="email" placeholder="Email" />
          <input name='password' value={formDate.password} onChange={handleChange} type="password" placeholder="Password" />
          <button onClick={()=>{state==='Login' ? login() : signup()}}>Continue</button>
          {state==='Sign Up' ? <p className="loginsignup-login"> Already have an account ?<span onClick={()=>{setState('Login')}} >Login here </span> </p>
          :<p className="loginsignup-login"> Create an account ?<span onClick={()=>{setState('Sign Up')}} >Click Here </span> </p>}
          
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By signing up, you agree to our Terms & Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup