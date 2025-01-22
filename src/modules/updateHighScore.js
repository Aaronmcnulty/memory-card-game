function updateHighScore(clickedCards, setHighScore, highScore) {
  // Updates the highscore when the total of clicked cards is higher.

  if (clickedCards.length >= highScore) {
    setHighScore(clickedCards.length);
  }
}

export { updateHighScore };
