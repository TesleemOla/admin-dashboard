import React from 'react';
import "../Css/Heading.css"
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <div className="flex">
      <h3>User List</h3>
      <Link to="/AddUser">
        <Button variant="contained">Add new</Button>
      </Link>
    </div>
  );
};

export default Heading;
