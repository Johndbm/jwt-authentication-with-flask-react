import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const token = localStorage.getItem("token");
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{store.token !== null ? (
					<button className="btn btn-primary"
						onClick={() => actions.logoutUser()}>
							Logout
						</button>
						): <div></div>}
						
				</div>
				
			</div>
		</nav>
	);
};
