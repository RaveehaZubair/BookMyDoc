import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterPage() {
  const [userType, setUserType] = useState('patient'); // default: patient

  const handleUserChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      {/* Toggle Buttons */}
      <div className="btn-group mb-3">
        <button className={`btn ${userType === 'patient' ? 'btn-primary' : 'btn-outline-primary'}`} 
                onClick={() => handleUserChange('patient')}>
          Patient
        </button>
        <button className={`btn ${userType === 'doctor' ? 'btn-primary' : 'btn-outline-primary'}`} 
                onClick={() => handleUserChange('doctor')}>
          Doctor
        </button>
      </div>

      {/* Forms */}
      {userType === 'patient' ? <PatientForm /> : <DoctorForm />}
    </div>
  );
}

function PatientForm() {
  return (
    <form>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" placeholder="Enter name" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" className="form-control" placeholder="Enter age" />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select className="form-control">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Register as Patient</button>
    </form>
  );
}

function DoctorForm() {
  return (
    <form>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" placeholder="Enter name" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group">
        <label>Specialization:</label>
        <input type="text" className="form-control" placeholder="e.g., Cardiologist" />
      </div>
      <div className="form-group">
        <label>Experience (Years):</label>
        <input type="number" className="form-control" placeholder="Enter years of experience" />
      </div>
      <div className="form-group">
        <label>Availability:</label>
        <select className="form-control">
          <option>Available</option>
          <option>Not Available</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Register as Doctor</button>
    </form>
  );
}

export default RegisterPage;
