import React from 'react';

const Form = ({name, title, onSubmit, handleNameChange,email, handleEmailChange,
     city, handleCityChange, userName, handleUsername, id}) => {
  return (
    <form className="Edit" onSubmit={onSubmit}>
      <h1>{title}</h1>

      <input
        type="text"
        className="input"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <br />

      <input
        type="text"
        className="input"
        placeholder="Username"
        value={userName}
        onChange={handleUsername}
      />
      <br />

      <input
        type="email"
        className="input"
        placeholder="Name@name.com"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <input
        type="text"
        className="input"
        placeholder="city"
        value={city}
        onChange={handleCityChange}
      />
      <br />
      <button className="cancel"
      
      >Cancel</button>
       { name && email && userName?
      <input type="submit" className="submit" value="Submit"/>:
      <span className='submit'>Submit</span>
    }
    </form>
  );
};

export default Form;
