import Button from "../elements/Button";

// Returns the game controls element and the buttons functions passed as props.

function GameControls({ handleChoosePokes }) {
  return (
    <>
      <div className={"game-controls-container"}>
        <Button handleClick={handleChoosePokes} text={"start"} />
        <Button text="Reset" />
      </div>
    </>
  );
}

export default GameControls;
