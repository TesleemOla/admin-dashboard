import React, {useState} from 'react';
import './App.css';
import Users from './components/Users';
import Heading from './components/Heading';
import Form from './components/Form'
import { addUser } from "./features/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux"

function App() {
  const [openAddForm, setOpenAddForm]= useState(false)
  const [formValues, setFormValues] = useState({})

  const users = useSelector((state) => state.users)

  // state for Notification
  const [message, setMessage] = useState(null)
  const [Class, setClass] = useState(null);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    setOpenAddForm(!openAddForm)
  }
  const cancel =()=>{
    setFormValues({})
    setOpenAddForm(false)
  }
  const onNameChange=(e)=>{
    setFormValues({...formValues, name: e.target.value})
  }
  const onUserChange = (e) => {
    setFormValues({ ...formValues, username: e.target.value })
  }
  const onEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value })
  }
  const onAddressChange = (e) => {
    setFormValues({ ...formValues, address: { city: e.target.value} })
  }
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        ...formValues,
        id: users[users.length - 1].id + 1,
      })
    );
    setFormValues({})
    setMessage("User Added successfully");
    setClass("success");
    setOpenAddForm(!openAddForm)
    setTimeout(() => {
      setMessage(null);
      setClass(null);
    }, 5000);
  };

  return (
    
    <div className="App">
      
          <h1>Dashboard</h1>
          <div>
            <Heading onClick={handleClick} />
          { openAddForm?
          <Form 
          name="Enter full name"
          username="username"
          email="email"
          address="address"
          cancel={cancel}
          onNameChange={onNameChange}
          onUserChange={onUserChange}
          onEmailChange={onEmailChange}
          onAddressChange={onAddressChange}
          handleSubmit={handleAdd}
          

          />: <></>
          }
          </div>
          <Users 
          />
    </div>
    
  );
}

export default App;
