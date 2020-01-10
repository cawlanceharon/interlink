import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const CommonUpdateModal = ({
                                    data,
                                    modal,
                                    handleModalView,
                                    handleModalMethod
                                  }) => {

  return (
    <>
      <Modal show={modal.update} onHide={() => handleModalView('update', false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this data ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalView('update', false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleModalMethod('update', false)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};
