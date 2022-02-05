import React, {useState} from 'react';
import { useParams } from "react-router-dom"
const EditUser = () => {
  const {id} = useParams()
   const [name, setName] = useState("");
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [city, setCity] = useState("")
   const handleNameChange = (e) => {
     setName(e.target.value);
   };
   const handleUsername = (e) => {
     setUserName(e.target.value);
   };
   const handleEmailChange = (e) => {
     setEmail(e.target.value);
   };
   const handleCityChange=(e)=>{
     setCity(e.target.value)
   }
  return (
    <div className="form">
      <form className="Edit">
        <h1>Edit User data {id}</h1>

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
        <input
          type="text"
          className="input"
          placeholder="city"
          value={city}
          onChange={handleCityChange}
        />
        <br/>
        <button className="cancel">Cancel</button>
        <input type="submit" className="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default EditUser;
