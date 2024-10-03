import React from 'react'
import "./Choose.css";
export const Choose = () => {
  return (
   <div>
    <div className='title'><h1>Choose Your User Type</h1></div>
    <div className='container_choose'>
      <div className='card-container-1'>
        <h3 className='card-title'>CUSTOMER</h3>
       
       
         <p className='card-description'>"If you're looking to access our services, please log in or register to create a new account."</p>
        <div className='two_buttons'>
      <a href='/login' className='card-btn'>Login </a>
      <a href='/register' className='card-btn'>Register</a>
      </div>
      </div>
      <div className='card-container-2'>
        <h3 className='card-title'>PROVIDER</h3>
       
        <p className='card-description'>Trained employees who are ready to offer services to customers can login here</p>
        <div className='two_buttons'>
      <a href='/plogin' className='card-btn'>Login </a>
      <a href='/pregister' className='card-btn'>Register</a>
      </div>
      </div>
    </div>
    </div>
   
  );
};
