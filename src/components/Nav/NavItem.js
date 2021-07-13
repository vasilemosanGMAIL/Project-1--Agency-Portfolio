import React from "react";
//import { Link } from 'react-router-dom';

const NavItem = ({ item }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={item.href}>
        {item.item}
      </a>
      {/* <Link to={item.href} className="nav-link">{item.item}</Link> */}
    </li>
  );
};
export default NavItem;
