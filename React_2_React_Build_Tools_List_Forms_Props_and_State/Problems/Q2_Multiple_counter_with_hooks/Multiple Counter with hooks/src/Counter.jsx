import {React, useState} from "react";


function Counter({keyValue, index}) {
    // {console.log(keyValue)}
  const [count, setCount] = useState(keyValue)
  const increment = () => {
    setCount(count+1)
  };
  const decrement = () => {
    setCount(count-1)
  };
  
  return (
    <div>
      <h2>Counter Number: {index}</h2>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;