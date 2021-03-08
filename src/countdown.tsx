import {useEffect, useRef, useState} from "react"

import {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
} from "./time"
import {Time} from "./types"

type useCountdownParams = {
    minutes?: number
    seconds?: number
}

/**
 * @name useCountdown
 * @description React hook countdown timer.
 */
const useCountdown = ({
    minutes = 0,
    seconds = 0,
}: useCountdownParams = {}): Time => {
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

    const countdown = {
        minutes: calculateRemainingMinutes(remainingTime),
        seconds: calculateRemainingSeconds(remainingTime),
    }

    return countdown
}

export default useCountdown
