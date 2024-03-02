import {format as formatTime} from "date-fns"
import {useEffect, useRef, useState} from "react"

import {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
} from "./time"
import {Countdown, Time} from "./types"

type useCountdownParams = {
    minutes?: number
    seconds?: number
    format?: string
    autoStart?: boolean
    onCompleted?: VoidFunction
}

enum CountdownStatus {
    Inactive,
    Running,
    Paused,
}

/**
 * @name useCountdown
 * @description React hook countdown timer.
 */
const useCountdown = ({
    minutes = 0,
    seconds = 0,
    format = "mm:ss",
    autoStart = false,
    onCompleted,
}: useCountdownParams = {}): Countdown => {
    const id = useRef(0)

    // time
    const [remainingTime, setRemainingTime] = useState(
        calculateInitialTime({minutes, seconds}),
    )

    // status
    const [status, setStatus] = useState<CountdownStatus>(
        CountdownStatus.Inactive,
    )

    useEffect(
        () => {
            if (autoStart) {
                id.current = window.setInterval(calculateRemainingTime, 1000)

                setStatus(CountdownStatus.Running)
            }

            return () => window.clearInterval(id.current)
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    const calculateRemainingTime = () => {
        setRemainingTime(time => {
            if (time - 1000 <= 0) {
                window.clearInterval(id.current)
                onCompleted?.()

                setStatus(CountdownStatus.Inactive)

                return 0
            }

            return time - 1000
        })
    }

    const pause = (): void => {
        if (
            status === CountdownStatus.Paused ||
            status === CountdownStatus.Inactive
        ) {
            return
        }

        window.clearInterval(id.current)

        setStatus(CountdownStatus.Paused)
    }

    const start = (): void => {
        if (status === CountdownStatus.Running) {
            return
        }

        id.current = window.setInterval(calculateRemainingTime, 1000)

        setStatus(CountdownStatus.Running)
    }

    const reset = (time: Time = {minutes, seconds}) => {
        window.clearInterval(id.current)

        if (autoStart) {
            id.current = window.setInterval(calculateRemainingTime, 1000)

            setStatus(CountdownStatus.Running)
        } else {
            setStatus(CountdownStatus.Inactive)
        }

        setRemainingTime(calculateInitialTime(time))
    }

    const countdown: Countdown = {
        minutes: calculateRemainingMinutes(remainingTime),
        seconds: calculateRemainingSeconds(remainingTime),
        formatted: formatTime(remainingTime, format),
        isActive:
            status === CountdownStatus.Running ||
            status === CountdownStatus.Paused,
        isInactive: status === CountdownStatus.Inactive,
        isRunning: status === CountdownStatus.Running,
        isPaused: status === CountdownStatus.Paused,
        start,
        pause,
        resume: start,
        reset,
    }

    return countdown
}

export default useCountdown
