// src/pages/PatientDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [patientInfo, setPatientInfo] = useState(null);

  useEffect(() => {
    // Fetch patient info and appointments from the server
    const fetchPatientData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/patient/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPatientInfo(res.data.patient);
        setAppointments(res.data.appointments);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPatientData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Patient Dashboard</h2>
      {patientInfo && (
        <div>
          <h3>{patientInfo.name}</h3>
          <p>Age: {patientInfo.age}</p>
          <p>Gender: {patientInfo.gender}</p>
        </div>
      )}
      <h4>Upcoming Appointments</h4>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.doctorName} - {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDashboard;
