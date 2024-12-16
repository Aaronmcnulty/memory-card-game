function ScoreBoard({ clickedCards, highScore }) {
  return (
    <div className="scoreboard-container">
      <p>Score: </p>
      <p>{clickedCards.length}</p>
      <p>High Score</p>
      <p>{highScore}</p>
    </div>
  );
}

export default ScoreBoard;
