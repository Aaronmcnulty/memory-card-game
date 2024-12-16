import Button from "../elements/Button";

function GameControls({ handleChoosePokes }){

    return(
        <>
        
            <div className={"game-controls-container"}>
                <Button handleClick={handleChoosePokes} text={'start'}/>
                <Button text="Reset"/>
            </div>

        </>
    )


}

export default GameControls;