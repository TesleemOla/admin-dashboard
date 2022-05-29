import React, {useState} from 'react';
import './App.css';
import Users from './components/Users';
import Heading from './components/Heading';
import Form from './components/Form'

function App() {
  const [openAddForm, setOpenAddForm]= useState(false)
  const handleClick = (e) => {
    setOpenAddForm(!openAddForm)
    console.log("open now")
  }
  return (
    
    <div className="App">
      
          <h1>Dashboard</h1>
          <div>
          <Heading onClick={handleClick}/>
          { openAddForm?
          <Form/>: <></>
          }
          </div>
          <Users 
          />
    </div>
    
  );
}

export default App;
