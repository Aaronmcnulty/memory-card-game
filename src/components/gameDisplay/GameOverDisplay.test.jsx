import { render,screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GameOverDisplay from "./GameOverDisplay";



describe("Card Template", () => {
    it("Should", () => {
        render(<GameOverDisplay />)
       
        const cardContainer = screen.getByRole("gameResultsContainer")
        expect(cardContainer).toBeInTheDocument()
    })
})

describe("Card Template", () => {
    it("Should", () => {
        const gameResults = "Game Over"
        render(<GameOverDisplay gameResults={gameResults}/>)
       
        const  resultsText = screen.getByRole("resultsText")
        expect(resultsText.textContent).toEqual("Game Over")
    })
})