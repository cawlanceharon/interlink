import React from 'react';
import Axios from "axios";
import {UsersView} from "./users-view";
import {mapDispatchToProps} from './users-redux';
import {connect} from "react-redux";
import './users.scss';
import store from "../../redux/store";

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      form: {
        id: '',
        username: '',
        password: '',
        level: '',
      },
      modal: {
        update: false,
        delete: false,
        insert: false,
      },
      alert: {
        update: false,
        delete: false,
        insert: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleModalView = this.handleModalView.bind(this);
    this.handleResetUsers = this.handleResetUsers.bind(this);
    this.handleModalAlertView = this.handleModalAlertView.bind(this);
  }

  componentDidMount() {
    return Axios.post('http://localhost:8080/users/all', {}).then(response => {
      this.setState({data: response.data.m_user});
      store.dispatch(this.props.reduxUsers(response.data.m_user));
    });
  }

  handleModalAlertView(action, alert) {
    let modalAlert = this.state.alert;
    modalAlert[action] = alert;
    this.setState({alert: modalAlert});
  }

  handleModalView(action, modal, users) {
    let dataModal = this.state.modal;
    dataModal[action] = modal;
    this.setState({modal: dataModal});

    if (users) {
      this.setState({form: users});
    }
  }

  handleResetUsers() {
    return Axios.post('http://localhost:8080/users/all', {}).then(response => {
      this.setState({data: response.data.m_user});
      store.dispatch(this.props.reduxUsers(response.data.m_user));
    });
  }

  handleInputChange(e) {
    let stateForm = this.state.form;
    stateForm[e.target.name] = e.target.value;
    this.setState({form: stateForm});
  }

  render() {
    return (this.state.data) ? (
      <>
        <UsersView users={this.state.data}
                   state={this.state}
                   handleModalAlertView={this.handleModalAlertView}
                   handleResetUsers={this.handleResetUsers}
                   handleInputChange={this.handleInputChange}
                   handleModalView={this.handleModalView} />
      </>
    ) : null;
  }
}

export default connect(null, mapDispatchToProps)(Users);
