import React, { count, useState, useContext } from "react";
import ContextC2 from "./ContextC2";
import { GlobalDataProvider } from "./ContextAPI";
const ContextC1 = () => {
  const data = useContext(GlobalDataProvider);
  console.log(data);
  return (
    <div>
      ContextC1
      <h1>{data.count}</h1>
      <button onClick={data.incre}>Increment</button>
      <hr />
      <ContextC2 />
    </div>
  );
};

export default ContextC1;
