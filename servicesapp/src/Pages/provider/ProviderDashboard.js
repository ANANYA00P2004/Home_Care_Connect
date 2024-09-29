import React from 'react';
import './ProviderDashboard.css';

const ProviderDashboard = () => {
  const workerData = {
    name: "Jane Doe",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    assignedWork: [
      { job: "Plumbing", time: "2 hours", payment: "$50", rating: 4.5 },
      { job: "Electrical Work", time: "3 hours", payment: "$80", rating: 4.8 },
      { job: "Cleaning", time: "1 hour", payment: "$30", rating: 4.2 },
    ],
  };

  return (
    <div>
      <div className='title'><h1>Provider Dashboard</h1></div>
      <div className='profile'>
        <img src={workerData.profilePicture} alt="Profile" className='profile-picture' />
        <h2 className='worker-name'>{workerData.name}</h2>
      </div>
      <div className='work-assigned'>
        <h3>Assigned Work</h3>
        <table className='work-table'>
          <thead>
            <tr>
              <th>Job</th>
              <th>Time</th>
              <th>Payment</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {workerData.assignedWork.map((work, index) => (
              <tr key={index}>
                <td>{work.job}</td>
                <td>{work.time}</td>
                <td>{work.payment}</td>
                <td>{work.rating} ★</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProviderDashboard;
