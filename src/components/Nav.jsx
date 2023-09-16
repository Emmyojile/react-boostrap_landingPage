import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function CustomNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning pl-5">
              <img
                src="	https://mouau.edu.ng/wp-content/uploads/2020/05/mouau_logo.jpg"
                alt=""
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <NavDropdown title="ADMISSIONS" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">CONTINUES EDUCATION</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  UNDERGRADUATE STUDIES
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  POSTGRADUATE SCHOOL
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="STUDENTS" id="nav-dropdown">
                <Link to={'/register'}>
                <NavDropdown.Item eventKey="4.2">
                  REGISTER
                </NavDropdown.Item>
                </Link>
                <NavDropdown.Item eventKey="4.3">
                  LOGIN
                </NavDropdown.Item>
              </NavDropdown>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                ACADEMICS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                PROGRAMS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CustomNav;
