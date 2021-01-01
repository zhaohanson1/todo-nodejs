import React, { Suspense } from 'react';

const TaskAdderForm = React.lazy(() => import("./TaskAdderForm"));

class TaskAdderButton extends React.Component {
  render() {
    return (
      <div
        class="app-add w-auto my-1"
        aria-label="Add Task"
        onClick={this.props.toggleFormVisible}
      >
        <img
          src="static/images/add.svg"
          alt="Add Task Button"
          width="20"
          height="20"
        />
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
        <Suspense fallback={<div>Loading...</div>}>
          <TaskAdderForm
            formVisible={this.state.formVisible}
            fetchTasks={this.fetchTasks}
          />
        </Suspense>
      </div>
    );
  }
}

export default Header;
