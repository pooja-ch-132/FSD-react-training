import React, { Component } from "react";

class CBCStateEx extends Component {
  constructor() {
    super();
    this.state = {
      users: ["Vamshi", "Chetan", "Vaishali", "Pooja"],
      num: 100,
    };
  }
  chahgeNumber = () => {
    this.setState({ num: 200 });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.users.map((user, i) => {
          return <li key={i}>{user}</li>;
        })}
        <h1>{this.state.num}</h1>
        <button onClick={this.chahgeNumber}> Change number</button>
      </div>
    );
  }
}
export default CBCStateEx;
