import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { getRandomInt } from './modules/randomInt'



function App() {

// https://pokeapi.co/api/v2/pokemon/ditto
const  [pokeData, setPokeData] = useState([])
const   [chosenPokemon, setChosenPokemon] = useState([])

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
    fetchIndividualPokedata(item.url, setChosenPokemon, chosenPokemon )
  })
}

console.log(chosenPokemon)

const handleChoosePokes = () => {
  choosePokes()
}

  return (
    <>
       <p>PonkeyMong</p> 
       {pokeData.results && <p>{pokeData.results[0].name}</p>}
      <button onClick={handleChoosePokes}>Start</button>
      <ul>
        {chosenPokemon && chosenPokemon.map(item =>{
          return (
            <div key={item.name}>
            <img width={"150px"} height={'150px'} src={item.sprites.other.dream_world.front_default}></img>    
            <li>{item.name}</li>
          </div>
          )
          
          
        })}
      </ul>
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