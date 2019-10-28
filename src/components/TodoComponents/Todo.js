import React from "react";

const Todo = props => {
  // Props are being passed from toDoList.js. The key is being set to the ID of the task, and the props.task.task is obtaining the prop task and then assigning it what is being rendered on App.js
  return (
    <div className={`task${props.task.completed ? " completed" : ""}`}>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
