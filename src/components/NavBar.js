import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkArr = links.map((linksArr) => {
    return <a key={linksArr} href= {`#${linksArr}`}>{linksArr}</a>
  })
  return <nav>{linkArr}</nav>;
}

export default NavBar;
