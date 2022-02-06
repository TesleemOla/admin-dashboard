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
const state = []
export const adminSlice = createSlice({
    name: 'users',
    initialState: state,
    reducers:{
         addUser: (state, action)=>{
           state = [...state, action.payload]
        },
        editUser: (state, action)=>{
            const filtered = state.filter((item) => item.id !== action.payload.id )
            state = [...filtered, action.payload]
        },
        deleteUser: (state, action)=>{
            const filtered = state.filter((item)=> item.id !== action.payload.id )
            state = [...filtered]
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



