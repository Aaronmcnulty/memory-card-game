import Button from "../elements/Button";

// Returns the game controls element and the buttons functions passed as props.

function GameControls({ handleChoosePokes }) {
  return (
    <>
      <div role="controlsContainer" className={"game-controls-container"}>
        <Button role="startButton" handleClick={handleChoosePokes} text={"start"} />
        <Button text="Reset" />
      </div>
    </>
  );
}

export default GameControls;
