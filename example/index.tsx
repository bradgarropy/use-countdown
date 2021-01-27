import "react-app-polyfill/ie11"

import * as React from "react"
import * as ReactDOM from "react-dom"

import Component from "../."

const App = () => {
    return <Component />
}

ReactDOM.render(<App />, document.getElementById("root"))
