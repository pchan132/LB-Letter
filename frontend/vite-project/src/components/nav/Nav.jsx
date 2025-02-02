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
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Brand
          </Link>
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
          {/* ทำปุ่ม แฮมเบอร์เกอร์ */}
          {/* แทบ nav id= navbarNav เพราะ ตั้ง data-bs-target="#navbarNav"*/}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Mails">
                  จดหมาย
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/Admin">
                  จัดการจดหมาย
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
