import React from "react";
import { Card, CardContent } from "@material-ui/core";

const Todo = props => {
  // Props are being passed from toDoList.js. The key is being set to the ID of the task, and the props.task.task is obtaining the prop task and then assigning it what is being rendered on App.js
  return (
    <Card
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.task.id)}
    >
      <CardContent>{props.task.task}</CardContent>
    </Card>
  );
};

export default Todo;
