import React, { Component } from "react";
import ReactDOM from "react-dom";

interface IState {
  value: string
}

class Form extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: "my input"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    const { value } = event.target;
    this.setState({
        value
    });
  }

  render() {

    console.log();

    return (
      <form>
        {process.env.DB_HOST}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.value}
      </form>
    );
  }
}

export default Form;
