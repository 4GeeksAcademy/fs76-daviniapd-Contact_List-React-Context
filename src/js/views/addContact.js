import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const AddContact = () => {

    return (
<>
		<form className="m-5">
			<h1 className="text-center">Add a new contact</h1>
			<div className="mb-3">
				<label for="fullNameInput" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="fullNameInput" aria-describedby="fullName" placeholder="Full Name" />
			</div>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">Email</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
			</div>
			<div className="mb-3">
				<label for="phoneInput" className="form-label">Phone</label>
				<input type="number" className="form-control" id="phoneInput" aria-describedby="phone" placeholder="Enter phone" />
			</div>
			<div className="mb-3">
				<label for="adressInput" className="form-label">Adress</label>
				<input type="text" className="form-control" id="adressInput" aria-describedby="adress" placeholder="Enter adress" />
			</div>

			<div className="d-grid gap-2">
				<Link to="/contacts">
					<button type="submit" className="btn btn-primary w-100">save</button>
				</Link>
			</div>
			<Link to="/contacts">or get back to contact</Link>

		</form>
	</>
    )
};

