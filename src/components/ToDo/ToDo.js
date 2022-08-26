import './ToDo.css';
import React, {useState, useEffect} from "react";
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import TodoName from '../TodoName/TodoName';


const ToDo = () => {

  const initialState = JSON.parse (localStorage.getItem ('todo')) || [];
  const [input, setInput] = useState ('');
  const [todo, setTodo] = useState (initialState);
  const [editTodo, setEditTodo] = useState (null);

  useEffect (() => {
    localStorage.setItem ('todo', JSON.stringify (todo));
  }, [todo]);
  
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <TodoName />
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          /> 
        </div>
        <div>
          <TodoList
          todo={todo} 
          setTodo={setTodo}
          setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};


export default ToDo;
