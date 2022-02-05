import React, { useState } from 'react';
// import { addUser } from '../features/admin/adminSlice';
import { useNavigate } from "react-router-dom"
const AddUser = () => {
  const [name,setName]= useState('');
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange=(e)=>{
    setName(e.target.value)
  }
  const handleUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const history = useNavigate();
  const handleFormSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    history.push('/')
  }
  return (
    <div className="form">
      <form className="Add" onSubmit={handleFormSubmit}>
        <h1>Add New User</h1>
        <input
          type="text"
          className="input"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <br />

        <input
          type="text"
          className="input"
          placeholder="Username"
          value={userName}
          onChange={handleUsername}
        />
        <br />

        <input
          type="email"
          className="input"
          placeholder="Name@name.com"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input type="submit" className="submit"
        value="Submit" />
         
      </form>
    </div>
  );
};

export default AddUser;
