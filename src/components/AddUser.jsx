import React, { useState } from 'react';
import { v4 as uuidv4} from "uuid"
const AddUser = () => {
  const randomId = uuidv4()
  return (
    <div>
      <h1>Add New User</h1>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Username</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddUser;
