import "./App.css"
import Nav from "./nav"

import { Routes, Route, Link } from "react-router-dom"
import Home from "./home.js"
import About from "./about.js"
import Error from "./404.js"
import User from "./user.js"
let data
let App = () => {
	// let res = await fetch("https://api.agify.io?name=bella")
	// let data = await res.json()
	// console.log(data.age)

	let user = [
		{ name: "anil", id: 1 },
		{ name: "peter", id: 2 },
		{ name: "bruce", id: 3 },
		{ name: "tony", id: 4 },
	]

	return (
		<div className="App">
			{user.map((item, i) => (
				<div key={i}>
					<Link key={i} to={"/user/" + item.id}>
						{item.id}
					</Link>
				</div>
			))}
			<Nav />
			<Routes>
				<Route path="/" exact="true" element={<Home />}></Route>
				<Route path="/about" exact="true" element={<About />}></Route>
				<Route path="*" element={<Error />}></Route>
				<Route path="/user/:id" render={() => <User />} element={<User />}></Route>
			</Routes>
		</div>
	)
}

export default App
