import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const AddContactV2 = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="d-flex justify-content-center align-items-center h-100 flex-column m-5">
				<h1 className="text-center my-3 p-5 bg-warning" id="titleHomr"><i class="fa-solid fa-radiation"></i>  UNDER CONSTRUCTION  <i class="fa-solid fa-radiation"></i></h1>
			</div>

		</>
	);
};