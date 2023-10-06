import React, { useEffect, useCallback } from 'react';
import Swal from "sweetalert2"
import "../Css/users.css"
import { useDispatch, useSelector } from "react-redux";
import Tables from './Tables';
import { getUsers, deleteUser } from '../features/admin/adminSlice';



const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users)
  
  
  useEffect(()=> {
    dispatch(getUsers());
  },[dispatch])
   

  
  const handleDelete=useCallback(function(useract){
   
    Swal.fire({
      title: `Do you want to delete user "${useract.name}?`,
      icon: "warning",
      showCancelButton: true
    })
    .then(res=>{
    if(res.isConfirmed){
      dispatch(deleteUser({ id: useract.id }));
      Swal.fire({ title:`User "${useract.name}" Deleted`,
      icon: 'warning',
      confirmButtonText: 'OK'});
    }else{
      Swal.fire({ title: "Delete Cancelled"})
    }
    })
  },[dispatch])
  
  
  

  return (
    <section>
        <Tables
          adminUsers={users}
          handleDelete={handleDelete}
        />
    </section>
  );
};

export default Users;
