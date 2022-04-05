import React from 'react';

const Form = ({name, title, onSubmit, handleNameChange,email, handleEmailChange,
     city, handleCityChange, userName, handleUsername, onCancel}) => {
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

      {name? (
        <input type="submit" className="submit" value="Submit" />
      ) : (
        <button className="disable" disabled>Submit</button>
      )}
      <button className="cancel" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default Form;
