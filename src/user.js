//import React, { useState } from "react"
import { useParams } from "react-router-dom"
function User() {
	let { slug } = useParams()
	console.log(slug)
	return (
		<div>
			<h1>Users</h1>
			{/* <button onClick={() => props.data()}>Message for tyson</button> */}
		</div>
	)
}
export default User
// import React, { Component } from "react";
// class user extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			data: "Hello",
// 		};
// 	}
// 	eat() {
// 		alert("Singla");
// 	}
// 	componentWillUnmount() {
// 		console.log("called");
// 	}

// 	render() {
// 		return <h1>{this.state.data} </h1>;
// 	}
// }

// export default user;
