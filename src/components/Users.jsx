import React, { useEffect, useState} from 'react';
import "../Css/users.css"
import { useDispatch, useSelector } from "react-redux";
import Notification from "./Notification"
import Tables from './Tables';
import { getUsers, deleteUser } from '../features/admin/adminSlice';





const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users)
  
  
  useEffect(()=> {
    dispatch(getUsers());
  },[dispatch])
 
  // state for Notification
  const [message, setMessage]= useState(null)
  const [Class, setClass] = useState(null);
  const handleDelete=(id)=>{
    console.log(id)
    const confirm = window.confirm(`Do you want to delete user ${id}`);
    if(confirm=== true){
      dispatch(deleteUser({id: id}))
      setMessage(`User ${id} Successfully deleted`)
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
