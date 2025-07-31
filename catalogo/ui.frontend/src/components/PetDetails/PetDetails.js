import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PetDetails.css';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/catalogo/en/us/adocao.model.json')
      .then((res) => res.json())
      .then((data) => {
        const cards = data[':items'].root[':items'];
        const pets = Object.values(cards).filter(
          (item) => item['sling:resourceType'] === 'catalogo/components/petcard'
        );
        const found = pets.find((p) => p.id === id);
        setPet(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!pet) return <p>Pet não encontrado.</p>;

  return (
    <div className="pet-details">
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p><strong>Raça:</strong> {pet.breed}</p>
      <p><strong>Idade:</strong> {pet.age}</p>
      <p><strong>Sobre:</strong> {pet.description}</p>
    </div>
  );
};

export default PetDetails;
