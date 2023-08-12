import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navBar';
import Footer from '../components/footer';

import Login from '../pages/login';
import Registro from '../pages/register';
import Home from '../pages/home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
