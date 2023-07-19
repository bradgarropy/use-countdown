import * as React from "react"
import * as ReactDOM from "react-dom"

import useCountdown from "../src"

const App = () => {
    const countdown = useCountdown({
        minutes: 1,
        seconds: 30,
        format: "mm:ss",
        autoStart: false,
        onCompleted: () => console.log("onCompleted"),
    })

    console.log(countdown)

    const onStart = () => {
        countdown.start()
    }

    const onPause = () => {
        countdown.pause()
    }

    const onResume = () => {
        countdown.resume()
    }

    const onReset = () => {
        countdown.reset()
    }

    const onResetChange = () => {
        countdown.reset({minutes: 2, seconds: 0})
    }

    return (
        <>
            <h1>⏳ useCountdown hook</h1>
            <h2>{countdown.formatted}</h2>
            <button onClick={onStart}>Start</button>
            <button onClick={onPause}>Pause</button>
            <button onClick={onResume}>Resume</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onResetChange}>Reset to 2:00</button>
            <pre>{JSON.stringify(countdown, null, 2)}</pre>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
