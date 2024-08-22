import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalDelete } from "../component/modalDelete";

import "../../styles/demo.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		actions.loadContacts().then((contacts) => {
			setLoading(false);
		});
	}, []);

	// if (!store.contacts || store.contacts.length === 0) {
	// 	return <div>Your contact list is empty</div>;
	// } else if (loading) {
	// 	return <div>Loading...</div>;
	// }


	return (
		<div className="container m-5 mx-auto w-75">
			<div className="d-flex justify-content-end mb-3">
				<Link to="/">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			<ul className="list-group">
				{Array.isArray(store.contacts) && store.contacts.map((contact) => (

					//   <Link to={`/single/${contact.id}`} className="text-decoration-none">
					<li key={contact.id} className="list-group-item d-flex justify-content-between">
						<img
							src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
							alt="profileImage"
							className="rounded-circle my-auto"
							style={{ height: '100%', maxHeight: '100px' }}
						/>

						<ul className="ms-5 flex-grow-1" style={{ listStyle: 'none', padding: 0 }}>
							<li className="fs-3">{contact.name}</li>
							<li className="text-muted fs-5">
								<i className="fa-solid fa-location-dot"></i> {contact.address}
							</li>
							<li className="text-muted fs-6">
								<i className="fa-solid fa-phone-flip"></i> {contact.phone}
							</li>
							<li className="text-muted fs-7">
								<i className="fa-solid fa-envelope"></i> {contact.email}
							</li>
						</ul>

						<div className="d-flex justify-content-end align-items-start">
							<button className="btn btn-icon">
								<i className="fa-solid fa-pencil" />
							</button>
							<button className="btn btn-icon" onClick={() => setShowModal(true)}>
								<i className="fa-solid fa-trash" />
							</button>
						</div>
					</li>
					//  {/* </Link> */ }
				))}
			</ul>
			{showModal && <ModalDelete showModal={showModal} setShowModal={setShowModal} />}
			</div>
	)
}
