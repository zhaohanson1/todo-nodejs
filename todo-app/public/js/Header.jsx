import React from "react";

class TaskAdderForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='app-add-form'>
                <form className={this.props.formVisible ? "open" : "close disabled"}>
                    <textarea class="form-control" rows="2" ></textarea>
                    <button className={"btn btn-primary btn-sm " + (this.props.formVisible ? "visible" : "invisible")}
                        type="submit">
                        Sumbit
                    </button>
                </form>
            </div>
        );
    }
}

class TaskAdderButton extends React.Component {
    render() {
        return (
            <div
                class="app-add w-auto my-1"
                onClick={this.props.toggleFormVisible}>
                <img src="static/images/add.svg" />
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
        };

        this.toggleFormVisible = this.toggleFormVisible.bind(this);
    }

    toggleFormVisible() {
        this.setState({
            formVisible: !this.state.formVisible,
        });
    }

    render() {
        return (
            <div class="app-header row p-3">
                <TaskAdderButton toggleFormVisible={this.toggleFormVisible} />
                <TaskAdderForm formVisible={this.state.formVisible} />
            </div>
        );
    }
}

export default Header;
