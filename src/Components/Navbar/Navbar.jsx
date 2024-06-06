import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary main-navbar-nav">
        <div className="container-fluid">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="navbar-right-content">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 all-nav-elemnt">
                <li className="nav-item">
                  <Link className="nav-link" to={"/who"}>
                    Who We Are
                  </Link>
                </li>
                <li className="dropdown nav-item">
                  <div className="nav-link cursor-pointer">
                    Services <MdKeyboardArrowDown className="down-arrow"/>
                  </div>
                  <ul className="dropdown-content">
                    <Link to="/ricemill" className="nav-link">
                      <li>Rice Mill</li>
                    </Link>
                    <Link to="/hrms" className="nav-link">
                      <li>HRMS</li>
                    </Link>
                    <Link to="/erp" className="nav-link">
                      <li>ERP</li>
                    </Link>
                    <Link to="/school" className="nav-link">
                      <li>SMS</li>
                    </Link>
                    <Link to="/library" className="nav-link">
                      <li>LMS</li>
                    </Link>
                    <Link to="/inventory" className="nav-link">
                      <li>IMS</li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/journal"}>
                    Journals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/reachus"}>
                    Reach Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/career"}>
                    Careers
                  </Link>
                </li>
                
                <div className="contact-num">
                  <img src={phone} alt="" className="contact-img" />
                  <div className="phoneNo" href="tel:+91-9777798142">
                    <a className="number-ph" href="tel:+91-9777798142">+91-9777798142</a><br />
                    <a className="call" href="tel:+91-9777798142">Make a Call</a>
                  </div>
                </div>

                <div className="button-connect" type="button">
                  <Link to={"/reachus"}><button className="lets-conn-btn">Let's Connect! </button></Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
