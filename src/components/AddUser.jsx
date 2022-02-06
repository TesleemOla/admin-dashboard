import React, { useState } from 'react';
import { addUser } from '../features/admin/adminSlice';
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Notification from "./Notification"
import Form from './Form';

const AddUser = () => {
  const dispatch = useDispatch();

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
    e.preventDefault();
    console.log(e.target.value);
    dispatch(addUser({name,
       username: userName,
        email,
         address:{city: city},
          id: users[userName.length-1].id + 1}));
    Navigate(-1);
    setName('');
    setUserName('');
    setCity('');
    setEmail('');
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
          onSubmit={(e) => handleFormSubmit(e)}
        />
      </div>
    </>
  );
};

export default AddUser;
