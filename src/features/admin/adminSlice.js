import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async ()=>{
        const response = await fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
        if (response.ok){
            const users = await response.json();
            return { users }
        }
    }
)

export const adminSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers:{
         addUser: (state, action)=>{
           return [...state, action.payload]
           
        },
        editUser: (state, action)=>{
            const newstate = state.map((user) => {
                return(user.id === action.payload.id?
                    action.payload:
                    user)
            })
            return newstate
                    },
        deleteUser: (state, action)=>{      
            const userTodelete = action.payload
            const filtered = state.filter((item) => item.id !== userTodelete.id)
            return [...filtered]
        }

        },
        extraReducers: {
            [getUsers.fulfilled]: (state,action) =>{
                return state = action.payload.users
            }
        }
})

export const { addUser, editUser, deleteUser } = adminSlice.actions

export default adminSlice.reducer;



