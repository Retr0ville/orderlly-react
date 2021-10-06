import React from 'react';

const NavItemIcon = (props) => {
  return (
    <li className= {`nav-item ${props.isHidden ? "hidden" : ""}`}>
        <a className="nav-link" href={props.href}><i className={props.faIcon} aria-hidden="true"></i> <span className="hidden"> {props.text}</span></a>
    </li>
  );
};

export default NavItemIcon;