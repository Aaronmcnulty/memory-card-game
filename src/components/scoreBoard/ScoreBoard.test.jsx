import { render,screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi} from "vitest";
import ScoreBoard from "./ScoreBoard";

describe("Score Board", () => {
    it("Should render the GameControls element", () => {
        const clickedCards = [1,2,3]
        render(<ScoreBoard clickedCards={clickedCards}/>)
       
        const scoreBoardContainer = screen.getByRole("scoreboardContainer")
        expect(scoreBoardContainer).toBeInTheDocument()
    })

    it("Score should equal the length of the clickedCards array", async () => {
        let clickedCards = [1,2,3]
        render (<ScoreBoard clickedCards={clickedCards}/>)

        const currentScoreText = screen.getByRole("currentScoreText")
        expect(currentScoreText.textContent).toBe("3").not.toBe("4")

    })

    it("Score should equal the length of the clickedCards array", async () => {
        const clickedCards = [1,2,3]
        const highScore = "10"
        render (<ScoreBoard clickedCards={clickedCards} highScore={highScore}/>)

        const highScoreText = screen.getByRole("highScoreText")
        expect(highScoreText.textContent).toBe("10").not.toBe("3")
    })

})