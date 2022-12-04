

import React from 'react';

// import './index.css';
import Home from './home';
import Register from './Register';

import Weathers from './weatherapp';
import TableEffect from './table_effect';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <nav className='nav_head '>
        <header className='container'>
          <Link to="/" className="link">Home</Link>
          
          <Link to="/Register" className="link">Register</Link>
          <Link  to="/table_effect" className='link'>TableEffect</Link>
          <Link to="/weatherapp" className="link" >Weathers</Link>
          
        </header>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        
        <Route path="/weatherapp" element={<Weathers />} />
        <Route path="/table_effect" element={<TableEffect />} />
      </Routes> 
 </Router>
  );
  
}
export default App;




// <nav className="navHead navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div className="container">
//             <Link to="/" className="link">Home</Link>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                   <span className="navbar-toggler-icon"></span>
//               </button>
//            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/Register" className="link">Register</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/effect" className="link">Effect</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/weather" className="link">Weather</Link>
//               </li>

//             </ul>
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div> 
//         </div>
//       </nav>
