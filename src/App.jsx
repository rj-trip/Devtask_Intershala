import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Welcome from './Pages/Welcome.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Account from './pages/Account.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;