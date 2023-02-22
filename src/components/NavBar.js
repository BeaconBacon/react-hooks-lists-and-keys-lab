import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

const navElements = links.map((nav, index) => {
  return <a key={index} href={"#" + nav}>{nav}</a>
});
  return (
  <nav>
   {navElements}
  </nav>
  )
}

export default NavBar;
