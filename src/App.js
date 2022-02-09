import React from 'react';
import './App.css';
import Home from "./components/Home"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  
  return (
    
    <div className="App">
      
      <Router>
        <Link to="/">
          <h1>Dashboard</h1>
        </Link>
      <Routes>    
        <Route path="/" element={<Home/>}/>               
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
