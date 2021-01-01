import React, { Suspense } from 'react';
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("./Header"));
const TodoList = React.lazy(() => import("./TodoList"));

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null,
      isLoaded: false,
    };
    this.fetchTasks = this.fetchTasks.bind(this);
  }

  fetchTasks() {
    fetch("/api")
      .then((res) => res.json())
      .then(
        (tasks) => {
          this.setState({
            isLoaded: true,
            tasks: tasks,
          });
        },
        (err) => {
          console.log(err);
          this.setState({ isLoaded: true, tasks: [] });
        }
      );
  }

  render() {
    return (
      <div class="app-container container mx-auto my-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Header fetchTasks={this.fetchTasks} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TodoList
            fetchTasks={this.fetchTasks}
            isLoaded={this.state.isLoaded}
            tasks={this.state.tasks}
            key={this.state.tasks}
          />
        </Suspense>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
