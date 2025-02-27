import React from "react";

export default function Card({ card }) {
  return (
    <div className="card">
      <h4>{card.name}</h4>
      <small>{card.tag}</small>
      <p>{card.description}</p>
      <img src={card.imageSrc} alt={card.imageAlt} />
    </div>
  );
}
