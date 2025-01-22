import { render,screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GameDisplay from "./GameDisplay";



describe("Card Template", () => {
    it("Should", () => {
        render(<GameDisplay />)
       
        const cardContainer = screen.getByRole("gameDisplayContainer")
        expect(cardContainer).toBeInTheDocument()
    })
})