import React, { useState} from 'react';
import "../Css/users.css"
import { deleteUser } from '../features/admin/adminSlice';
import { useSelector, useDispatch } from "react-redux";
import Notification from "./Notification"
import Tables from './Tables';



const Users = () => {
  const [adminUsers, setAdminusers] = useState(useSelector((state)=> state.admin.value))

  const dispatch = useDispatch()
  // state for Notification
  const [message, setMessage]= useState(null)
  const [Class, setClass] = useState(null);
  const handleDelete=(id)=>{
    
    const confirm = window.confirm(`Do you want to delete user ${id}`);
    if(confirm=== true){
      const user = adminUsers.filter((item)=> item.id=== parseInt(id))
      setAdminusers(dispatch(deleteUser(user)))
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
