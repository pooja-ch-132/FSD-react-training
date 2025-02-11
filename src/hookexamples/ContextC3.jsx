import React, { useContext, useState } from "react";
import { GlobalDataProvider } from "./ContextAPI";

const ContextC3 = () => {
  const data = useContext(GlobalDataProvider);
  return (
    <div>
      ContextC3
      <h1>{data.count}</h1>
      <button onClick={data.incre}>Increment</button>
    </div>
  );
};

export default ContextC3;
