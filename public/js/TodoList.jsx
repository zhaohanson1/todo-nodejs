import React, { Suspense } from 'react';

const Task = React.lazy(() => import("./Task"));

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
    var tableElems;
    var content;
    if (tasks == null || tasks.length == 0) {
      content = <div className="w-auto m-auto p-2"> No tasks found!</div>;
    } else {
      tableElems = tasks.map((t) => (
        <Suspense fallback={<div>Loading...</div>}>
          <Task
            isCompleted={t.isCompleted}
            description={t.description}
            creationDate={t.creationDate}
            _id={t._id}
            fetchTasks={this.fetchTasks}
          />
        </Suspense>
      ));
      content = <table className="table table-sm m-3">{tableElems}</table>;
    }
    if (isLoaded) {
      return (
        <div className="app-content-container row">
          <div className="app-content m-4 col">{content}</div>
        </div>
      );
    } else {
      return (
        <div className="app-content-loading row">
          <div className="w-auto m-auto p-2"> Loading... </div>
        </div>
      );
    }
  }
}

export default TodoList;
