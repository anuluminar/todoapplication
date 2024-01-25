import React, { useState } from 'react'
import { uploadTodo } from '../services/allAPI';

function Addtodo({setUploadTodoStatus}) {
    const [todoValue,setTodoValue] = useState({
        todoName:"",
        todoDescription:""
    })
    console.log(todoValue);

    const handleTodo = async()=>{
        const response = await uploadTodo(todoValue)
        setUploadTodoStatus(response.data)
        setTodoValue({
            todoName : "",
            todoDescription : ""
        })
        alert("successfully insert the task")
        
    }
    return (
        <>
        <div className='py-2'>
            <h3 className='text-secondary mt-4 mb-2 display-4 text-center font-monospace'>
                Get your work <br /> Organaized <br />with 
                <span className=' fw-bold' style={{color:'#b8997a'}}> ToDo App</span>
            </h3>
        </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='mt-3'>
                    <div>
                        <input 
                        value={todoValue.todoName}
                        onChange={(e)=>setTodoValue({...todoValue,todoName:e.target.value})}
                        type="text" className='form-control border border-secondary rounded' style={{width:'400px', height:'50px'}} border border-primary/>
                    </div>
                    <div className='mt-3'>
                        <textarea
                        style={{width:'400px'}}
                        value={todoValue.todoDescription}
                        onChange={(e)=>setTodoValue({...todoValue,todoDescription:e.target.value})}
                        name="w3review" id="w3review" cols="30" rows="5" className='border-secondary rounded'></textarea>
                    </div>
                    <button className='btn w-100 mt-2 text-light mb-5' onClick={handleTodo} style={{backgroundColor:'#53402d'}}>Add Todo</button>
                </div>
            </div>
        </>
    )
}

export default Addtodo