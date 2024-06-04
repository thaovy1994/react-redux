import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Admin from "./components/Admin/Admin";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";
import Login from "./components/Auth/Login";
import HomePage from "./components/Home/HomePage";
import User from "./components/User/User";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //StrictMode just run at local/development, not product
  //render component twice is caused by TrictMode
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<User />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
