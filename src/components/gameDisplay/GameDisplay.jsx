import CardTemplate from "../cardDisplay/CardTemplate";


function GameDisplay({ chosenPokemon }){

    return(

        <div id={'game-display-container'}>

            <div id={'cards-container'}>
                {chosenPokemon && chosenPokemon.map(item => {
                    return (
                        <CardTemplate key={item.name + 1} cardData={item} />
                    )
                })}
            </div>

        </div>

    )

}

export default GameDisplay;