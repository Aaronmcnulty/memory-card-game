function GameOverDisplay({ gameResults }) {
  // Recieves the games result text as props and displays it.

  return (
    <div role="gameResultsContainer" id={"game-results"}>
      <h1 role="resultsText">{gameResults}</h1>
    </div>
  );
}

export default GameOverDisplay;
