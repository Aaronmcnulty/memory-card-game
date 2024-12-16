import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { getRandomInt } from './modules/randomInt'
import GameDisplay from './components/gameDisplay/GameDisplay'
import ScoreBoard from './components/scoreBoard/ScoreBoard'
import GameOverDisplay from './components/gameDisplay/GameOverDisplay'
import { shuffle } from './modules/shuffle'
import { updateHighScore } from './modules/updateHighScore'

function App() {
// https://pokeapi.co/api/v2/pokemon/ditto
const [pokeData, setPokeData] = useState([])
const [chosenPokemon, setChosenPokemon] = useState([])
const [clickedCards, setClickedCards] = useState([])
const [gameResults, setGameResults] = useState(null)
const [highScore, setHighScore] = useState(null)


// On load the API minimal list of pokemon (name and url only) is fetched and stored in state
  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0', {mode: "cors"})
    .then((response) => response.json())
    .then((response) => setPokeData(response))
    .catch((error) => console.error(error))
}, [])


function fetchIndividualPokedata(pokemonUrl){
  fetch (pokemonUrl, {mode: "cors"})
  .then((response) => response.json())
  .then((response) =>  setChosenPokemon((chosenPokemon) => ([...chosenPokemon, response])))
  .catch((error) => console.error(error))
}



function choosePokes(){
  setChosenPokemon([])
  let pokeNums = []
  while(pokeNums.length < 12){
    let integer = getRandomInt(150)
      if(!pokeNums.includes(pokeData.results[integer])){
        pokeNums.push(pokeData.results[integer])
      }
  }
  console.log(pokeNums)
  pokeNums.map(item => {
    fetchIndividualPokedata(item.url)
  })
}



const handleChoosePokes = () => {
  setClickedCards([])
  choosePokes()
}

const handleCardClick = (event) => {
  console.log(event.target.id)
  if(!clickedCards.includes(event.target.id)){
    setClickedCards((clickedCards) => ([...clickedCards, event.target.id]))
    setChosenPokemon(shuffle(chosenPokemon))
  } else {
    setChosenPokemon([])
    setGameResults("You Lose")
  }
}

  useEffect(() => {
    updateHighScore(clickedCards, setHighScore, highScore)
  })



  return (
    <>
       
      <div id={'stuff-container'}>
        <h1>Memory Game</h1>
        {pokeData.results && <p></p>}
        <button onClick={handleChoosePokes}>Start</button>
      </div>

      <ScoreBoard clickedCards={clickedCards} highScore={highScore}/>
      {gameResults && <GameOverDisplay gameResults={gameResults}/>}
      <GameDisplay handleCardClick={handleCardClick} chosenPokemon={chosenPokemon} clickedCards={clickedCards} setClickedCards={setClickedCards}/>      

    </>
  )
}

export default App


{/* 
  
  Needs:

  Game Play.

    Start Button 

    Loading Screen

    Store name and image data for selected cards in the round

    Store and update current Score Tally

    Store and update best Score 

    Checks for Losing move

    Checks for user win

    Score Board

    Reset Button

    Reset on loss or win.


  1. Card Creation.

    - Fetch API and randomly select 12 items.

    - Store image links and name.

    - Template each cards visual features and add functions:
        
      1. Card needs to start in an 'unclicked' state.
      2. Must register and store when it is clicked.

    - Pass 8 selected items through card templates to create visual display.
  
  2. Card Display component.

    - Display the cards in random order in the browser.

    - Once a card is clicked the display order must rearange. 

  3. Score Board.

      - Logs total number of cards clicked

      - Updates when cards state changes to clicked

      - Passes the data to be stored

      - Resets when game is lost

      - Displays best score of all rounds
    
    4. Reset/Restart.
      
      - Restarts card creations process

      - Removes stored click state

      - Remove Current score

  */}