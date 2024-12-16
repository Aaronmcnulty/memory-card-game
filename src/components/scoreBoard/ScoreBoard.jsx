
function ScoreBoard({ clickedCards, highScore }){

    return(

        <div>
            <p>Score: </p>
            <p>{clickedCards.length}</p>
            <p>High Score</p>
            <p>{highScore}</p>
        </div>

    )


}

export default ScoreBoard;