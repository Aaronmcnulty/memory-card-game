import CardTemplate from "../cardDisplay/CardTemplate";
import Button from "../elements/Button";


function GameDisplay({
  chosenPokemon,
  clickedCards,
  setClickedCards,
  handleCardClick,
  handleChoosePokes
  
}) {
  return (
    <div id={"game-display-container"}>

      <div id={'controls-container'}>
          <Button text={'Reset'} handleClick={handleChoosePokes}/>
      </div>

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
