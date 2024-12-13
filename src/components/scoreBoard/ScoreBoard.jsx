
function ScoreBoard({ clickedCards }){

    return(

        <div>
            <p>score: </p>
            <p>{clickedCards.length}</p>
        </div>

    )


}

export default ScoreBoard;