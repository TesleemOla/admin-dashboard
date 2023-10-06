import React, {useState, useCallback} from 'react';
import './App.css';
import Swal from "sweetalert2"
import Users from './components/Users';
import Heading from './components/Heading';
import Form from './components/Form'
import { addUser } from "./features/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux"


function App() {
  const [openAddForm, setOpenAddForm]= useState(false)
  const [formValues, setFormValues] = useState({})

  const users = useSelector((state) => state.users)


  const dispatch = useDispatch();
  const handleClick = (e) => {
    setOpenAddForm(!openAddForm)
  }
  const handleCancel = () => {
    setOpenAddForm(false);
    Swal.fire({ title: "Cancelled",
  icon: "error" })
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
    setFormValues({ ...formValues, city: e.target.value })
  }
  const handleAdd = useCallback((e) => {
    
    e.preventDefault();
    if (!formValues.name || !formValues.username || !formValues.email || !formValues.city) {
      Swal.fire({ title: "All Values are Required" })
    } else {
      dispatch(
        addUser({
          name: formValues.name,
          username: formValues.username,
          email: formValues.email,
          address: { city: formValues.city },
          id: users[users.length - 1].id + 1,
        })
      );
      setOpenAddForm(false);
      Swal.fire({ title: "User Added successfully" });
      setFormValues({})
    }
  }, [dispatch, formValues.name, formValues.username, users, formValues.email, formValues.city]);



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
          cancel={handleCancel}
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
