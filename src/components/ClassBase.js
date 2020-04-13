import React, { Component } from "react";
import{Form, Button} from "react-bootstrap"
import "../App.css";

class ClassBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  removeTodo(index) {
    const filteredTodos = this.state.todos.filter(
      (todos) => todos.index !== index, 
    );
    this.setState({
      todos: filteredTodos,
    });
  }

  editTodo = (index) => {
    const newvalue = [...this.state.todos];
    const editInput = newvalue[index];
    const editedInput = prompt(editInput);
    newvalue.splice(index, 1, editedInput);
    this.setState({ todos: newvalue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodos = this.state;
    if (!this.state.value) return alert("Todo Belum Di Isi");
    const todos = [...this.state.todos, this.state.value];
    this.setState({
      todos: todos,
      value: "",
    });
  };

  render() {
    console.log(this.state);

    return (
      <center>
      <div className ='card-todo'>
      <div className="container mt-5 p-5 ">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="todoInput">
            <h2>Class Base</h2>
            <Form.Control
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              placeholder="Create your todo ...."  
            />         
          </Form.Group>
          <Button className="button-list" variant="warning" type="submit">
            Create
          </Button> 
        </Form>

        <ListTodos
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}
        />
        
      </div>
      
</div>
</center>
    );
  }
}

function ListTodos(props) {
  const todos = props.todos;
  const listTodos = todos.map((todo) => {
    return (
      <div className="border mt-4 mb-5  text-left p-5 ">
        <h3 key={todo.index}>{todo}</h3>
        <Button
          variant="success"
          value={todo}
          key={todo.index}
          onClick={() => {
            props.editTodo(todo.index);
          }}
        >
          Edit
        </Button>

        <Button
          className="ml-2"
          variant="danger"
          onClick={() => props.removeTodo(todo.index)}
        >
          Remove
        </Button>
      </div>
    );
  });
  console.log(listTodos);
  return <div>{listTodos}</div>;
}

export default ClassBase;