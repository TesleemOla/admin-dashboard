import React from 'react';

const EditUser = () => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Username</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <button>Cancel</button>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EditUser;
