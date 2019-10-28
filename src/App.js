import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

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
  // Function allows us to take the task, deconstructs the original state list, and adds the new item to the end
  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newTask]
    });
  };

  toggleCompleted = id => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          task={this.state.list}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
