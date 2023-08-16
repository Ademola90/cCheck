import { useNavigate } from "react-router-dom";
import AppLogo from "../app-logo";

const HomeThreeNav = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
       <AppLogo height="50px" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between ms-0 ms-md-4"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#top">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="-tw-ml-auto">
            <button
              className="tw-bg-white tw-px-12 tw-h-12 tw-rounded tw-rounded-full tw-text-[#0C111F] tw-font-medium"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeThreeNav;
