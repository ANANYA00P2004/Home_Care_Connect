import React from 'react'
import './UserLogin.css';
export const UserLogin = () => {
  return (
    <div className='container_login'>
        <form>
            <h1>Customer Login Form</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
            <div className='field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='Username'/>
            </div>
            <div className='field'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email'/>
            </div>
            <div className='field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password'/>
            </div>
            <button className='fluid ui button blue'>Submit</button>
            </div>
        </form>
    </div>
  );
};
