import React from "react";

export const ModalDelete = ({ showModal, setShowModal }) => {
    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div
            className={`modal ${showModal ? 'show' : ''}`}
            tabIndex="-1"
            style={{ display: showModal ? 'block' : 'none' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <i type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></i>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleClose}>Oh no!</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yes, go on!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}