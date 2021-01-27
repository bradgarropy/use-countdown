const calculateInitialTime = (units: {minutes: number; seconds: number}) => {
    const initialMinutes = units.minutes * 60 * 1000
    const initialSeconds = units.seconds * 1000
    const initialTime = initialMinutes + initialSeconds

    return initialTime
}

const calculateRemainingMinutes = (remainingTime: number) =>
    Math.floor(remainingTime / (60 * 1000))

const calculateRemainingSeconds = (remainingTime: number) =>
    Math.floor((remainingTime / 1000) % 60)

export {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
}
