import React from "react";
import "../utils/Contact.css";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="Contact">
      <h1>
        Email: <b className="contact_text">TylerLinen@gmail.com</b>
      </h1>
      <h1>
        Phone:<b className="contact_text"> 732-770-7769</b>
      </h1>
      <div className="resume">
        <Button href="https://docs.google.com/document/d/1tjKr77wJXaSpthOR5zx1YzuUWGcfPUAnd7xLZ_NK4vw/edit" className="contact_button">Click To View Resume</Button>
      </div>
    </div>
  );
}

export default Contact;
