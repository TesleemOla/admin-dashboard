import React, { useState} from 'react';
import "../Css/users.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import Notification from "./Notification"



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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminUsers.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.address.city}</TableCell>
                <TableCell align="center">
                  <Link to="/EditUser/:id">
                    <button className="edit">Edit</button>
                  </Link>
                </TableCell>
                <TableCell>
                  <button
                    className="delete"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Users;
