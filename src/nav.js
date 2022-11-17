import React from "react"
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"

let nav = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<br></br>
			<Link to="/about">About</Link>
		</div>
	)
}
export default nav
