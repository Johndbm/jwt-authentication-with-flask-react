import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby-meme.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Dashboard</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<h1 className="alert-success">
                Congratulations!<br></br> You're on the private Dashboard!
            </h1>
		</div>
	);
};
