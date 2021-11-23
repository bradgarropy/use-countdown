import * as React from "react"
import * as ReactDOM from "react-dom"

import useCountdown from "../."

const App = () => {
    const countdown = useCountdown({
        minutes: 1,
        seconds: 30,
        format: "mm:ss",
        onCompleted: () => console.log("onCompleted"),
    })

    console.log(countdown)

    const onPause = () => {
        countdown.pause()
    }

    const onResume = () => {
        countdown.resume()
    }

    const onReset = () => {
        countdown.reset()
    }

    return (
        <>
            <h1>⏳ useCountdown hook</h1>
            <h2>{countdown.formatted}</h2>
            <button onClick={onPause}>Pause</button>
            <button onClick={onResume}>Resume</button>
            <button onClick={onReset}>Reset</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
