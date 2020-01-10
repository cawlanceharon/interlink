import React from 'react';
import {Table, Button} from 'react-bootstrap';
import {UsersInsertModal} from "./modal/users-insert-modal";
import {UsersUpdateModal} from "./modal/users-update-modal";
import store from "../../redux/store";
import {UsersDeleteModal} from "./modal/users-delete-modal";

export const UsersView = ({
                            users,
                            state,
                            handleModalAlertView,
                            handleResetUsers,
                            handleInputChange,
                            handleModalView}) => {

  store.subscribe(() => {
    if (store.getState().users) {
      users = store.getState().users;
    }
  });

  const UsersList = ({users}) => {
    return (users.map((data, i) =>
      <tr key={i}>
        <td>{data.username}</td>
        <td>******</td>
        <td>{data.level}</td>
        <td>
          <UsersPagesRender users={data}/>
        </td>
        <td>
          <Button variant="outline-primary" onClick={() => handleModalView('update', true, data)}>Edit</Button> &nbsp;
          <Button variant="outline-danger" onClick={() => handleModalView('delete', true, data)}>Delete</Button>
        </td>
      </tr>
    ));
  };

  const UsersPagesRender = ({users}) => {
    if (users.pages.length === 0) {
      return (
        <div>All Access</div>
      );
    }

    return (
      users.pages.map((usersPage, i) =>
        <div key={i}>{usersPage.user_pages},</div>
      )
    );
  };

  return (
    <>
      <UsersDeleteModal state={state}
                        handleModalAlertView={handleModalAlertView}
                        handleResetUsers={handleResetUsers}
                        handleModalView={handleModalView}/>
      <UsersUpdateModal state={state}
                        handleResetUsers={handleResetUsers}
                        handleModalView={handleModalView}
                        handleInputChange={handleInputChange}/>
      <UsersInsertModal state={state}
                        handleResetUsers={handleResetUsers}
                        handleModalView={handleModalView}/>
      <h1>User Administration <Button variant="outline-primary" onClick={() => handleModalView('insert', true)}>Add New</Button></h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>User Level</th>
            <th>Page Access</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <UsersList users={users}/>
        </tbody>
      </Table>
    </>
  )
};
