import React from "react";
import TaskAdderForm from "./TaskAdderForm";

class TaskAdderButton extends React.Component {
  render() {
    return (
      <div class="app-add w-auto my-1" aria-label="Add Task" onClick={this.props.toggleFormVisible}>
        <img src="static/images/add.svg" alt="Add Task Button"/>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
    };
    this.fetchTasks = this.props.fetchTasks;
    this.toggleFormVisible = this.toggleFormVisible.bind(this);
  }

  toggleFormVisible() {
    this.setState({
      formVisible: !this.state.formVisible,
    });
  }

  render() {
    return (
      <div class="app-header row p-3">
        <TaskAdderButton toggleFormVisible={this.toggleFormVisible} />
        <TaskAdderForm
          formVisible={this.state.formVisible}
          fetchTasks={this.fetchTasks}
        />
      </div>
    );
  }
}

export default Header;
