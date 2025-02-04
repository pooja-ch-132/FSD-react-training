import React, { Component } from "react";

export default class CBCPropEx extends Component {
  render() {
    console.log(this);
    return (
      <div>
        CBCPropEx
        <h1>{this.props.username}</h1>
      </div>
    );
  }
}
