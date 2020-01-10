import React from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';
import Axios from "axios";

export const UsersDeleteModal = ({state,
                                   handleResetUsers,
                                   handleModalView,
                                   handleModalAlertView}) => {

  const handleDeleteUser = (data) => {
    Axios.post('http://localhost:8080/users/delete', {
      "id": data.id
    }).then(response => {
      if (response.data.result) {
        handleResetUsers();
        handleModalView('delete', false, false);
      } else {
        handleModalAlertView('delete', true);
      }
    });
  };

  return (
    <>
      <Modal show={state.modal.delete} onHide={() => handleModalView('delete', false, false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this user ?</Modal.Body>
        <Alert variant="danger" show={state.alert.delete} onClose={() => handleModalAlertView('delete', false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Cannot delete last admin user.</p>
        </Alert>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalView('delete', false, false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser(state.form)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};
