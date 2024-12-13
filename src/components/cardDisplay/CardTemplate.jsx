



function CardTemplate({ cardData }){



return(
    
    <div className="pokemon-card">
        <img className="pokemon-card-image" src={cardData.sprites.other.dream_world.front_default} width={"150px"} height={'150px'} ></img>
        <h3 className="pokemon-card-title">{cardData.name}</h3>
    </div>

)


}


export default CardTemplate