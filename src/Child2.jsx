import React from "react";
import Child3 from "./Child3";

const Child2 = (props) => {
  return (
    <div>
      Child2
      <hr />
      <Child3 university={props.university} />
    </div>
  );
};

export default Child2;
