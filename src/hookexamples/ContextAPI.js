import React, { createContext, useState } from "react";

export const GlobalDataProvider = createContext();
const ContextAPI = (props) => {
  const [count, setCount] = useState(0);
  let incre = () => {
    setCount(count + 1);
  };
  return (
    <GlobalDataProvider.Provider value={{ count, incre }}>
      {props.children}
    </GlobalDataProvider.Provider>
  );
};

export default ContextAPI;
