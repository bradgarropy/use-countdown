import {Time} from "./types"

const calculateInitialTime = ({minutes, seconds}: Time): number => {
    const initialMinutes = minutes * 60 * 1000
    const initialSeconds = seconds * 1000
    const initialTime = initialMinutes + initialSeconds

    return initialTime
}

const calculateRemainingMinutes = (remainingTime: number): number =>
    Math.floor(remainingTime / (60 * 1000))

const calculateRemainingSeconds = (remainingTime: number): number =>
    Math.floor((remainingTime / 1000) % 60)

export {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
}
