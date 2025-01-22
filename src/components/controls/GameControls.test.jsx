import { render,screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi} from "vitest";
import userEvent from "@testing-library/user-event";
import GameControls from "./GameControls";

describe("Game Controls", () => {
    it("Should render the GameControls element", () => {
        render(<GameControls />)
       
        const controlsContainer = screen.getByRole("controlsContainer")
        expect(controlsContainer).toBeInTheDocument()
    })

})