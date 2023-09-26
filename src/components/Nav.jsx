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
              <Link to={"/register"}>
              <li className="nav-item">
                <a className="nav-link" >
                  Home
                </a>
                
              </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                ADMISSIONS
                </a>
              </li>
              <NavDropdown title="STUDENTS" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.2">
                <Link to='/register'>
                <a className="nav-link" >
                  Register
                </a>
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  LOGIN
                </NavDropdown.Item>
              </NavDropdown>
              <li className="nav-item">
                <a className="nav-link" >
                ACADEMICS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
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
