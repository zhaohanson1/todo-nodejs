import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
    render() {
        return (
            <div class="app-container container mx-auto my-5">
                <Header />
                <TodoList />
            </div>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
