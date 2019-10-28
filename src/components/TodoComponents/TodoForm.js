import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

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
    // Adds the task that has been passed into state
    this.props.addTask(this.state.newItem);
    // Clears the input to an empty value
    this.setState({ newItem: "" });
  };

  handleClearTasks = e => {
    e.preventDefault();
    this.props.clearTasks();
  };

  handleSearch = e => {};

  render() {
    return (
      <div className="form-container">
        <form>
          <TextField
            className="todo-input-field"
            id="outlined-with-placeholder"
            variant="outlined"
            placeholder="Add To-Do"
            margin="normal"
            label="Add To-Do"
            type="text"
            name="item"
            id="item"
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <TextField
            className="todo-input-field"
            id="outlined-with-placeholder"
            variant="outlined"
            placeholder="Search Tasks..."
            margin="normal"
            label="Search Tasks..."
            type="text"
            name="searchTasks"
            id="searchTasks"
          />
          <div className="button-container">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              onClick={this.handleAddTask}
            >
              Add To Do
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
              onClick={this.handleClearTasks}
            >
              Clear Completed
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
