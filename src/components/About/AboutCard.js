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
            <br />I'm Fernando Siqueira 
            from São José dos Campos, Br. 
            <br />I am Developer and I currently work as Jr. Tech Lead / Business Analyst Omnichannel in <a href="https://www.farmaconde.com.br/" style={{textDecoration:"none", color:"#e7d90d"}}>Farma Conde</a>.
            <br />Graduated in Systems Analysis and Development at UNIP, And finding a way to do an MBA in the UK.
            <br />
            <br />
            <br />
            Apart from working, some other activities that I love to do!
            <br />
          </p>
          <ul style={{listStyleType:"none"}}>
            <li style={{fontSize: "17px", textAlign:"left"}}>I really like gastronomy, and sometimes I even think I'm a chef, but I confess, it doesn't always turn out good <a style={{fontSize:"25px"}}>&#x1F468;&#x1F3FB;&#x200D;&#x1F373;</a></li>
            <br/>
            <li style={{fontSize: "17px", textAlign:"left"}}>Feel like a foreigner, get to know other cultures and see other places</li>
</ul>
<br />
            <br />
          <p style={{ color: "#e7d90d", textAlign:"right" , paddingBottom:"0px"}}>
            "Life is about living and not surviving"{" "}
          </p>
          <footer style={{ color:"#e7d90d", fontSize:"18px", fontStyle:"italic", textAlign:"right" , paddingTop:"0px"}}> - Kobe Bryant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
