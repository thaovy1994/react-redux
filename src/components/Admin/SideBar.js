import { DiReact } from "react-icons/di";
import { FaGithub, FaRegLaughWink } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import sidebarBg from "../../assets/bg2.jpg";
import "./SideBar.scss";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <Sidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <div className="sidebar-header">
          <DiReact size={"2cm"} color={"rgb(0, 255, 208)"} />
          <span>My app</span>
        </div>

        <div className="sidebar-content">
          <Menu iconShape="circle">
            <MenuItem
              icon={<MdDashboard />}
              suffix={<span className="badge red">New</span>}
              component={<Link to="/admin" />}
            >
              Dashboard
            </MenuItem>
          </Menu>

          <Menu iconShape="circle">
            <SubMenu
              suffix={<span className="badge yellow">3</span>}
              icon={<FaRegLaughWink />}
              label="Features"
            >
              <MenuItem component={<Link to="/admin/manage-users" />}>
                User Management
              </MenuItem>
              <MenuItem className="menu-button">Quiz Test Management</MenuItem>
              <MenuItem className="menu-button">Question Management</MenuItem>
            </SubMenu>
          </Menu>
        </div>

        <div className="sidebar-footer" style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/thaovy1994/react-redux"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                viewSource
              </span>
            </a>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBar;
