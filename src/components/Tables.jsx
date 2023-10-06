import React, {useState} from 'react';
import Table from "@mui/material/Table";
import { useDispatch } from "react-redux";
import { editUser } from "../features/admin/adminSlice";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2"



const Tables = ({adminUsers, handleDelete}) => {

  const [openEdit, setOpenEdit] = useState({})
     const [formValues, setFormValues] = useState(null);

  const dispatch = useDispatch();


 
     const handleEdit = (row) => {
       setOpenEdit(row);
     };
    const SubmitEdit =(e)=>{
     e.preventDefault();
    
     if(!formValues){
        Swal.fire({title: "No values changed"})
        setOpenEdit(false);
       }else{
     dispatch(
       editUser({
        ...openEdit,
         ...formValues,
       })
     );
     setFormValues(null)
     setOpenEdit(false);
     Swal.fire({
      title: 'Success',
      text: "User Modified successfully",
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
    
  }
  const CancelEdit = () => {
    setOpenEdit(false);
    Swal.fire({title: 'Edit Cancelled'})
  };

  return (
    <>
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
          {adminUsers.map((row) => (
            <TableBody key={row.name}>     

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{openEdit.id === row.id?
                  <input defaultValue={row.name}  onChange={(e) =>
            setFormValues({name: e.target.value }) 
          } autoFocus /> :
                  row.name}</TableCell>
                  <TableCell align="center">{openEdit.id === row.id?
                  <input defaultValue={row.username}  onChange={(e) =>
            setFormValues({username: e.target.value })
          } /> :row.username}</TableCell>
                  <TableCell align="center">{openEdit.id === row.id?
                  <input defaultValue={row.email}  onChange={(e) =>
            setFormValues({email: e.target.value })
          } /> :row.email}</TableCell>
                  <TableCell align="center">{openEdit.id === row.id?
                  <input defaultValue={row.address.city}  onChange={(e) =>
            setFormValues({address:{city: e.target.value} })
          } /> :row?.address?.city}</TableCell>
                  <TableCell align="center">
                    {openEdit.id === row.id?
                    <button className="submit" onClick={SubmitEdit}>
                      Submit
                    </button>:
                    <button className="edit" onClick={() => handleEdit(row)}>
                      Edit
                    </button>}
                  </TableCell>
                  <TableCell>
                    {
                      openEdit.id === row.id?
                      <button className="cancel" onClick={CancelEdit}>
                        Cancel
                      </button>:
                    <button
                      className="delete"
                      onClick={() => handleDelete(row)}
                    >
                      Delete
                    </button>}
                  </TableCell>
                </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
