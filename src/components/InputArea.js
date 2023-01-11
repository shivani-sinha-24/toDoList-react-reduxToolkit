import React , {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addListItemAsync } from "../features/toDoList/toDoListSlice";
import { addListItem } from "../features/toDoList/toDoListSlice";

const InputArea=({setItem})=> {
  const [input, setInput] = useState("");
  const toDoList = useSelector(state => state.toDoList)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value;
    value && setInput(value);
  };
  // const addItem = (e) => {
  //   e.preventDefault();
  //   setItem(prevItems=>[...prevItems,input])
  //   setInput("")
  // };

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={input} />
      <button 
      // onClick={()=>{addItem(e)}}
      onClick={()=>{input&&dispatch(addListItem(input));setInput('')}}
      // onClick={()=>{input&&dispatch(addListItemAsync(input));setInput('')}}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export  {InputArea};