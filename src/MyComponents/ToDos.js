import React from 'react'
import ToDoItem from './ToDoItem';

const ToDos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">To-Dos List</h3>
      {props.todos.length === 0 ? "No To-Dos to display" :
        props.todos.map((todo) => {
          return (
            <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      }

    </div>
  )
}

export default ToDos
