import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const data = [
  {
    task: "Learn Material UI",
    id: 1,
    completed: false
  },
  {
    task: "Start Side Project",
    id: 2,
    completed: false
  },
  {
    task: "Plan Date Night",
    id: 3,
    completed: false
  },
  {
    task: "Plan Christmas Party",
    id: 4,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: data
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList task={this.state.list} />
      </div>
    );
  }
}

export default App;
