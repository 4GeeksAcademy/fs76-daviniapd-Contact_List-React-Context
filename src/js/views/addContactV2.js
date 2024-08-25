import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const AddContactV2 = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="d-flex justify-content-center align-items-center h-100 flex-column m-5">
				<Link to="/">
					<button className="btn btn-outline-info mb-2">Select Design</button>
				</Link>
				<h1 className="text-center" id="titleHomr">UNDER CONSTRUCTION</h1>
			</div>

		</>
	);
};