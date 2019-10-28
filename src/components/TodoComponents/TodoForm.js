import React, { Component } from "react";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChange = e => {
    this.setState({ newItem: e.target.value });
  };

  handleAddTask = e => {
    // Stops the form from refreshing
    e.preventDefault();
    // Clears the input to an empty value
    this.setState({ newItem: "" });
    // Logs the state of what was input from the form, into state
    console.log(this.state.newItem);
  };

  render() {
    return (
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Add to-do"
            name="item"
            id="item"
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <div className="button-container">
            <button type="submit" onClick={this.handleAddTask}>
              Add To Do
            </button>
            <button type="submit">Clear Completed</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
