import React from "react";
import Card from "./components/Card.jsx";
import { cardsData } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>

      <div className="cards-view">
        <div className="cards-grid">
          {cardsData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
