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
    onCompleted?: VoidFunction
}

/**
 * @name useCountdown
 * @description React hook countdown timer.
 */
const useCountdown = ({
    minutes = 0,
    seconds = 0,
    format = "mm:ss",
    onCompleted,
}: useCountdownParams = {}): Countdown => {
    const id = useRef(0)

    const [remainingTime, setRemainingTime] = useState(
        calculateInitialTime({minutes, seconds}),
    )

    useEffect(
        () => {
            id.current = window.setInterval(calculateRemainingTime, 1000)
            return () => window.clearInterval(id.current)
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    const calculateRemainingTime = () => {
        setRemainingTime(time => {
            if (time - 1000 <= 0) {
                clearInterval(id.current)
                onCompleted?.()
                return 0
            }

            return time - 1000
        })
    }

    const pause = (): void => {
        window.clearInterval(id.current)
    }

    const resume = (): void => {
        id.current = window.setInterval(calculateRemainingTime, 1000)
    }

    const reset = (): void => {
        window.clearInterval(id.current)
        id.current = window.setInterval(calculateRemainingTime, 1000)
        setRemainingTime(calculateInitialTime({minutes, seconds}))
    }

    const countdown: Countdown = {
        minutes: calculateRemainingMinutes(remainingTime),
        seconds: calculateRemainingSeconds(remainingTime),
        formatted: formatTime(remainingTime, format),
        pause,
        resume,
        reset,
    }

    return countdown
}

export default useCountdown
