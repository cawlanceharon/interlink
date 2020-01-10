import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const CommonDeleteModal = ({
                                    modal,
                                    handleModalView,
                                    handleModalMethod
                                  }) => {

  return (
    <>
      <Modal show={modal.delete} onHide={() => handleModalView('delete', false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this data ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalView('delete', false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleModalMethod('delete', false)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};
