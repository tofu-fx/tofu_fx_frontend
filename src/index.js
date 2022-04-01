import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './custom_js/Navbar.js'

//Imports All Components
import HomePage from './components/HomePage.js';
import ShopCategory from './components/ShopCategory.js';
import Commissions from './components/Commissions.js';
import ShoppingCart from './components/ShoppingCart.js';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/commissions" element={<Commissions/>} />
        <Route path="/cart" element={<ShoppingCart/>} />

        <Route path="/shop/banners" element={<ShopCategory category="banners" main_title="BANNERS"/>} />
        <Route path="/shop/headers" element={<ShopCategory category="headers" main_title="HEADERS"/>} />
        <Route path="/shop/logos" element={<ShopCategory category="logos" main_title="LOGOS"/>} />
        <Route path="/shop/streaming_graphics" element={<ShopCategory category="streaming_graphics" main_title="STREAMING GRAPHICS"/>} />
        <Route path="/shop/thumbnails" element={<ShopCategory category="thumbnails" main_title="THUMBNAILS"/>} />
        <Route path="/shop/wallpapers" element={<ShopCategory category="wallpapers" main_title="WALLPAPERS"/>} />

      </Routes>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
