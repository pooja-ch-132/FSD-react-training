import React from "react";
import "./Styles.css";
function FunctionalComponent(props) {
  console.log(props);
  let applyStyle = props.apply ? "heading" : " ";
  let inlineStyle = {
    color: "green",
    backgroundColor: "red",
    fontSize: "50px",
  };
  return (
    <div>
      <h1 className={`${applyStyle} font-style`}>
        Welcome to my React class {props.clgName}, {props.city}
      </h1>
      {props.children}
      <h2 style={inlineStyle}>Good afternoon</h2>
    </div>
  );
}

export default FunctionalComponent;
