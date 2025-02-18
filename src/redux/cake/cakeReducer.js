import { BUY_CAKE } from "./cakeType";
const cakeState = {
  numOfCakes: 10,
};

const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

export default cakeReducer;
