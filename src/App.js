import './App.css';
import React from 'react';
import logo from './Logo.png';
import Footer from "./components/Footer/Footer.js";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Gallery from './Gallery';
import Contact from './Contact';
import Main from './Main.js';
import Shop from './Shop.js'

function App() {
  return (
  <div>
    <Router>
        <nav>
          <Link to="/" className="link">Platformart Gallery</Link>
          <Link to="/gallery" className="link">Our Art</Link>
          <img className="logo"src={logo} width="800px" alt="logo" />
          <Link to="/contact" className="link">Contact Us</Link>
          <Link to="/shop" className="link">Shop</Link>
        </nav>



        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </Router>
        <hr />
        <Footer />
    </div>
    
  );
}

export default App;
