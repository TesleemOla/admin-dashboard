import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { localData } from "../../data/data"

// export const getUsers = createAsyncThunk(
//     'users/getUsers', 
//     async ()=>{
//         const response = await fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
//         if(response.ok){
//             const users = await response.json()
//             return { users }
//         }
//     }

//     );
    
export const adminSlice = createSlice({
    name: 'users',
    initialState: localData,
    reducers:{
         addUser: (state, action)=>{
            const newUser =(name, username, email,city, id)=>{
            return  {
                name:name,
                username:username,
                email:email,
                city:city,
                id:state.length
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
            return state.filter((item)=> item.id !== userTodelete.id )
        },
    },
    // extraReducers: {
        
    //     [getUsers.fulfilled]:(state, action) =>{
    //         return action.payload.users;
    //          }
    // }
})

export const { addUser, editUser, deleteUser } = adminSlice.actions

export default adminSlice.reducer;