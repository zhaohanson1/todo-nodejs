import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
    render() {
        return (
            <div class="app-header row p-3">
                <div class="app-title text-center my-auto col">
                    <div class="app-add position-absolute">
                        <img src="static/images/add.svg" />
                    </div>
                    <div>React To-do App</div>
                </div>
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div class="app-content-container row">
                <div class="app-content m-4 col">
                    <table class="table table-sm m-3">
                        <tr>
                            <td class="w-auto">
                                <input type="checkbox" />
                            </td>
                            <td class="w-75">aaaaaaaaaa</td>
                            <td class="w-auto">
                                <img src="static/images/edit.svg" />
                            </td>
                            <td class="w-auto">
                                <img src="static/images/delete.svg" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

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
