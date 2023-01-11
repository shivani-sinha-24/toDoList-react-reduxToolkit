import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"

const initialState =[ ]
export const toDoListSlice = createSlice({
    name:'toDoList',
    initialState,
    reducers:{
        // addListItem:(state,action)=>{
        //     // return [...state, {"name": action.payload, id: Math.random()}]
        //     state.push({"name": action.payload, id: nanoid()})
        // }
        addListItem:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(listItem){
                return{
                    payload:{
                        id:nanoid(),
                        listItem
                    }
                }
            }

        },
        deleteListItem:{
            reducer(state,action){
                state?.splice(state?.findIndex(list=> list.id===action.payload),1)
            },
            prepare(listItemId){
                return{
                    payload:{
                        listItemId
                    }
                }
            }
        }
    }
})

export const addListItemAsync = (input) => (dispatch) => {
    setTimeout(() => {
      dispatch(addListItem(input))
    }, 100)
  }

export const{addListItem,deleteListItem} = toDoListSlice.actions

export default toDoListSlice.reducer