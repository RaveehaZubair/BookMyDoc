import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthToggle from './pages/AuthToggle'; // Import AuthToggle

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthToggle />} />  {/* Render AuthToggle here */}
        <Route path="/register" element={<AuthToggle />} />
        <Route path="/login" element={<AuthToggle />} />
      </Routes>
    </Router>
  );
}

export default App;
