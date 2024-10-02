import React from 'react';
import './ProviderDashboard.css';

const ProviderDashboard = () => {
  const workerData = {
    name: "Jane Doe",
    gender: "Female",
    experience: "5 years",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    assignedJob: {
      job: "Plumbing",
      time: "2 hours",
      payment: "$50",
    },
    ratings: 4.5,
    pastBookings: [
      { job: "Electrical Work", date: "2024-09-01", payment: "$80", rating: 4.8 },
      { job: "Cleaning", date: "2024-08-25", payment: "$30", rating: 4.2 },
    ],
  };

  return (
    <div className='dashboard-container'>
      <div className='title'><h1>Provider Dashboard</h1></div>
      
      {/* Profile Section */}
      <div className='profile-section'>
        <img src={workerData.profilePicture} alt="Profile" className='profile-picture' />
        <div className='profile-details'>
          <h2>{workerData.name}</h2>
          <p><strong>Gender:</strong> {workerData.gender}</p>
          <p><strong>Experience:</strong> {workerData.experience}</p>
        </div>
      </div>

      {/* Assigned Job Section */}
      <div className='assigned-job-section'>
        <h3>Current Job</h3>
        <p><strong>Job:</strong> {workerData.assignedJob.job}</p>
        <p><strong>Time:</strong> {workerData.assignedJob.time}</p>
        <p><strong>Payment:</strong> {workerData.assignedJob.payment}</p>
      </div>

      {/* Ratings Section */}
      <div className='ratings-section'>
        <h3>Customer Ratings</h3>
        <p><strong>Rating:</strong> {workerData.ratings} ★</p>
      </div>

      {/* Past Bookings Section */}
      <div className='past-bookings-section'>
        <h3>Past Bookings</h3>
        <table className='past-bookings-table'>
          <thead>
            <tr>
              <th>Job</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {workerData.pastBookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.job}</td>
                <td>{booking.date}</td>
                <td>{booking.payment}</td>
                <td>{booking.rating} ★</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProviderDashboard;
