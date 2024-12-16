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
      <h3 className="pokemon-card-title">{cardData.name}</h3>
    </div>
  );
}

export default CardTemplate;
