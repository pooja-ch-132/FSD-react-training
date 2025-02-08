import React, { Component } from "react";
import "./formstyle.css";
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: " ",
      skillValue: "Skill not selected",
    };
  }
  changeSkill = (event) => {
    this.setState({
      skillValue: event.target.value,
    });
  };
  changeMessage = (event) => {
    this.setState({
      textValue: event.target.value,
    });
  };

  submitted = (event) => {
    alert(
      "Form is submitted successfully " +
        `${this.state.textValue} ${this.state.skillValue}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
          <label>Student Name</label>
          <input
            type="text"
            value={this.state.textValue}
            onChange={this.changeMessage}
          ></input>
          <br></br>
          <label>Email</label>
          <input
            type="email"
            value={this.state.textValue}
            onChange={this.changeMessage}
          ></input>
          <br></br>
          <label>Experience</label>
          <select value={this.state.skillValue} onChange={this.changeSkill}>
            <option>2years</option>
            <option>3years</option>
            <option>4years</option>
          </select>
          <br></br>
          <label>Skill</label>
          <select value={this.state.skillValue} onChange={this.changeSkill}>
            <option>React</option>
            <option>Spring</option>
            <option>NodeJS</option>
          </select>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
