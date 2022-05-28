import React from 'react';
import './App.css';
import Users from './components/Users';
import Heading from './components/Heading'

function App() {
  
  return (
    
    <div className="App">
      
          <h1>Dashboard</h1>
          <Heading />
          <Users 
          // adminUsers={adminUsers} handleDelete={handleDelete}
          />
    </div>
    
  );
}

export default App;
