import {useState} from 'react'

const Counter = ({defaultValue})=>{
    const [count, setCount] = useState(defaultValue)

    const handleIncrease = ()=>{
        setCount(count+1)
    }
    const handleDecrease = ()=>{
        setCount(count-1)
    }
return (
    <div>
        <button onClick={handleIncrease}>+</button>
        <p>Count - {count}</p>
        <button onClick={handleDecrease}>-</button>
    </div>
)
}

export default Counter