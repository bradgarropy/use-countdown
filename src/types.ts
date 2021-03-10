/**
 * @name Time
 * @description Time as minutes and seconds.
 */
type Time = {
    minutes: number
    seconds: number
}

/**
 * @name Countdown
 * @description State of the countdown timer.
 */
type Countdown = {
    minutes: number
    seconds: number
    formatted: string
}

export {Countdown, Time}
