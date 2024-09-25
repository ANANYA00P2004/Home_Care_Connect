import React from 'react'
import "./Choose.css";
export const Choose = () => {
  return (
   <div>
    <div className='title'><h1>Choose Your User Type</h1></div>
    <div className='container_choose'>
      <div className='card-container-1'>
        <h3 className='card-title'>CUSTOMER</h3>
       
        <p className='card-description'>Users who wish to be served with services login here</p>
      <a href='#' className='card-btn'>Login here</a>
      </div>
      <div className='card-container-2'>
        <h3 className='card-title'>PROVIDER</h3>
       
        <p className='card-description'>Trained employees who are ready to offer services to customers can login here</p>
      <a href='#' className='card-btn'>Login here</a>
      </div>
    </div>
    </div>
   
  );
};
