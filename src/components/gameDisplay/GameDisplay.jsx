import CardTemplate from "../cardDisplay/CardTemplate";


function GameDisplay({ chosenPokemon, clickedCards, setClickedCards, handleCardClick}){

    return(

        <div id={'game-display-container'}>

            <div id={'cards-container'}>
                {chosenPokemon && chosenPokemon.map(item => {
                    return (
                        <CardTemplate handleCardClick={handleCardClick} key={item.name + 1} cardData={item}  clickedCards={clickedCards} setClickedCards={setClickedCards}/>
                    )
                })}
            </div>

        </div>

    )

}

export default GameDisplay;