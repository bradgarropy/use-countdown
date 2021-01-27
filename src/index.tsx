import {useEffect, useRef, useState} from "react"

import {
    calculateInitialTime,
    calculateRemainingMinutes,
    calculateRemainingSeconds,
} from "./time"

const useCountdown = ({minutes = 0, seconds = 0}) => {
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
