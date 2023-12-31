import React, { useState } from 'react'

const AddToDo = ({addToDo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert("Title or Description can't be blank");
      }
      else{
      addToDo(title,desc);
      setTitle("");
      setDesc("");
    }
}
    return (
        <div className="container my-3">
            <h3>Add a To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-Do Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="htmlForm-control" id="title" aria-describedby="emailHelp"/>
                       
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">To-Do Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="htmlForm-control" id="desc"/>
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">Add To-Do</button>
            </form>
        </div>
    )
}

export default AddToDo
