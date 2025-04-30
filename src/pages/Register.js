import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [userType, setUserType] = useState('patient');
  const navigate = useNavigate();

  const handleUserChange = (type) => setUserType(type);

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <div className="btn-group mb-3">
        <button className={`btn ${userType === 'patient' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleUserChange('patient')}>
          Patient
        </button>
        <button className={`btn ${userType === 'doctor' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleUserChange('doctor')}>
          Doctor
        </button>
      </div>
      {userType === 'patient' ? <PatientForm navigate={navigate} /> : <DoctorForm navigate={navigate} />}
    </div>
  );
}

function PatientForm({ navigate }) {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', age: '', gender: 'Male'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        ...formData,
        role: 'patient'
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");

    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="form-group">
        <label>Name:</label>
        <input name="name" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" name="age" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select name="gender" className="form-control" onChange={handleChange}>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Register as Patient</button>
    </form>
  );
}

function DoctorForm({ navigate }) {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', specialization: '', experience: '', availability: 'Available'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        ...formData,
        role: 'doctor'
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");

    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="form-group">
        <label>Name:</label>
        <input name="name" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Specialization:</label>
        <input name="specialization" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Experience (Years):</label>
        <input type="number" name="experience" className="form-control" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Availability:</label>
        <select name="availability" className="form-control" onChange={handleChange}>
          <option>Available</option><option>Not Available</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Register as Doctor</button>
    </form>
  );
}

export default RegisterPage;
