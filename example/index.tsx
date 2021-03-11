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

    return (
        <>
            <h1>⏳ useCountdown hook</h1>
            <h2>{countdown.formatted}</h2>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
