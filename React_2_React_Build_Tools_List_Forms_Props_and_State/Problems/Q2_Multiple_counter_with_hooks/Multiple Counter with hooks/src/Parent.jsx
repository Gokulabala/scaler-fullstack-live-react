import React from "react";
import Counter from "./Counter";

function ParentCounter() {
  return (
    <div>
    <Counter keyValue = {2} index = {1} />
    <Counter keyValue = {3} index = {2} />
    <Counter keyValue = {4} index = {3} /> 
    </div>   
      
    
  )
}

export default ParentCounter;
