import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient'); // default patient login

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login Info:', { email, password, userType });

    // Here you would usually send data to your backend API
    // axios.post('/api/login', { email, password, userType }) ...
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

        <button type="submit" className="btn btn-success mt-3">
          Login as {userType === 'patient' ? 'Patient' : 'Doctor'}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
