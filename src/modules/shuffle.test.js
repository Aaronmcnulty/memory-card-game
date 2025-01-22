import { test, expect } from "vitest";
import { shuffle } from "./shuffle";


test("", () => {
    const testArray = [1,2,3,4,5]
    const shuffled = shuffle(testArray)
    expect(Array.isArray(shuffled)).toBe(true)
})

test("", () => {
    const testArray = [1,2,3,4,5]
    const shuffled = shuffle(testArray)
    expect(Array.isArray(shuffled)).not.toBe(false)
})

test("", () => {
    const testArray = [1,2,3,4,5]
    const shuffled = shuffle(testArray)
    expect(shuffled.length).toEqual(testArray.length)

})

