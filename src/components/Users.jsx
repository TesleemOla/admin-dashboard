import React, { useState} from 'react';
import "../Css/users.css"

import { useSelector } from "react-redux";
import Notification from "./Notification"
import Tables from './Tables';



const Users = () => {
  const [adminUsers, setAdminusers] = useState(useSelector((state)=> state.admin.value))

  // state for Notification
  const [message, setMessage]= useState(null)
  const [Class, setClass] = useState(null);
  const handleDelete=(id)=>{
    console.log("Deleted", id)
    const confirm = window.confirm(`Do you want to delete user ${id}`);
    if(confirm=== true){
      setAdminusers(adminUsers.filter((user)=> user.id !== id ))
      setMessage(" User Successfully deleted")
        setClass("delete")
      setTimeout(()=>{
        setMessage(null)
        setClass(null)}, 5000)
      return;
    }

  }
  return (
    <section>
      <Notification message={message} Class={Class} />
      <Tables adminUsers={adminUsers}
      handleDelete={handleDelete}/>
    </section>
  );
};

export default Users;
