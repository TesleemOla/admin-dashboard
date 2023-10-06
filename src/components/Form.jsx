import React from "react"
import "../Css/form.css"

const Form = ({name, username, email, address, handleSubmit,
   cancel, onNameChange, onUserChange, onEmailChange, onAddressChange}) => {

 
  
  return (
  
          <form onSubmit={handleSubmit} className="add-form">
              <input
                type="text"
                placeholder={name}
                onChange={onNameChange}
                autoFocus={true}
                required
              />
            
              <input
                type="text"
                placeholder={username}
                onChange={onUserChange}
                required
              />
            
              <input
                type="email"
                placeholder={email}
                onChange={onEmailChange}
                required
              />
            
              <input
                type="text"
                placeholder={address}
                onChange={onAddressChange}
                required
              />
            
              <button type="submit" onClick={handleSubmit} 
              className='submit'> Submit
              </button>
            
              <button type="submit" value="cancel" 
              className="cancel" onClick={cancel}>
                Cancel
              </button>
              </form>
            
        
  );}

export default Form;
