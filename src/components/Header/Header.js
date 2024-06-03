import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoSearch } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          My app
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
            <NavLink to="/users" className="nav-link">
              User
            </NavLink>
          </Nav>
          <Nav>
            <form class="d-flex">
              <button class="btn btn-outline-success" type="submit">
                <GoSearch />
              </button>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for job openings"
                aria-label="Search"
              />
            </form>
            <button className="btn-login">Log in with Recruit ID</button>
            <button className="btn-signup">New memeber registration</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
