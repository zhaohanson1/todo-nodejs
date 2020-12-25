import React from "react";
import Task from "./Task"

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: this.props.isLoaded,
      tasks: this.props.tasks,
    };
    this.fetchTasks = this.props.fetchTasks;
    this.fetchTasks();
  }

  render() {
    const { tasks, isLoaded } = this.state;
    var tableElems = tasks.map((t) => (
      <Task
        isCompleted={t.isCompleted}
        description={t.description}
        creationDate={t.creationDate}
        _id={t._id}
        fetchTasks={this.fetchTasks}
      />
    ));
    if (isLoaded) {
      return (
        <div className="app-content-container row">
          <div className="app-content m-4 col">
            <table className="table table-sm m-3">{tableElems}</table>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app-content-loading row text-center w-auto">
          {" "}
          Loading...{" "}
        </div>
      );
    }
  }
}

export default TodoList;
