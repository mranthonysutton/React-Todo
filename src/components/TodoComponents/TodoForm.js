import React, { Component } from "react";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <input type="text" placeholder="Add to-do" name="item" id="item" />
          <button type="submit">Add To Do</button>
          <button type="submit">Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
