//!actual action based on type of intention

import { BUY_CAKE } from "./cakeType";
export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
