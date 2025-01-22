import { expect, test} from "vitest";
import { getRandomInt } from "./randomInt";

test("Type of returned value should be a number", () => {
    expect(getRandomInt(10)).toBeTypeOf("number")
})

test("Should return a number smaller than the input argument", () => {
    expect(getRandomInt(10)).toBeLessThan(11)
})

test("Should return a number greater than 0", () => {
    expect(getRandomInt(10)).toBeGreaterThan(0)
})

