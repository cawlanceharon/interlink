import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Axios from "axios";

export const UsersInsertModal = ({ state, handleResetUsers, handleModalView }) => {

  const usersLevel = [
    {"value": 1, "name": "User"},
    {"value": 0, "name": "Admin"},
    {"value": 2, "name": "Account"}
  ];

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      Axios.post('http://localhost:8080/users/insert', {
        "username": form.elements.username.value,
        "password": form.elements.password.value,
        "level": form.elements.level.value
      }).then(response => {
        this.setState(response.data);
      });
    }

    setValidated(true);
  };

  return (
    <>
      <Modal show={state.modal.insert} onHide={() => handleModalView('insert', false)}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group md="6" controlId="username">
              <Form.Label column={"required"}>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="6" controlId="password">
              <Form.Label column={"required"}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="6" controlId="level">
              <Form.Label column={"required"}>User Level</Form.Label>
              <Form.Control as="select">
                {(usersLevel.map((usersLevel, i) =>
                  <option key={i} value={usersLevel.value}>{usersLevel.name}</option>
                ))};
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleModalView('insert', false)}>Close</Button>
            <Button variant="primary" type="submit">Save</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
};
