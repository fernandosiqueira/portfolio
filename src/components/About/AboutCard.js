import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, 
            <br />I'm<span className="purple"> Fernando Siqueira </span>
            from <span className="purple">São José dos Campos, Br. </span>
             I am a Jr. Tech Lead and Business Analyst Omnichannel in ITA VENTURES.
            <br />Graduated in Systems Analysis and Development at UNIP and studying MBA in Intelligence and Omnichannel Retail Management at ESPM.
            <br />
            <br />
            <br />
            Apart from working, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> To Cook
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is about living and not surviving"{" "}
          </p>
          <footer className="blockquote-footer">Kobe Bryant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
