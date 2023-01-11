import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteListItem } from "../features/toDoList/toDoListSlice";

const ToDoListItem = (props) => {
  const [itemChecked, setItemChecked] = useState(false);

  // const deleteItems = (id) => {
  //   console.log("item id to be delete : " + id);
  //   setItem(prevItems=>prevItems.filter((item,index)=>index!==id))
  // } 
  
  const dispatch = useDispatch()
  
  const toggleTextStyle = () => {
    setItemChecked((prevValue) => !prevValue);
  };

  return (
    <div className="d-flex" >
      <li className="p-2 w-100" onClick={toggleTextStyle} style={{ textDecoration: itemChecked ? "line-through" : "none" ,  }}>
        {props.item?.listItem}
      </li>
      <button className="btn btn-light" 
      // onClick={()=>{props.deleteItem(props.id)}}
      onClick={()=>{dispatch(deleteListItem(props.item?.id))}}
      >
          <span className="p-2 flex-shrink-1" >-</span>
          {console.log(props.id)}
        </button>
    </div>
  );
};

export { ToDoListItem };
