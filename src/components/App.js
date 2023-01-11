import React, { useState } from "react";
import { useSelector } from "react-redux";

import { InputArea } from "./InputArea";
import { ToDoListItem } from "./ToDoListItem";

const App = () => {

  const toDoList = useSelector(state => state.list)
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea/>
      <div>
        <ul>
          {toDoList?.map((item,index) => <ToDoListItem key={item?.id} id={item?.id} item={item} />)}
        </ul>
      </div>
    </div>
  );
};

export { App };
