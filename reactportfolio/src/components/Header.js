import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react"

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <button className="homeBtn">Home</button>
        </Link>
      </div>
      <br></br>
      <a className="linkedin" href=" https://www.linkedin.com/in/tyler-linen-a442181a9/">
        <Icon className="linkedin" name="linkedin" />
      </a>
      <a className="github" href=" https://github.com/tylerlinen">
        <Icon className="github" name="github" />
      </a>
    </>
  );
}

export default Header;
