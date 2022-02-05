import React from 'react';
import './App.css';
import Home from "./components/Home"
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
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
        <Route path="/AddUser" element={<AddUser/>}/>
          
        <Route path="/EditUser/:id" element={<EditUser/>}/>
          
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
