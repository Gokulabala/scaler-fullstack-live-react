// rfce
import React, { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

function Todo() {
  const [tasksArr, setTasks] = useState([]);
  const addTask = (inputValue) => {
    // Complete the function
    setTasks([...tasksArr, inputValue])
    
  };
  
  const handleDelete = (idx) => {
    // Complete the function
    setTasks(tasksArr.filter((task, index)=> idx!==index))
  };

  return (
    // react Fragments
    <>
      <InputBox addTask={addTask} />
      <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </>
  );
}

export default Todo;