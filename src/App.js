import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Users from './components/Users';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, editUser, deleteUser } from "./features/admin/adminSlice"
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch()
  const admin = useSelector(state=>state.admin.value)
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <ToastContainer />
      <Heading/>  
      <Users data= {admin}/>  
    </div>
  );
}

export default App;
