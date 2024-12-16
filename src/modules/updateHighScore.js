function updateHighScore(clickedCards, setHighScore, highScore) {
  if (clickedCards.length >= highScore) {
    setHighScore(clickedCards.length);
  }
}

export { updateHighScore };
