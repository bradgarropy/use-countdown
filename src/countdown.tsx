import {format as formatTime} from "date-fns"
import {useEffect, useRef, useState} from "react"

import {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
} from "./time"
import {Countdown} from "./types"

type useCountdownParams = {
    minutes?: number
    seconds?: number
    format?: string
}

/**
 * @name useCountdown
 * @description React hook countdown timer.
 */
const useCountdown = ({
    minutes = 0,
    seconds = 0,
    format = "mm:ss",
}: useCountdownParams = {}): Countdown => {
    const id = useRef(0)

    const [remainingTime, setRemainingTime] = useState(
        calculateInitialTime({minutes, seconds}),
    )

    useEffect(() => {
        id.current = window.setInterval(calculateRemainingTime, 1000)
        return () => window.clearInterval(id.current)
    }, [])

    const calculateRemainingTime = () => {
        setRemainingTime(time => {
            if (time - 1000 <= 0) {
                clearInterval(id.current)
                return 0
            }

            return time - 1000
        })
    }

    const countdown: Countdown = {
        minutes: calculateRemainingMinutes(remainingTime),
        seconds: calculateRemainingSeconds(remainingTime),
        formatted: formatTime(remainingTime, format),
    }

    return countdown
}

export default useCountdown
