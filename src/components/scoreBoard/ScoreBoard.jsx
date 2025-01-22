function ScoreBoard({ clickedCards, highScore }) {
  // Recieves the current score and highscore as props and displays in browser.

  return (
    <div role="scoreboardContainer" className="scoreboard-container">
      <h4>Score: </h4>
      <p role="currentScoreText">{clickedCards.length}</p>
      <h4>High Score: </h4>
      <br></br>
      <p role="highScoreText">{highScore}</p>
    </div>
  );
}

export default ScoreBoard;
