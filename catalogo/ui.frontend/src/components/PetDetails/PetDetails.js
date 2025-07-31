import React, { useEffect, useState } from "react";
import "./PetDetails.css";
import { MapTo } from "@adobe/aem-spa-component-mapping";

function PetDetails() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("petDetail");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return <p style={{padding:"2rem"}}>Nenhum Pet selecionado.</p>;
  }

  const {
    name, bread, age, description, image
  } = data;

  return (
    <main className="coffee-details">
      {image && (
        <div
          className="hero"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <section className="info">
        <h1>{name} — {bread}</h1>

        <table>
          <tbody>
            <tr><th>Idade</th><td>{age}</td></tr>
            <tr><th>Descrição</th><td>{description}</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default MapTo("catalogo/components/petdetails")(PetDetails);