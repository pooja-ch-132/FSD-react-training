import React from "react";

const PropChildEx = (props) => {
  console.log(props);
  return (
    <div>
      PropChildEx
      <h1>{props.num}</h1>
      {props.children}
    </div>
  );
};

export default PropChildEx;
