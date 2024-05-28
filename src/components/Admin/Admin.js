import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";
import SideBar from "./SideBar";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollapsed(!collapsed)} />
        content goes here
      </div>
    </div>
  );
};

export default Admin;
