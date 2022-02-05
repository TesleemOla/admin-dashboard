import React, { useState} from 'react';
import "../Css/users.css"
import { useSelector } from "react-redux";
import Notification from "./Notification"
import Tables from './Tables';




const Users = () => {
  const users = useSelector((state)=> state.users)
  


  // state for Notification
  const [message, setMessage]= useState(null)
  const [Class, setClass] = useState(null);
  const handleDelete=(id)=>{
    const confirm = window.confirm(`Do you want to delete user ${id}`);
    if(confirm=== true){
     users.filter((item)=> item.id=== parseInt(id))
      setMessage(" User Successfully deleted")
        setClass("delete")
      setTimeout(()=>{
        setMessage(null)
        setClass(null)}, 5000)
    }

  }
  return (
    <section>
      <Notification message={message} Class={Class} />
      <Tables adminUsers={users}
      handleDelete={handleDelete}/>
    </section>
  );
};

export default Users;
