import React from "react"
import ReactDOM from "react-dom"
import App from "../components/App"
import State from "../components/State"
import TemporaryStorage from "../components/TemporaryStorage"
const db = new TemporaryStorage()
const repo = new State(db)

it("renders without crashing", () => {
	const div = document.createElement("div")
	ReactDOM.render(<App repo={repo} />, div)
	ReactDOM.unmountComponentAtNode(div)
})
