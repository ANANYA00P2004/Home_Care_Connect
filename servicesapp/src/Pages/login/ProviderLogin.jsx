import React from 'react'
import "./UserLogin.css"
import { useNavigate } from 'react-router-dom'
const ProviderLogin = () => {
    const navigate = useNavigate();
  return (
    <div className='container_login'>
        <form>
            <h1>Provider Login Form</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
            <div className='field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' required/>
            </div>
            <div className='field'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' required/>
            </div>
            <div className='field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' required/>
            </div>
            <button className='fluid ui button blue' onClick={() => navigate("/provider")}>
                 Submit
                        </button>
            </div>
        </form>
    </div>
  )
}

export default ProviderLogin