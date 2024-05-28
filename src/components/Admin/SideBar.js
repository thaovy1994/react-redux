import {
  FaGem,
  FaGithub,
  FaRegLaughWink,
  FaTachometerAlt,
} from "react-icons/fa";
import { FcBarChart } from "react-icons/fc";
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
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            My app
          </div>
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
            <SubMenu label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
            <SubMenu label="Components">
              <MenuItem> Grid</MenuItem>
              <MenuItem> Layout</MenuItem>
              <SubMenu label="Forms">
                <MenuItem> Input</MenuItem>
                <MenuItem> Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem> CheckBox</MenuItem>
                  <MenuItem> Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <SubMenu label="E-commerce">
              <MenuItem> Product</MenuItem>
              <MenuItem> Orders</MenuItem>
              <MenuItem> Credit card</MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">New</span>}
            >
              dashboard
            </MenuItem>
            <MenuItem icon={<FaGem />}> components </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              suffix={<span className="badge yellow">3</span>}
              icon={<FaRegLaughWink />}
            >
              <MenuItem> 1</MenuItem>
              <MenuItem> 2</MenuItem>
              <MenuItem> 3</MenuItem>
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
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
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
