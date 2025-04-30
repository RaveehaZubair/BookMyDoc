// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // You can add some logic here to detect the user's role if needed
  const user = JSON.parse(localStorage.getItem("user"));
  
  const navigateToRoleDashboard = () => {
    if (user.role === "doctor") {
      navigate("/doctor-dashboard");
    } else if (user.role === "patient") {
      navigate("/patient-dashboard");
    } else {
      alert("Role not assigned.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to the Dashboard</h2>
      <p>Choose your role to go to your dashboard:</p>
      <button onClick={navigateToRoleDashboard} className="btn btn-primary">
        Go to My Dashboard
      </button>
    </div>
  );
};

export default Dashboard;
