import CardTemplate from "../cardDisplay/CardTemplate";
import Button from "../elements/Button";

// Maps the chosen pokemon through the card template and returns them in the game display.

function GameDisplay({
  chosenPokemon,
  clickedCards,
  setClickedCards,
  handleCardClick,
  handleChoosePokes,
}) {
  return (
    <div role="gameDisplayContainer" id={"game-display-container"}>
      <div id={"cards-container"}>
        {chosenPokemon &&
          chosenPokemon.map((item) => {
            return (
              <CardTemplate
                handleCardClick={handleCardClick}
                key={item.name + 1}
                cardData={item}
                clickedCards={clickedCards}
                setClickedCards={setClickedCards}
              />
            );
          })}
      </div>
    </div>
  );
}

export default GameDisplay;
