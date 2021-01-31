import "react-app-polyfill/ie11"

import * as React from "react"
import * as ReactDOM from "react-dom"

import useCountdown, {Time} from "../."

const App = () => {
    const time: Time = {minutes: 1, seconds: 30}
    const countdown = useCountdown(time)

    console.log(countdown)

    const minutes = countdown.minutes.toString().padStart(2, "0")
    const seconds = countdown.seconds.toString().padStart(2, "0")

    return (
        <>
            <h1>⏳ useCountdown hook</h1>
            <h2>{`${minutes}:${seconds}`}</h2>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
