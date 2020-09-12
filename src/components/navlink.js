import React from "react";

export default function NavLink(props) {
  return (
    <a className="nav-link" href={props.href}>
      {props.title}
    </a>
  );
}
