import { createSlice } from "@reduxjs/toolkit";
import { localData } from '../../data/data';
export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        value:localData,
    },
    reducers:{
         addUser: (state)=>{
            const newUser =(name, username, email,city, id)=>{
            return  {
                name:name,
                username:username,
                email:email,
                city:city,
                id:id
            }
        }
           return  [...state, newUser()]
        },
        editUser: (state, action)=>{
            const usertoEdit = action.payload
            const editedUser =state.find((item)=> usertoEdit.id === item.id)
            const filtered = state.filter((item) => usertoEdit.id === item.id )
            return [...state, {...filtered, editedUser}]
        },
        deleteUser: (state, action)=>{
            const userTodelete = action.payload
            const filtered = state.filter((item)=> item.id === userTodelete.id )
            return [...filtered]
        }
    }
})

export const { addUser, editUser, deleteUser } = adminSlice.actions

export default adminSlice.reducer;