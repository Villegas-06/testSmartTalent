import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './container/App';

//import Navbar from './components/navBar';
//import Footer from './components/footer';

import Login from './components/login';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
