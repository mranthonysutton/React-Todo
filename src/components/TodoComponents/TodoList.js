// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import { Button } from "@material-ui/core";

const TodoList = props => {
  return (
    <div className="list-items-container">
      {props.task.map(item => (
        <Todo
          key={item.id}
          task={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
