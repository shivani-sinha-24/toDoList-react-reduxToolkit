import { configureStore } from '@reduxjs/toolkit'
import toDoListReducer from './features/toDoList/toDoListSlice'
const store = configureStore({
    reducer:{
        list:toDoListReducer
    }
})

export default store;