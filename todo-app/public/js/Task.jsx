import React from "react";

class Task extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: this.props.isCompleted,
      description: this.props.description,
      creationDate: this.props.creationDate,
      id: this.props._id,
      editing: false,
      inputValue: "",
    };
    
    this.fetchTasks = this.props.fetchTasks;

    this.sendUpdate = this.sendUpdate.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.editInputHandler = this.editInputHandler.bind(this);
    this.editSumbitHandler = this.editSumbitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }


  sendUpdate(body) {
    const reqOpts = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/update/" + this.state.id, reqOpts)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.props.fetchTasks();
        } else {
          alert("An error has occured.");
        }
      });
  }


  checkboxHandler() {
    var oppositeState = !this.state.isCompleted;
    this.setState({
      isCompleted: oppositeState,
    });

    this.sendUpdate({
      isCompleted: oppositeState,
      description: this.state.description,
    });
  }


  editInputHandler() {
    this.setState({
      editing: true,
      inputValue: this.state.description,
    });
  }


  editSumbitHandler() {
    this.setState({
      editing: false,
      description: this.state.inputValue,
    });

    this.sendUpdate({
      isCompleted: this.state.isCompleted,
      description: this.state.inputValue,
    });
  }


  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }


  deleteHandler() {
    fetch("/api/delete/" + this.state.id)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.props.fetchTasks();
        }
      });
  }


  render() {
    const {
      isCompleted,
      description,
      creationDate,
      id,
      editing,
      inputValue,
    } = this.state;

    var editButton = (
      <td className="w-auto" onClick={this.editInputHandler}>
        <img src="static/images/edit.svg" />
      </td>
    );

    var descText = (
      <td className={"w-75" + (isCompleted ? " checked" : "")} onClick={this.editInputHandler}>
        {description}
      </td>
    );

    var editInput = (
      <td className={"w-auto"}>
        <input
          type="text"
          name="description"
          className={"w-100"}
          value={inputValue}
          onChange={this.handleChange}
        />
      </td>
    );

    var saveButton = (
      <td className="w-auto" onClick={this.editSumbitHandler}>
        <img src="static/images/edit.svg" />
      </td>
    );

    return (
      <tr>
        <td className="w-auto">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={this.checkboxHandler}
          />
        </td>
        {!editing ? [descText, editButton] : [editInput, saveButton]}

        <td className="w-auto" onClick={this.deleteHandler}>
          <img src="static/images/delete.svg" />
        </td>
      </tr>
    );
  }
}

export default Task;
