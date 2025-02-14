// import React from "react";
// import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
// import { Dashboard } from "./pages/Dashboard";
// import Classroom from "./pages/Classroom";
// import Assessments from "./pages/Assessments";
// import News from "./pages/News";
// import Calendar from "./pages/Calendar";
// import Store from "./pages/Store";
// import Blog from "./pages/Blog";
// import PageNotFound from "./pages/PageNotFound";
// import Profile from "./pages/Profile";
// import MyAccounts from "./pages/MyAccounts";
// import MySettings from "./pages/MySettings";
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/classroom" element={<Classroom />} />
//         <Route path="/assessments" element={<Assessments />} />
//         <Route path="/store" element={<Store />} />
//         <Route path="/calendar" element={<Calendar />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/profile" element={<Profile />}>
//           <Route path="/profile/myaccounts" element={<MyAccounts />} />
//           <Route path="/profile/mysettings" element={<MySettings />} />
//         </Route>
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </div>
//   );
// }
// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./crudcomponents/Home";
import Create from "./crudcomponents/Create";
import Edit from "./crudcomponents/Edit";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:userId" element={<Edit />} />
    </Routes>
  );
};

export default App;
