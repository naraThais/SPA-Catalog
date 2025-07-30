import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./Header.css";

const menu = [
  { label: "Inicio",   path: "/content/catalog/us/en/home.html" },
  { label: "Pets",  path: "/content/cafecatalog/us/en/pets.html" },
  { label: "Sobre",  path: "/content/cafecatalog/us/en/about.html" },
];

const Header = () => {
  const [open, setOpen]   = useState(false);
  const { pathname }      = useLocation();     // para marcar item ativo

  return (
    <header className="site-header">
      {/* marca / logo */}
      <div className="brand">
        <Link to="/content/catalogo/us/en.html">PetCare</Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>
      </div>

      {/* navegação */}
      <ul className={`primary-nav ${open ? "open" : ""}`}>
        {menu.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={pathname === path ? "active" : ""}
              onClick={() => setOpen(false)}        
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default MapTo("catalogo/components/header")(Header);