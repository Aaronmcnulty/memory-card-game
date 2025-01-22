// Returns a card element from the API data passed to it as well as handleCardClick function.

function CardTemplate({ cardData, handleCardClick }) {
  return (
    <div role="cardContainer" className="pokemon-card">
      <img
        id={cardData.name}
        onClick={handleCardClick}
        className="pokemon-card-image"
        src={cardData.sprites.other.dream_world.front_default}
      ></img>
      <p role="cardTitle" className="pokemon-card-title">{cardData.name}</p>
    </div>
  );
}

export default CardTemplate;
