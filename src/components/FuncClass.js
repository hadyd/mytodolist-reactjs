import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Form,Button} from "react-bootstrap";
import Todo from "./Todo";

const FuncClass = () => {
  const [todos, SetTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    SetTodos(newTodos);
  };

  const editTodo = (index) => {
    const newTodos = [...todos];
    const editTodos = newTodos[index].text;
    const editedTodo = prompt(editTodos);
    newTodos.splice(index, 1, { text: editedTodo });
    SetTodos(newTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return alert("todo belum diisi");
    const newTodos = [...todos, { text: value }];
    SetTodos(newTodos);
    setValue("");
  };

  return (
    <center>
      <div className ='card-todo'>
    <div className="container mt-5 py-5 ">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="todoInput">
          <h2>Function Base</h2>
          <Form.Control
            value={value}
            onChange={handleChange}
            type="text"
            placeholder="Create your todo ..."
          />
        </Form.Group>
        <Button className="button-list" variant="warning" type="submit">
            Create
          </Button> 
      </Form>

      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
    </div>
    </center>
  );
};

export default FuncClass;