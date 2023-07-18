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
    const [isActive, setIsActive] = useState(false)
    const [isInactive, setIsInactive] = useState(true)
    const [isRunning, setIsRunning] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(
        () => {
            if (autoStart) {
                id.current = window.setInterval(calculateRemainingTime, 1000)

                setIsActive(true)
                setIsInactive(false)
                setIsRunning(true)
                setIsPaused(false)
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

                setIsActive(false)
                setIsInactive(true)
                setIsRunning(false)
                setIsPaused(false)

                return 0
            }

            return time - 1000
        })
    }

    const pause = (): void => {
        if (isPaused || isInactive) {
            return
        }

        window.clearInterval(id.current)

        setIsActive(true)
        setIsInactive(false)
        setIsRunning(false)
        setIsPaused(true)
    }

    const start = (): void => {
        if (isRunning) {
            return
        }

        id.current = window.setInterval(calculateRemainingTime, 1000)

        setIsActive(true)
        setIsInactive(false)
        setIsRunning(true)
        setIsPaused(false)
    }

    const reset = (time: Time = {minutes, seconds}) => {
        window.clearInterval(id.current)

        if (autoStart) {
            id.current = window.setInterval(calculateRemainingTime, 1000)

            setIsActive(true)
            setIsInactive(false)
            setIsRunning(true)
            setIsPaused(false)
        } else {
            setIsActive(false)
            setIsInactive(true)
            setIsRunning(false)
            setIsPaused(false)
        }

        setRemainingTime(calculateInitialTime(time))
    }

    const countdown: Countdown = {
        minutes: calculateRemainingMinutes(remainingTime),
        seconds: calculateRemainingSeconds(remainingTime),
        formatted: formatTime(remainingTime, format),
        isActive,
        isInactive,
        isRunning,
        isPaused,
        start,
        pause,
        resume: start,
        reset,
    }

    return countdown
}

export default useCountdown
