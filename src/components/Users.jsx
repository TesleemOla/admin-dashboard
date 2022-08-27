import React, { useEffect, useState} from 'react';
import "../Css/users.css"
import { useDispatch, useSelector } from "react-redux";
import Notification from "./Notification"
import Tables from './Tables';
import { getUsers, deleteUser } from '../features/admin/adminSlice';
import Form from "./Form"
import { editUser } from "../features/admin/adminSlice";


const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users)
  
  
  useEffect(()=> {
    dispatch(getUsers());
  },[dispatch])
  
    const [edit, setEdit] = useState(null);
     const handleEdit = (id) => {
      if(!isOpen){
       setIsOpen(true);
       setEdit(id);
      }
     };
   const [formValues, setFormValues] = useState({
     });

  
  const [message, setMessage]= useState(null)
  const [Class, setClass] = useState(null);
  const [isOpen,setIsOpen] = useState(false)
  
  const handleDelete=(useract)=>{
   
    const confirm = window.confirm(`Do you want to delete user "${useract.name}"`);
    if(confirm === true){
      dispatch(deleteUser({ id: useract.id }));
      setMessage(`User "${useract.name}" Deleted`);
      setClass("delete")
      setTimeout(()=>{
        setMessage(null)
        setClass(null)}, 5000)
    }
  }
  
  
  
  const SubmitEdit =(e)=>{
     e.preventDefault();
     dispatch(
       editUser({
         ...formValues,
         id: edit.id
       })
     );
     setIsOpen(false);
     setMessage("User Modified successfully");
     setClass("success");
     setTimeout(() => {
       setMessage(null);
       setClass(null);
     }, 5000);
     setFormValues({})
  }
  const handleCancel = () => {
    setIsOpen(false);
    console.log('closed input')
  };
  return (
    <section>
      <Notification message={message} Class={Class} />
      {isOpen ? (
        <>
        <h1>Edit {edit.name}</h1>
        <Form
          name={edit.name}
          username={edit.username}
          email={edit.email}
          address={edit.address.city}
          onNameChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
          onUserChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
          onEmailChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          onAddressChange={(e) =>
            setFormValues({ ...formValues, address: {city: e.target.value} })
          }
          handleSubmit={SubmitEdit}
          cancel={handleCancel}
        />
        <Tables
          adminUsers={users.filter(item=> item !== edit)}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        </>
      ) : (
        <Tables
          adminUsers={users}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
       )}
    </section>
  );
};

export default Users;
