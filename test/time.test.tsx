import {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
} from "../src/time"

describe("calculate initial time", () => {
    test("fdsafdsa", () => {
        const initialTime = calculateInitialTime({minutes: 1, seconds: 30})
        expect(initialTime).toEqual(90000)
    })
})

describe("calculate remaining minutes", () => {
    test("", () => {
        const remainingMinutes = calculateRemainingMinutes(90000)
        expect(remainingMinutes).toEqual(1)
    })
})

describe("calculate remaining seconds", () => {
    test("", () => {
        const remainingSeconds = calculateRemainingSeconds(90000)
        expect(remainingSeconds).toEqual(30)
    })
})
