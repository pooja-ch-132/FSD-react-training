import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>
);
