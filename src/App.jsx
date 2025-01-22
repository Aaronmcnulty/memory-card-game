import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { getRandomInt } from "./modules/randomInt";
import Header from "./components/header/Header";
import GameDisplay from "./components/gameDisplay/GameDisplay";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";
import GameOverDisplay from "./components/gameDisplay/GameOverDisplay";
import { shuffle } from "./modules/shuffle";
import { updateHighScore } from "./modules/updateHighScore";
import GameControls from "./components/controls/GameControls";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameResults, setGameResults] = useState(null);
  const [highScore, setHighScore] = useState(null);

  // Fetches the original 150 pokemon API (name and detailed API URL only) and stores in state
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setPokeData(response))
      .catch((error) => console.error(error));
  }, []);

  // Fetches the detailed API for individual pokemon and adds to the array in state.
  function fetchIndividualPokedata(pokemonUrl) {
    fetch(pokemonUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((response) =>
        setChosenPokemon((chosenPokemon) => [...chosenPokemon, response]),
      )
      .catch((error) => console.error(error));
  }

  /* Chooses 12 random numbers from 1-150 and stores the pokemon corresponding to that number.
    If the random number is a duplicate it is ignored and a new number is chosen.
    When 12 unique pokemon are stored each individual pokemon API is fetched using map.
  */
  function choosePokes() {
    setChosenPokemon([]);
    let pokeNums = [];
    while (pokeNums.length < 12) {
      let integer = getRandomInt(150);
      if (!pokeNums.includes(pokeData.results[integer])) {
        pokeNums.push(pokeData.results[integer]);
      }
    }
    pokeNums.map((item) => {
      fetchIndividualPokedata(item.url);
    });
  }

  /* Removes the clicked cards stored in state during the previous game.
     Resets the previous game result to null.
     Triggers choosePokes function to start new game.
  */
  const handleChoosePokes = () => {
    setClickedCards([]);
    setGameResults(null);
    choosePokes();
  };

  /* When a card is clicked the first time it is stored in the clickedCards state.
     The cards array order in state is then randomised, they then rerender in the new order. 
     If the card is already stored in clickedCards the player loses and the current 12 pokemon are 
     removed.
  */
  const handleCardClick = (event) => {
    if (!clickedCards.includes(event.target.id)) {
      setClickedCards((clickedCards) => [...clickedCards, event.target.id]);
      setChosenPokemon((chosenPokemon) => shuffle(chosenPokemon));
    } else {
      setChosenPokemon([]);
      setGameResults("You Lose");
    }
  };

  /* Each time the clickedCards state is changed the score updates with the new total.
     Function to check if the player has won is triggered
  */
  useEffect(() => {
    updateHighScore(clickedCards, setHighScore, highScore);
    checkWin(clickedCards);
  }, [clickedCards]);

  function checkWin(clickedCards) {
    if (clickedCards.length === 12) {
      setGameResults("You Win");
      setChosenPokemon([]);
    }
  }

  return (
    <>
      <Header />

      <ScoreBoard clickedCards={clickedCards} highScore={highScore} />
      {gameResults && <GameOverDisplay gameResults={gameResults} />}
      <GameDisplay
        handleCardClick={handleCardClick}
        chosenPokemon={chosenPokemon}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        handleChoosePokes={handleChoosePokes}
      />
      <GameControls handleChoosePokes={handleChoosePokes} />
    </>
  );
}

export default App;
