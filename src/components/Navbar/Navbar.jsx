import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("home");
    } else if (location.pathname === "/gallery") {
      setMenu("gallery");
    } else if (location.pathname === "/administrator") {
      setMenu("admin");
    }
  }, []);

  let location = useLocation();

  return (
    <nav className="navbar">
      <div className="image">
        <img src="/logo.png" alt="" className="logo" />
      </div>
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("home");
            navigate("/");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        {/* <li
          onClick={() => {
            setMenu("catalog");
            navigate("/");
          }}
          className={menu === "catalog" ? "active" : ""}
        >
          Catalog
        </li> */}
        {/* <li
          onClick={() => {
            setMenu("aboutus");
            navigate("/");
          }}
          className={menu === "aboutus" ? "active" : ""}
        >
          About Us
        </li> */}
        {/* <li
          onClick={() => {
            setMenu("contact");
            navigate("/");
          }}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </li> */}
        <li
          onClick={() => {
            setMenu("gallery");
            navigate("/gallery");
          }}
          className={menu === "gallery" ? "active" : ""}
        >
          Gallery
        </li>
        <li
          onClick={() => {
            setMenu("admin");
            navigate("/administrator");
          }}
          className={menu === "admin" ? "active" : ""}
        >
          Admin
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
