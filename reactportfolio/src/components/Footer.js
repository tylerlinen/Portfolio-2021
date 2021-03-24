import React from "react";
import { Card } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import "../utils/Footer.css";

function Footer() {
  return (
    <Card.Footer>
      <a href=" https://www.linkedin.com/in/tyler-linen-a442181a9/">
        <Icon className="linkedin" name="linkedin" />
      </a>
      <a href="https://github.com/tylerlinen ">
        <Icon className="github" name="github" />
      </a>
    </Card.Footer>
  );
}

export default Footer;
