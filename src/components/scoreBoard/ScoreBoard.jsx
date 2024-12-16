function ScoreBoard({ clickedCards, highScore }) {
  return (
    <div className="scoreboard-container">
      <h4>Score: </h4>
      <p>{clickedCards.length}</p>
      <h4>High Score: </h4>
      <br></br>
      <p>{highScore}</p>
    </div>
  );
}

export default ScoreBoard;
