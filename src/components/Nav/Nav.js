import Masthead from "./Masthead";
import NavItem from "./NavItem";
import { useState } from "react";

const Nav = () => {
  const [navItems] = useState([
    { key: "1", href: "#services", item: "Services" },
    { key: "2", href: "#portfolio", item: "Portfolio" },
    { key: "3", href: "#about", item: "About" },
    { key: "4", href: "#team", item: "Team" },
    { key: "5", href: "#contact", item: "Contact" },
  ]);
  return (
    <div id="page-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src="assets/img/navbar-logo.svg" alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              {navItems.map((item) => (
                <NavItem key={item.key} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Masthead />
    </div>
  );
};
export default Nav;
