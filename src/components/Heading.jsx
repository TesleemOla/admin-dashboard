import React from 'react';
import "../Css/Heading.css"
import Button from "@mui/material/Button";

const Heading = ({onClick}) => {
  return (
    <div className="flex">
      <h3>User List</h3>
        <Button variant="contained" onClick={onClick}>Add new</Button>
    </div>
  );
};

export default Heading;
