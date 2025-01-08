function GameOverDisplay({ gameResults }) {

// Recieves the games result text as props and displays it.
  
  return (
    <div id={'game-results'}>
      <h1>{gameResults}</h1>
    </div>
  );
}

export default GameOverDisplay;
