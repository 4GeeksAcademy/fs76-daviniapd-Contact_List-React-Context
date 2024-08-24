import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalDelete } from "./modalDelete";

export const ContactCard = () => {
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	const [selectedContactId, setSelectedContactId] = useState(null);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		actions.loadContacts();
	}, []);

	const contact = store.contacts.find((contact) => contact.id === parseInt(params.theid));

	if (!contact) {
		return <h1>Contacto no encontrado</h1>;
	}

	return (
		<>
			<div className="m-4 d-flex justify-content-end">
				<Link to="/contacts">
					<span className="btn btn-warning btn-lg mx-2" href="#" role="button">
						Back Contacts List
					</span>
				</Link>
				<Link to="/">
					<span className="btn btn-success btn-lg" href="#" role="button">
						Go Add Contact
					</span>
				</Link>
			</div>

			<div className="container d-flex justify-content-center">
				<div className="card my-5" key={contact.id} >
					<div className="upper">
						<img src="https://i.redd.it/4w8jxyi56if41.jpg"
							alt="upperImage"
							className="img-fluid " />
					</div>

					<div className="user text-center mb-3">
						<div className="profile">
							<img src="https://cdn-icons-png.freepik.com/512/3544/3544735.png"
								alt="profileImage"
								className="rounded-circle"
								width="80" />
						</div>
					</div>

					<div className="my-5 text-center">

						<h4 className="mb-2">{contact.name}</h4>
						<span className="text-muted d-block mb-1">
							<i className="fa-solid fa-location-dot me-1"></i>
							{contact.address}</span>
						<span className="text-muted d-block mb-1">
							<i className="fa-solid fa-phone-flip me-1"></i>
							{contact.phone}</span>
						<span className="text-muted d-block mb-3">
							<i className="fa-solid fa-envelope me-1"></i>
							{contact.email}</span>

						<div className="d-flex justify-content-center align-items-end">
							<button className="btn btn-icon">
								<i className="fa-solid fa-pencil" />
							</button>
							<button
								className="btn btn-icon"
								onClick={() => {
									setShowModal(true);
									setSelectedContactId(contact.id);
								}}
							>
								<i className="fa-solid fa-trash" />
							</button>
						</div>
					</div>
				</div>
				{showModal && (
      <ModalDelete
        showModal={showModal}
        setShowModal={setShowModal}
        contactId={selectedContactId}
        navigate={navigate} // Pasa la función navigate como prop
      />)}
			</div>
		</>
	);

};

ContactCard.propTypes = {
	match: PropTypes.object
};
