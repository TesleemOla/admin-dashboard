import React, { useEffect, useState} from 'react';
import "../Css/users.css"
import { deleteUser } from '../features/admin/adminSlice';
import { useSelector, useDispatch } from "react-redux";
import Notification from "./Notification"
import Tables from './Tables';
import { getUsers } from '../features/admin/adminSlice';



const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users)
  

  // useEffect(()=>{
  //   dispatch(getUsers())
  // }, [dispatch])
  // state for Notification
  const [message, setMessage]= useState(null)
  const [Class, setClass] = useState(null);
  const handleDelete=(id)=>{
    const confirm = window.confirm(`Do you want to delete user ${id}`);
    if(confirm=== true){
      const item = users.filter((user)=> user.id === id)
       dispatch(deleteUser(item))
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
      <Tables adminUsers={users}
      handleDelete={handleDelete}/>
    </section>
  );
};

export default Users;
