import React from "react";

class TaskAdderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.fetchTasks = this.props.fetchTasks;
    this.toggleFormVisible = this.props.toggleFormVisible;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const reqOpts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: this.state.value }),
    };

    fetch("/api/add", reqOpts)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.fetchTasks();
        } else {
          console.log("Error: " + data.msg);
        }
      });
    toggleFormVisible();
  }

  render() {
    return (
      <div class="app-add-form">
        <form
          className={this.props.formVisible ? "open" : "close disabled"}
          onSubmit={this.handleSubmit}
          id="add-form"
        >
          <textarea
            class="form-control"
            rows="2"
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="Task Description Form"
            aria-required="true"
          ></textarea>
          <label for="submit-button" form="add-form">Submit</label>
          <input
            className={
              "btn btn-primary btn-sm " +
              (this.props.formVisible ? "visible" : "invisible")
            }
            aria-label="Sumbit button"
            type="submit"
            value="Sumbit"
            id="submit-button"
          />
        </form>
      </div>
    );
  }
}

export default TaskAdderForm;
