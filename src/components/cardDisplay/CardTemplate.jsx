

function CardTemplate({
  cardData,
  clickedCards,
  setClickedCards,
  handleCardClick,
}) {

  
  return (
    <div className="pokemon-card">
      <img
        id={cardData.name}
        onClick={handleCardClick}
        className="pokemon-card-image"
        src={cardData.sprites.other.dream_world.front_default}
      ></img>
      <p className="pokemon-card-title">{cardData.name}</p>
    </div>
  );
}

export default CardTemplate;
