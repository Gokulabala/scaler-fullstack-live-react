    import {useState} from 'react'

    
    const InputBox = ({setTaskArr, taskArr}) => {
        const [task, setTask] = useState("");
        

        const handleChange = (e)=>{
            setTask(e.target.value)
            
        }

        const handleAdd=()=>{
                setTaskArr([...taskArr, task])
                setTask("")           
        }
      return (
        <div>
            <input type='text' onChange={handleChange} value={task}/>
            <button onClick={handleAdd}>Add Task</button>

        </div>
      )
    }
    
    export default InputBox