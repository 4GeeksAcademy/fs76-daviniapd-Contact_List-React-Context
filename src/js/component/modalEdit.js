import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";

export const ModalEdit = ({ showEditModal, contact, onClose, onSave }) => {
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [address, setAddress] = useState(contact.address);
    const { store, actions } = useContext(Context);

    const handleSave = () => {
        const updatedContact = {
            id: contact.id,
            name,
            email,
            phone,
            address,
        };
        onSave(updatedContact);
    };

    return (
        <div
            className={`modal ${showEditModal ? 'show' : ''}`}
            tabIndex="-1"
            style={{ display: showEditModal ? 'block' : 'none' }}
            id='modalEdit'>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Contact</h5>
                        <i type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></i>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control mb-2"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control mb-2"
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control mb-2"
                                />
                            </div>
                            <div className="form-group">
                                <label>Adress</label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control mb-2"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

