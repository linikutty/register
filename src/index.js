import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Register from './Register';
import Effect from './effect';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Link to="/">Home</Link>&nbsp;&nbsp;
    <Link to="/Register">Register</Link>&nbsp;&nbsp;
    <Link  to="/effect">Effect</Link>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Register" element={<Register/>}/>
      <Route path="/effect" element={<Effect/>}/> 
    </Routes>
  </Router>
);



