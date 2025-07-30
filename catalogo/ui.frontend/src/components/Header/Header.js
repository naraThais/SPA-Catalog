import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./Header.css";

// Menu principal do site PetCare
const menu = [
  { label: "Início", path: "/content/catalogo/us/en/home.html" },
  { label: "Pets", path: "/content/catalogo/us/en/pets.html" },
  { label: "Sobre", path: "/content/cafecatalog/us/en/about.html" },
];

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const { pathname } = useLocation(); // para destacar item ativo

  return (
    <header className="site-header">
      {/* Logo / Marca */}
      <div className="brand">
        <Link to="/content/catalogo/us/en.html">
          <strong>PetCare</strong>
        </Link>

        {/* Botão de menu responsivo */}
        <button
          className="pet"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Navegação principal */}
      <ul className={`primary-nav ${menuAberto ? "open" : ""}`}>
        {menu.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={pathname === path ? "active" : ""}
              onClick={() => setMenuAberto(false)}
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