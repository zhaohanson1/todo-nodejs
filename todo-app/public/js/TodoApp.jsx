import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import TodoList from "./TodoList";

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
        <Header fetchTasks={this.fetchTasks}/>
        <TodoList
          fetchTasks={this.fetchTasks}
          isLoaded={this.state.isLoaded}
          tasks={this.state.tasks}
          key={this.state.tasks}
        />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
