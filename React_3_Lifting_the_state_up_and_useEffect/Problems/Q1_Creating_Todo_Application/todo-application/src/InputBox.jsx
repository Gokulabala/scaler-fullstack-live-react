import React from "react";
import {useState} from "react"

function InputBox(props) {
      
const [task, setTask] = useState("")
    
  const handleInput = (e) => {
    // Add code here
    setTask(e.target.value)
    
  };
  
  const addTaskChild = () => {
    // Add code here
    props.addTask(task)
    setTask("")
    
  };
//   console.log(taskArr)
  return (
    <div className="inputbox">
      <input type="text" onChange={handleInput} value = {task} />

      <button onClick={addTaskChild}>Add Task</button>
      
    </div>
  );
}

export default InputBox;