import {useState} from 'react'
import InputBox from './InputBox'
import List from './List'

const Todo = () => {
    const [taskArr, setTaskArr] = useState([])
    console.log(taskArr)
  return (
    <>
    <InputBox setTaskArr = {setTaskArr} taskArr={taskArr} />
    <List taskArr = {taskArr} setTaskArr={setTaskArr}/>
    </>
  )
}

export default Todo