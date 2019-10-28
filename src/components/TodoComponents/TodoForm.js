import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      searchTerm: ""
    };
  }

  handleChange = e => {
    this.setState({ newItem: e.target.value });
  };

  handleSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
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

  handleSearch = e => {
    e.preventDefault();
    this.props.searchTask(this.state.searchTerm.toLowerCase());
    this.setState({ searchTerm: "" });
  };

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
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
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
              color="default"
              type="submit"
              size="large"
              onClick={this.handleSearch}
            >
              Search Tasks
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
