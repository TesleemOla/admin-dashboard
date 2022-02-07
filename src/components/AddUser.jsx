import React, { useState } from 'react';
import { addUser } from '../features/admin/adminSlice';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Notification from "./Notification"
import Form from './Form';
import "../Css/addUser.css"

const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const users = useSelector((state) => state.users);


  // state for Notification
  const [message, setMessage] = useState(null);
  const [Class, setClass] = useState(null);
  
  // state for payload
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault();
    console.log(e.target.value);
    dispatch(addUser({name: name,
       username: userName,
        email: email,
         address:{city: city},
          id: users[users.length-1].id + 1}));
        navigate("/");
    setName('');
    setUserName('');
    setCity('');
    setEmail('');
    setMessage('User Added successfully')
    setClass('success')
    setTimeout(()=>{
      setMessage(null);
      setClass(null)
    }, 5000)
  };
  return (
    <>
      <Notification message={message} Class={Class} />
      <div className="form">
        <Form
          name={name}
          city={city}
          userName={userName}
          email={email}
          handleNameChange={handleNameChange}
          handleCityChange={handleCityChange}
          handleEmailChange={handleEmailChange}
          handleUsername={handleUsername}
          title={`Add a new user`}
          onSubmit={() => handleFormSubmit()}
        />
      </div>
    </>
  );
};

export default AddUser;
