import React from "react";
// import Bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
// link from react-router-dom
import { Link } from "react-router-dom";
// main layout
import Admin from "../main/Admin";
import Mails from "../main/Mails";
import Home from "../main/home-layout/Home";
export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="Mails">
            POISE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="Mails" active ="true" >
                  ดูจดหมาย
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Admin">
                  เพิ่มจดหมาย
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-facebook"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
