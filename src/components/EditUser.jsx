import React, {useState} from 'react';
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { editUser } from '../features/admin/adminSlice';
import Notification from './Notification';
import Form from './Form';
const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    dispatch(editUser({

    }));
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
          title={`Edit User ${id} data `}
          onSubmit={handleFormSubmit}
        />
      </div>
    </>
  );
};

export default EditUser;
