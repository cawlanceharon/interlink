import React from 'react';
import {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import Axios from "axios";

export const UsersUpdateModal = ({state, handleResetUsers, handleModalView, handleInputChange}) => {

  const usersLevel = [
    {"value": 1, "name": "User"},
    {"value": 0, "name": "Admin"},
    {"value": 2, "name": "Account"}
  ];

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      Axios.post('http://localhost:8080/users/update', {
        "id": form.elements.id.value,
        "username": form.elements.username.value,
        "password": form.elements.password.value,
        "level": form.elements.level.value
      }).then(response => {
        if (response.data.result) {
          handleResetUsers();
          setValidated(false);
          handleModalView('update', false, false);
        }
      });
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Modal show={state.modal.update} onHide={() => handleModalView('update', false, false)}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control type="hidden"
                          name={"id"}
                          value={state.form.id}
                          onChange={handleInputChange}/>
            <Form.Group md="6" controlId="username">
              <Form.Label column={"required"}>Username</Form.Label>
              <Form.Control type="text"
                            name={"username"}
                            placeholder="Username"
                            value={state.form.username}
                            onChange={handleInputChange}
                            required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="6" controlId="password">
              <Form.Label column={"required"}>Password</Form.Label>
              <Form.Control type="password"
                            name={"password"}
                            placeholder="Password"
                            value={state.form.password}
                            onChange={handleInputChange}
                            required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="6" controlId="level">
              <Form.Label column={"required"}>User Level</Form.Label>
              <Form.Control as="select"
                            name={"level"}
                            value={state.form.level}
                            onChange={handleInputChange}>
                {(usersLevel.map((usersLevel, i) =>
                  <option key={i} value={usersLevel.value}>{usersLevel.name}</option>
                ))};
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleModalView('update', false, false)}>Close</Button>
            <Button variant="primary" type="submit">Save</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
};
