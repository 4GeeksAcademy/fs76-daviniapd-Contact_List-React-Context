import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [initialAlert, setInitialAlert] = useState(null);
    const [newContact, setNewContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setInitialAlert({ type: 'warning', message: 'Please check in the API that there is a slug called <strong><u>sole</u></strong> and if not, create it before continue.' });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, address } = newContact;

        if (!name.trim() || !email.trim() || !phone.trim() || !address.trim()) {
            if (!alert || alert.type !== 'danger') {
                setAlert({ type: 'danger', message: ' Please complete all the fields' });
            }
        } else {
            actions.addContact(newContact, () => {
                setAlert({ type: 'success', message: ' User created successfully' });
                setTimeout(() => {
                    navigate('/contacts');
                }, 1000);
            });
        }
    };

    return (
        <>
            {initialAlert && (
                <div className={`alert m-5 fade show alert-${initialAlert.type}`} role="alert">
                    <span dangerouslySetInnerHTML={{ __html: initialAlert.message }} />
                    <i type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close" onClick={() => setInitialAlert(null)}></i>
                </div>
            )}
            <form onSubmit={handleSubmit} className="m-5 mx-auto w-75">
                <h1 className="text-center">Add a new contact</h1>
                {alert && (
                    <div className={`alert fade show alert-${alert.type}`} role="alert">
                        {alert.type === 'danger' ? <i className="fa-solid fa-triangle-exclamation"></i> : <i className="fa-solid fa-circle-check"></i>}
                        {alert.message}
                        <i type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlert(null)}></i>
                    </div>
                )}
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
        </>
    );
};