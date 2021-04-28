import React from 'react';

import Modal from './Modal';

function DeleteBooksModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBooksModal">
        <h1>Are You Sure?</h1>
        <p>You are about to delete this library.</p>

        <div>
          <button onClick={props.onDeleteBooks} className="btn btn-danger mr-4">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBooksModal;
