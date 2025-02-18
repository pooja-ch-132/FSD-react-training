// import React from "react";
// import buycake from "./cake/cakeAction";
// import { connect } from "react-redux";
// const CakeContainer = (props) => {
//   console.log(props);
//   return <div>CakeContainer</div>;
// };

// const mapStateToProps = (state) => {
//   return {
//     totalCakes: state.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     xyz: () => dispatch(buycake()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./cake/cakeAction";
const CakeContainer = () => {
  let numOfCakes = useSelector((state) => state.numOfCakes);
  let dispatch = useDispatch();
  console.log(numOfCakes);
  return (
    <div>
      CakeContainer
      <h1>Number of Cakes in the bakery: {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};
export default CakeContainer;
