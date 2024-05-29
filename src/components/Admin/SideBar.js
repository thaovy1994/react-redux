import { CiLight } from "react-icons/ci";
import { DiReact } from "react-icons/di";
import { FaGem, FaGithub, FaRegLaughWink } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FcBarChart } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
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
          <Menu>
            <SubMenu
              label="Charts"
              icon={<FcBarChart />}
              suffix={<span className="badge yellow">3</span>}
            >
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu icon={<RiGlobalFill color={"00bfff"} />} label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CiLight size={"0.8cm"} color={"00bfff"} />}
              label="Theme"
            >
              <MenuItem className="menu-button"> Dark</MenuItem>
              <MenuItem className="menu-button"> Light</MenuItem>
            </SubMenu>
            <SubMenu icon={<FaGem color={"00bfff"} />} label="Components">
              <MenuItem className="menu-button"> Grid</MenuItem>
              <MenuItem className="menu-button"> Layout</MenuItem>
              <SubMenu label="Forms">
                <MenuItem className="menu-button"> Input</MenuItem>
                <MenuItem className="menu-button"> Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem className="menu-button"> CheckBox</MenuItem>
                  <MenuItem className="menu-button"> Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <SubMenu icon={<FaCartShopping />} label="E-commerce">
              <MenuItem className="menu-button"> Product</MenuItem>
              <MenuItem className="menu-button"> Orders</MenuItem>
              <MenuItem className="menu-button"> Credit card</MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="circle">
            <MenuItem
              icon={<MdDashboard />}
              suffix={<span className="badge red">New</span>}
            >
              dashboard
            </MenuItem>
            <MenuItem icon={<FaGem />}>components</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              suffix={<span className="badge yellow">3</span>}
              icon={<FaRegLaughWink />}
              label="Features"
            >
              <MenuItem className="menu-button">User Management</MenuItem>
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
