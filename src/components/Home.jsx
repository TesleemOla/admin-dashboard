import React, {useState} from 'react';
import Heading from "./Heading";
import Users from "./Users";
import Form from "./Form"
import Notification from "./Notification"
import { addUser } from "../features/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  // state for Notification
  const [message, setMessage] = useState(null);
  const [Class, setClass] = useState(null);
  // Form state
  const [isOpen, setIsOpen] = useState(false)
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
    dispatch(
      addUser({
        name: name,
        username: userName,
        email: email,
        address: { city: city },
        id: users[users.length - 1].id + 1,
      })
    );
    navigate("/");
    setName("");
    setUserName("");
    setCity("");
    setEmail("");
    setMessage("User Added successfully");
    setClass("success");
    setIsOpen(false)
    setTimeout(() => {
      setMessage(null);
      setClass(null);
    }, 5000);
  };
  const handleCancel=()=>{
    setIsOpen(false)
    setName("");
    setUserName("");
    setCity("");
    setEmail("");
  }
  return (
    <div>
      <Heading onClick={()=> setIsOpen(true)}/>
      <Notification message={message} Class={Class} />
      { isOpen? <Form
        name={name}
        city={city}
        userName={userName}
        email={email}
        handleNameChange={handleNameChange}
        handleCityChange={handleCityChange}
        handleEmailChange={handleEmailChange}
        handleUsername={handleUsername}
        title={`Add a new user`}
        onSubmit={handleFormSubmit}
        onCancel ={handleCancel}
      />: <></>}
      <Users />
    </div>
  );
};

export default Home;
