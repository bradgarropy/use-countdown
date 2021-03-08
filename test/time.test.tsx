import {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
} from "../src/time"

test("calculates initial time", () => {
    const initialTime = calculateInitialTime({minutes: 1, seconds: 30})
    expect(initialTime).toEqual(90000)
})

test("calculates remaining minutes", () => {
    const remainingMinutes = calculateRemainingMinutes(90000)
    expect(remainingMinutes).toEqual(1)
})

test("calculates remaining seconds", () => {
    const remainingSeconds = calculateRemainingSeconds(90000)
    expect(remainingSeconds).toEqual(30)
})
