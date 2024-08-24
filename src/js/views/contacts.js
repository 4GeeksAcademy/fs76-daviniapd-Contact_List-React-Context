import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalDelete } from "../component/modalDelete";
import { ContactCard } from "../component/contactCard";

import "../../styles/contacts.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [selectedContactId, setSelectedContactId] = useState(null);

	useEffect(() => {
		actions.loadContacts().then((contacts) => {
			setLoading(false);
		});
	}, [actions.loadContacts]);



	return (
		<div className="container m-5 mx-auto w-75">
			<div className="d-flex justify-content-end mb-3">
				<Link to="/">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			<ul className="list-group">
				{Array.isArray(store.contacts) && store.contacts.map((contact) => (


					<li key={contact.id} className="list-group-item d-flex justify-content-between">

						<Link to={`/contactCard/${contact.id}`} key={contact.id} className="text-decoration-none flex-grow-1" style={{ textDecoration: 'none', color: 'black' }}>
						<div className="d-flex justify-content-between flex-grow-1">
							<img
								src="https://cdn-icons-png.freepik.com/512/3544/3544735.png"
								alt="profileImage"
								className="rounded-circle my-auto ms-4"
								style={{ height: '100%', maxHeight: '100px' }}
							/>

							<ul className="ms-5 flex-grow-1" style={{ listStyle: 'none', padding: 0 }}>
								<li className="fs-3 ">{contact.name}</li>
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
							</div>
						</Link>

						<div className="d-flex justify-content-end align-items-start">
							<button className="btn btn-icon">
								<i className="fa-solid fa-pencil" />
							</button>
							<button className="btn btn-icon" onClick={() => {
								setShowModal(true);
								setSelectedContactId(contact.id);
							}}>
								<i className="fa-solid fa-trash" />
							</button>
						</div>
					</li>

				))}
			</ul>
			{showModal && <ModalDelete showModal={showModal} setShowModal={setShowModal} contactId={selectedContactId} />}
		</div >
	)
}
