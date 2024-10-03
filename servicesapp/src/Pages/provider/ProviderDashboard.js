import React, { useState } from 'react';
import './ProviderDashboard.css';

const ProviderDashboard = () => {
  const workerData = {
    name: "Jane Doe",
    gender: "Female",
    age: 32,
    contactInfo: {
      phone: "+123456789",
      email: "janedoe@example.com"
    },
    experience: "5 years",
    skills: "Plumbing, Electrical Work, Cleaning",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    certifications: "Certified Electrician, Plumber",
    assignedJob: {
      job: "Plumbing",
      description: "Fixing kitchen sink leak",
      customer: {
        name: "John Smith",
        address: "123 Maple Street, NY",
        contact: "+987654321"
      },
      serviceDate: "2024-10-05",
      serviceTime: "10:00 AM - 12:00 PM",
      payment: "$50",
      status: "Upcoming"
    },
    ratings: {
      overall: 4.5,
      individual: [
        { comment: "Great job!", rating: 5 },
        { comment: "Very professional.", rating: 4 },
      ],
      feedbackAnalytics: {
        improvementAreas: ["Timeliness", "Communication"]
      }
    },
    pastBookings: [
      {
        job: "Electrical Work",
        date: "2024-09-01",
        payment: "$80",
        rating: 4.8,
        customerFeedback: "The work was excellent!",
        serviceDuration: "2 hours"
      },
      {
        job: "Cleaning",
        date: "2024-08-25",
        payment: "$30",
        rating: 4.2,
        customerFeedback: "Good job, but could be quicker.",
        serviceDuration: "1.5 hours"
      },
    ],
    earningsOverview: {
      totalEarnings: "$160",
      earningsPerJob: [
        { job: "Electrical Work", earnings: "$80" },
        { job: "Cleaning", earnings: "$30" },
        { job: "Plumbing", earnings: "$50" }
      ],
      pendingPayments: "$50"
    },
    jobRequests: [
      {
        id: 1,
        job: "Carpentry",
        customer: "Alice Johnson",
        date: "2024-10-07",
        description: "Install shelves in living room",
      },
      {
        id: 2,
        job: "Gardening",
        customer: "Bob Brown",
        date: "2024-10-09",
        description: "Weekly lawn maintenance",
      },
    ],
  };

  const [acceptedRequests, setAcceptedRequests] = useState([]);

  const handleAccept = (id) => {
    const request = workerData.jobRequests.find((req) => req.id === id);
    setAcceptedRequests([...acceptedRequests, request]);
  };

  const handleDecline = (id) => {
    const updatedRequests = workerData.jobRequests.filter((req) => req.id !== id);
    workerData.jobRequests = updatedRequests; // Update jobRequests to reflect declines
  };

  return (
    <div className='dashboard-container_p'>
      <div className='title_p'><h1>Provider Dashboard</h1></div>
      
      {/* Profile Section */}
      <div className='profile-section_p'>
        <img src={workerData.profilePicture} alt="Profile" className='profile-picture_p' />
        <div className='profile-details_p'>
          <h2>{workerData.name}</h2>
          <p><strong>Gender:</strong> {workerData.gender}</p>
          <p><strong>Age:</strong> {workerData.age}</p>
          <p><strong>Contact:</strong> {workerData.contactInfo.phone} | {workerData.contactInfo.email}</p>
        </div>
      </div>

      {/* Experience and Skills Section */}
      <div className='experience-skills-section_p'>
        <h3>Experience & Skills</h3>
        <p><strong>Experience:</strong> {workerData.experience}</p>
        <p><strong>Skills:</strong> {workerData.skills}</p>
        <p><strong>Certifications:</strong> {workerData.certifications}</p>
      </div>

      {/* Assigned Job Section */}
      <div className='assigned-job-section_p'>
        <h3>Current Job</h3>
        <p><strong>Job:</strong> {workerData.assignedJob.job}</p>
        <p><strong>Description:</strong> {workerData.assignedJob.description}</p>
        <p><strong>Customer:</strong> {workerData.assignedJob.customer.name}</p>
        <p><strong>Address:</strong> {workerData.assignedJob.customer.address}</p>
        <p><strong>Contact:</strong> {workerData.assignedJob.customer.contact}</p>
        <p><strong>Date:</strong> {workerData.assignedJob.serviceDate}</p>
        <p><strong>Time:</strong> {workerData.assignedJob.serviceTime}</p>
        <p><strong>Payment:</strong> {workerData.assignedJob.payment}</p>
        <p><strong>Status:</strong> {workerData.assignedJob.status}</p>
      </div>

      {/* Ratings Section */}
      <div className='ratings-section_p'>
        <h3>Customer Ratings</h3>
        <p><strong>Overall Rating:</strong> {workerData.ratings.overall} ★</p>
        <h4>Individual Ratings and Reviews:</h4>
        <ul>
          {workerData.ratings.individual.map((feedback, index) => (
            <li key={index}>
              {feedback.comment} - {feedback.rating} ★
            </li>
          ))}
        </ul>
        <h4>Feedback Analytics:</h4>
        <p><strong>Improvement Areas:</strong> {workerData.ratings.feedbackAnalytics.improvementAreas.join(', ')}</p>
      </div>

      {/* Past Bookings Section */}
      <div className='past-bookings-section_p'>
        <h3>Past Bookings</h3>
        <table className='past-bookings-table_p'>
          <thead>
            <tr>
              <th>Job</th>
              <th>Date</th>
              <th>Service Duration</th>
              <th>Payment</th>
              <th>Rating</th>
              <th>Customer Feedback</th>
            </tr>
          </thead>
          <tbody>
            {workerData.pastBookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.job}</td>
                <td>{booking.date}</td>
                <td>{booking.serviceDuration}</td>
                <td>{booking.payment}</td>
                <td>{booking.rating} ★</td>
                <td>{booking.customerFeedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Earnings Overview Section */}
      <div className='earnings-overview-section_p'>
        <h3>Earnings Overview</h3>
        <p><strong>Total Earnings:</strong> {workerData.earningsOverview.totalEarnings}</p>
        <h4>Earnings per Job:</h4>
        <ul>
          {workerData.earningsOverview.earningsPerJob.map((earning, index) => (
            <li key={index}>
              {earning.job}: {earning.earnings}
            </li>
          ))}
        </ul>
        <p><strong>Pending Payments:</strong> {workerData.earningsOverview.pendingPayments}</p>
      </div>

      {/* Job Requests Section */}
      <div className='job-requests-section_p'>
        <h3>Job Requests</h3>
        <ul className='job-requests-list_p'>
          {workerData.jobRequests.map((request) => (
            <li key={request.id} className='job-request_item_p'>
              <p><strong>Job:</strong> {request.job}</p>
              <p><strong>Customer:</strong> {request.customer}</p>
              <p><strong>Date:</strong> {request.date}</p>
              <p><strong>Description:</strong> {request.description}</p>
              <button onClick={() => handleAccept(request.id)} className='accept-button_p'>Accept</button>
              <button onClick={() => handleDecline(request.id)} className='decline-button_p'>Decline</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Help and Support Section */}
      <div className='help-support-section_p'>
        <h3>Help and Support</h3>
        <p><strong>Support Contact Info:</strong> Reach out to our customer service at <a href="mailto:support@example.com">support@example.com</a> or call <strong>(123) 456-7890</strong>.</p>
        <p><strong>Help Center:</strong> Visit our <a href="/help-center">Help Center</a> for FAQs and guides on using the platform.</p>
      </div>
    </div>
  );
};

export default ProviderDashboard;
