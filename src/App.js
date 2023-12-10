import './App.css';
import Header from './MyComponents/Header';
import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';
import AddToDo from './MyComponents/AddToDo';
import About from './MyComponents/About';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I'm onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addToDo = (title, desc) => {
    console.log("i'm adding thid to-do", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);



  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);
  return (
    <>
      <Router>
        <Header title="Task Tracker" searchBar={false} />
        <Routes>

          <Route exact path="/" element={
            <>
              <AddToDo addToDo={addToDo} />
              <ToDos todos={todos} onDelete={onDelete} />
            </>
          }
          >
          </Route>
          <Route exact path="/about" element={<About />}>

          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
export default App;
