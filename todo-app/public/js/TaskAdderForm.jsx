import React from "react";

class TaskAdderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.fetchTasks = this.props.fetchTasks;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const reqOpts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: this.state.value }),
    };
    fetch("/api/add", reqOpts)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.props.fetchTasks();
        } else {
          alert("PIRACY IS NO PARTY. An error has occured. SHUT OFF NOW!");
        }
      });

    event.preventDefault();
  }

  render() {
    return (
      <div class="app-add-form">
        <form
          className={this.props.formVisible ? "open" : "close disabled"}
          onSubmit={this.handleSubmit}
        >
          <textarea
            class="form-control"
            rows="2"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <input
            className={
              "btn btn-primary btn-sm " +
              (this.props.formVisible ? "visible" : "invisible")
            }
            type="submit"
            value="Sumbit"
          />
        </form>
      </div>
    );
  }
}

export default TaskAdderForm;