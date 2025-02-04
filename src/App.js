// import React from "react";
// function App() {
// let ele = React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Header")
// );
//   let username = "Dhoni";
//   return (
//     <div className="App">
//       <h1 style={{ color: "red" }}>ReactJS Session-1</h1>
//       <input />
//     </div>
//   );
// }

// export default App;

//!components

//!CBC
// import React from "react";
// class App extends React.Component {
//   render() {
//     return <h1>Class based components</h1>;
//   }
// }
// export default App;

//!FBC
// import React from "react";
// function App() {
//   return <h1>Function based components</h1>;
// }
// export default App;

//!OR
// import React from "react";
// const App = () => {
//   return <h1>Arrow function components</h1>;
// };
// export default App;

//! component composition
//!racc(Shortcut)
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

//!rafc(Shortcut)
// import React from 'react'

// export const App = () => {
//   return (
//     <div>App</div>
//   )
// }
//!
// import React from "react";
// import Navbar from "./components/Navbar.jsx";
// import Main from "./components/Main.jsx";
// import Sidebar1 from "./components/Sidebar1.jsx";
// import Sidebar2 from "./components/Sidebar2.jsx";
// import Footer from "./components/Footer.jsx";
// const App = () => {
//   return (
//     <div classname="App">
//       <Navbar />
//       <Main />
//       <div className="sidebar">
//         <Sidebar1 />
//         <Sidebar2 />
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default App;

//!props
import React, { Component } from "react";
import CBCPropEx from "./propsex/CBCPropEx";

export default class App extends Component {
  render() {
    return (
      <div>
        <CBCPropEx username="Pooja" />
      </div>
    );
  }
}
