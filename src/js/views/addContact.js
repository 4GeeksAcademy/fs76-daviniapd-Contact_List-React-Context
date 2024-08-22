import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(newContact);
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-5 mx-auto w-75">
        <h1 className="text-center">Add a new contact</h1>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Full Name</label>
          <input type="text" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} className="form-control" id="nameInput" aria-describedby="name" placeholder="Full Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" value={newContact.email} onChange={(e) => setNewContact({ ...newContact, email: e.target.value })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">Phone</label>
          <input type="number" value={newContact.phone} onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} className="form-control" id="phoneInput" aria-describedby="phone" placeholder="Enter phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="addressInput" className="form-label">Address</label>
          <input type="text" value={newContact.address} onChange={(e) => setNewContact({ ...newContact, address: e.target.value })} className="form-control" id="addressInput" aria-describedby="address" placeholder="Enter address" />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary w-100">Save</button>
        </div>
		<Link to="/contacts">or get back to contact</Link>
      </form>
      {submitted && <Link to="/contacts" className="btn btn-secondary mt-3">Go to Contacts</Link>}

    </>
  );
};