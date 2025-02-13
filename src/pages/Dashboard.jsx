import React, { Component, selectedValue, handleRadioChange } from "react";
//import "./formstyle.css";
class Dashboard extends Component {
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
          <label>UserName</label>
          <input
            type="text"
            // value={this.state.textValue}
            // onChange={this.changeMessage}
          ></input>
          <br></br>
          <label>Email</label>
          <input
            type="email"
            // value={this.state.textValue}
            // onChange={this.changeMessage}
          ></input>
          <br></br>
          <label>Password</label>
          <input
            type="password"
            // value={this.state.textValue}
            // onChange={this.changeMessage}
          ></input>
          <br></br>
          <label>Country</label>
          <select value={this.state.skillValue} onChange={this.changeSkill}>
            <option>India</option>
            <option>North America</option>
            <option>South America</option>
            <option>England</option>
            <option>China</option>
            <option>North Korea</option>
            <option>Indonesia</option>
            <option>Australia</option>
            <option>Switzerland</option>
            <option>Paris</option>
            <option>Japan</option>
            <option>Africa</option>
          </select>
          <br></br>
          <input
            type="radio"
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label>Male</label>
          <input
            type="radio"
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label>Female</label>
          <input
            type="radio"
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label>Other</label>
          <br></br>
          <label>
            Address
            <textarea name="address" rows={4} cols={40} />
          </label>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
