import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient'); // default patient login
  const [loading, setLoading] = useState(false); // Loading state for the login request
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login is triggered

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
        role: userType // backend expects role
      });

      const { token, user } = response.data;

      // ✅ Save token and user info
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate to dashboard
      navigate("/dashboard");

    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "Login failed. Check your credentials.");
    } finally {
      setLoading(false); // Set loading back to false after the request finishes
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      {/* Toggle between Patient and Doctor */}
      <div className="btn-group mb-3">
        <button className={`btn ${userType === 'patient' ? 'btn-primary' : 'btn-outline-primary'}`} 
                onClick={() => setUserType('patient')}>
          Patient
        </button>
        <button className={`btn ${userType === 'doctor' ? 'btn-primary' : 'btn-outline-primary'}`} 
                onClick={() => setUserType('doctor')}>
          Doctor
        </button>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email address:</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success mt-3" disabled={loading}>
          {loading ? 'Logging in...' : `Login as ${userType === 'patient' ? 'Patient' : 'Doctor'}`}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
