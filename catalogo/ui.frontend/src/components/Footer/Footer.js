import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4>PetCare</h4>
      <a href="#">Sobre nós</a>
      <a href="#">Pet Shop</a>
    </div>

    <div className="footer-section">
      <h4>Social</h4>
      <a href="#">LinkedIn</a>
      <a href="#">Instagram</a>
      <a href="#">YouTube</a>
    </div>

    <div className="footer-section">
      <h4>Ajuda</h4>
      <a href="#">Tel +55 9999-9999</a>
      <a href="#">Telegram</a>
      <a href="#">WhatsApp</a>
    </div>
  </footer>
);

export default MapTo("catalogo/components/footer")(Footer);