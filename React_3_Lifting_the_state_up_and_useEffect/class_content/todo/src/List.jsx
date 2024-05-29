import React from 'react'

const List = ({taskArr, setTaskArr}) => {
    console.log({taskArr})

const handleDelete = (id)=>{
    console.log(id)
    const updatedTask = taskArr.filter((currentTask, index)=>id!==index)
    setTaskArr(updatedTask)
}
  return (
    <div>
        {
          taskArr.map((currentTask, index)=> (
            <div style={{display:'flex', gap: 20}} key={index}>
                <span >{currentTask}</span>
            <span onClick={()=>handleDelete(index)}>-</span>
                </div>
            
            
          ))  
        }
    </div>
  )
}

export default List