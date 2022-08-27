import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import "../Css/form.css"

const Form = ({name, username, email, address, handleSubmit,
   cancel, onNameChange, onUserChange, onEmailChange, onAddressChange}) => {

 
  
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Submit</TableCell>
            <TableCell align="center">Cancel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <input
                type="text"
                placeholder={name}
                onChange={onNameChange}
                autoFocus={true}
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                placeholder={username}
                onChange={onUserChange}
              />
            </TableCell>
            <TableCell>
              <input
                type="email"
                placeholder={email}
                onChange={onEmailChange}
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                placeholder={address}
                onChange={onAddressChange}
              />
            </TableCell>
            <TableCell>
              <button type="submit" onClick={handleSubmit} className="submit">
                {" "}
                Submit
              </button>
            </TableCell>
            <TableCell>
              
              <button
                type="submit"
                value="cancel"
                className="cancel"
                onClick={cancel}
              >
                Cancel
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );}

export default Form;
