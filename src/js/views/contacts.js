import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container m-5 mx-auto w-75">
			<div className="d-flex justify-content-end mb-3">
				<Link to="/addContact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<Link to={"/single/" + index} className="text-decoration-none">
							<li
								key={index}
								className="list-group-item d-flex justify-content-between">

								<img
									src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
									alt="profileImage"
									className="rounded-circle my-auto"
									style={{ height: '100%', maxHeight: '100px' }}
								/>

								<ul className="ms-5 flex-grow-1" style={{ listStyle: 'none', padding: 0 }}>
									<li className="fs-3">{item.fullName}</li>
									<li className="text-muted fs-5"><i class="fa-solid fa-location-dot"></i>  {item.adress}</li>
									<li className="text-muted fs-6"><i class="fa-solid fa-phone-flip"></i> {item.phone}</li>
									<li className="text-muted fs-7"><i class="fa-solid fa-envelope"></i>  {item.email}</li>
								</ul>


								{// Conditional render example
									// Check to see if the background is orange, if so, display the message
									item.background === "orange" ? (
										<p style={{ color: item.initial }}>
											Check store/flux.js scroll to the actions to see the code
										</p>
									) : null}
								<div className="d-flex justify-content-end align-items-start">
									<button className="btn btn-icon" onClick={() => actions.changeColor(index, "orange")}>
										<i className="fa-solid fa-pencil" />
									</button>
									<button className="btn btn-icon" onClick={() => actions.changeColor(index, "orange")}>
										<i className="fa-solid fa-trash" />
									</button>
								</div>
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};
