import React from "react";

const ToDoForm = () => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Add to-do" />
        <button type="submit">Add To Do</button>
        <button type="submit">Clear Completed</button>
      </form>
    </div>
  );
};

export default ToDoForm;
