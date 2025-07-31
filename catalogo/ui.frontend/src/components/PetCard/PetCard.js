import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./PetCard.css";

const TARGET_URL = "/content/catalogo/us/en/detalhes.html";

const PetCard = (props) => {
  const { id, name, bread, age, description, image } = props;

  const goToDetails = () => {
    sessionStorage.setItem("petDetail", JSON.stringify(props));
    window.location.href = TARGET_URL;
  };

  return (
    <article className="pet-card">
      {image ? (
        <img className="pet-card__image" src={image} alt={`Foto de ${name}`} />
      ) : (
        <p style={{ color: "red", textAlign: "center" }}>⚠ Nenhuma imagem encontrada para este pet</p>
      )}

      <div className="pet-card__content">
        <h2 className="pet-card__name">{name}</h2>
        <p className="pet-card__id">ID: {id}</p>
        <div className="pet-card__details">
          <dl>
            <dt>Raça</dt><dd>{bread}</dd>
            <dt>Idade</dt><dd>{age}</dd>
            <dt>Descrição</dt><dd>{description}</dd>
          </dl>
        </div>
      </div>

      <button className="pet-card__button" onClick={goToDetails}>
        Detalhes
      </button>
    </article>
  );
};

export default MapTo("catalogo/components/petcard")(PetCard);