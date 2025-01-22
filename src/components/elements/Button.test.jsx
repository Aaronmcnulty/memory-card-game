import { render,screen } from "@testing-library/react";
import { describe, expect, it, vi} from "vitest";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Element", () => {
    it("Should", () => {
        render(<Button />)
       
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument()
    })

    it("Should call onClick upon user click",async () => {
        const onClick = vi.fn()
        const user = userEvent.setup()
        render(<Button handleClick={onClick} />)

        const buttonElement = screen.getByRole("button")

        await user.click(buttonElement)
        expect(onClick).toHaveBeenCalled()
    })

    it("Should call onClick upon user click",async () => {
        const onClick = vi.fn()
        const user = userEvent.setup()
        render(<Button handleClick={onClick} />)

        const buttonElement = screen.getByRole("button")

        
        expect(onClick).not.toHaveBeenCalled()
    })
})