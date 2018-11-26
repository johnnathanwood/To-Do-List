import React, { Component } from 'react';
import Title from "./title/Title"
import TodoForm from "./todo-form/TodoForm"
import TodoList from "./todo-list/TodoList"
import './TodoApp.css';


class App extends Component {

  state = {
    data: [],
    todoItem: ""
  }

  componentDidMount() {
    this.getTodos()
  }

  setTodoItemState = (val) => {
    this.setState({ todoItem: val })
  }

  getTodos() {
    fetch("http://localhost:5002/todos")
      .then((data) => data.json())
      .then(todos => this.setState({ data: todos }))
  }

  addTodo = () => {
    const newTodo = { text: this.state.todoItem }
    console.log(JSON.stringify(newTodo))
    fetch("http://localhost:5002/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    })
      .then(() => this.getTodos())
    // .then((result) => console.log(result))
  }
  deleteTodo = id => {
    return fetch(`http://localhost:5002/todos/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        this.getTodos()
      })
  }


  render() {
    return (
      <div className="App">
        <Title />
        <TodoForm addToDo={this.addTodo} setTodoItemState={this.setTodoItemState} />
        <TodoList todos={this.state.data} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
