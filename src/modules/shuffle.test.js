import { test, expect } from "vitest";
import { shuffle } from "./shuffle";


test("Should return an Array", () => {
    const testArray = [1,2,3,4,5]
    const shuffled = shuffle(testArray)
    expect(Array.isArray(shuffled)).toBe(true)
})

test("Should fail if anything other than an Array is returned", () => {
    const testArray = [1,2,3,4,5]
    const shuffled = shuffle(testArray)
    expect(Array.isArray(shuffled)).not.toBe(false)
})

test("Should return an Array the same length as passed in", () => {
    const testArray = [1,2,3,4,5]
    const shuffled = shuffle(testArray)
    expect(shuffled.length).toEqual(testArray.length)

})

