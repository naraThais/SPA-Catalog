import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './PetCard.css';
import { Link } from 'react-router-dom';

const TARGET_URL = "/content/catalogo/us/en/home/detalhes.html";

const PetCard = (props) => {
  const { id, name, breed, description} = props;
const missingMainField = !name || name.trim().length === 0;

const goToDetails = () => {
    sessionStorage.setItem("petDetail", JSON.stringify(props));
    window.location.href = TARGET_URL;
  };
if (missingMainField) {
    return (
      <article className="pet-card">
        <p>⚠ Preencha o card para exibir conteúdo.</p>
      </article>
    );
  }
return (
    <article className="pet-card">
        <span>{name}</span>
        <span>{id}</span>
      <div>
          <dt>Raça</dt>
          <dd>{breed}</dd>
        </div>
        <div>
          <dt>Descrição</dt>
          <dd>{description}</dd>
        </div>
       <button className="adopt-button" onClick={goToDetails}>Detalhes</button>
    </article>
  );
};

export default MapTo("catalogo/components/petcard")(PetCard);