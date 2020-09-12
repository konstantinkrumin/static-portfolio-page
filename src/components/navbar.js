import React from "react";

import NavLink from "./navlink";

export default function Navbar() {
  const NAV_LINKS = [
    {
      href: "#welcome-section",
      title: "About"
    },
    {
      href: "#projects",
      title: "Projects"
    },
    {
      href: "#contact",
      title: "Contact"
    }
  ];

  return (
    <nav id="navbar">
      {NAV_LINKS.map(({ href, title }, key) => (
        <NavLink key={key} href={href} title={title} />
      ))}
    </nav>
  );
}
