import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthToggle from './pages/AuthToggle'; // Import AuthToggle
import Dashboard from './pages/Dashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthToggle />} />  {/* Render AuthToggle here */}
        <Route path="/register" element={<AuthToggle />} />
        <Route path="/login" element={<AuthToggle />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
