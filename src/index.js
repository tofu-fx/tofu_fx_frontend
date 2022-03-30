import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './custom_js/Navbar.js'

//Imports All Components
import HomePage from './components/HomePage.js';
import AdminLogin from './components/AdminLogin.js';
import AdminHome from './components/AdminHome.js';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/admin-access" element={<AdminLogin />} />
        <Route path="/admin-access/home" element={<AdminHome />} />

      </Routes>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
