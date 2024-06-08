import React from 'react';
import Register from './component/auth/register/Register';
import Login from './component/auth/login/Login';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './component/home/Banner';
import Navbar from './component/nav/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App