import React, { Component } from "react";
import "./Style2.css";
export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Hi Guys, Please Subscribe to my channel",
      flag: true,
    };
  }
  changeMsg = () => {
    this.setState({ msg: "Thanks for subscribing!!", flag: false });
    alert("Subscribed this channel");
  };
  render() {
    let applyStyle = this.state.flag ? "msg1" : "msg2";
    return (
      <div>
        <h1 className={applyStyle}>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>Subscribe</button>
      </div>
    );
  }
}
