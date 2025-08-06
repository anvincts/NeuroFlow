import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MoodCheckin from './components/MoodCheckin';

function Login() {
  const [employee, setEmployee] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const DUMMY_USER = 'employee1';
  const DUMMY_PASS = 'password123';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!employee || !password) {
      setError('Please enter both employee and password');
      return;
    }
    // Send login to backend
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employee, password }),
      });
      const data = await res.json();
      // Dummy check: backend should return { success: true } for correct credentials
      if (employee === DUMMY_USER && password === DUMMY_PASS && data.success) {
        setError('');
        navigate('/mood');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `url('/src/assets/bg.jpg') center/cover no-repeat` }}>
      <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2.5rem 2rem', width: '100%', maxWidth: 380, textAlign: 'center' }}>
        <img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f4aa.png" alt="NeuroFlow Logo" style={{ width: 56, marginBottom: 16 }} />
        <h2 style={{ marginBottom: 24, color: '#1976d2', fontWeight: 700, fontSize: '1.6rem' }}>Employee Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Employee ID"
            value={employee}
            onChange={e => setEmployee(e.target.value)}
            style={{
              width: '100%',
              marginBottom: '1rem',
              padding: '0.75rem',
              borderRadius: 8,
              border: '1px solid #bdbdbd',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              marginBottom: '1rem',
              padding: '0.75rem',
              borderRadius: 8,
              border: '1px solid #bdbdbd',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: 8,
              background: '#1976d2',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              border: 'none',
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
              cursor: 'pointer',
              marginBottom: 8,
              transition: 'background 0.2s',
            }}
          >
            Login
          </button>
        </form>
        {error && <p style={{ color: '#d32f2f', marginTop: 8 }}>{error}</p>}
        <p style={{ fontSize: '0.95rem', color: '#757575', marginTop: 24 }}>
          NeuroFlow is an AI-powered workplace wellness tracker.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
        <h1>NeuroFlow</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mood" element={<MoodCheckin />} />
        </Routes>
      </div>
    </Router>
  );
}