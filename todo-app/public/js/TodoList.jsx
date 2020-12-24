import React from "react";

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

export default TodoList;