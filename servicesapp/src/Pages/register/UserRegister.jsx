import React from 'react'
import './UserRegister.css';
export const UserRegister = () => {
  return (
    <div className='register-body'>
    <div className='container_register' >
         <div className='title_register'>REGISTRATION</div>
            <form action="#">
                <div className='user-details'>
                    <div className='input-box'>
                        <span className='details'>Full Name</span>
                        <input type="text" placeholder='Enter Your Name' required></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>User Name</span>
                        <input type="text" placeholder='Enter Your User Name' required></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Password</span>
                        <input type="text" placeholder='Enter Your Password' required></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Email</span>
                        <input type="text" placeholder='Enter Your email' required></input>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Phone Number</span>
                        <input type="text" placeholder='Enter Your phone number' required></input>
                    </div>
                    <div className='button'>
                        <input type='submit' value="Register"></input>
                    </div>
                </div>
            </form>
            </div>
    </div>
  )
}
