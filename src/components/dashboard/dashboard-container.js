import React from 'react';
import Axios from 'axios';
import { mapDispatchToProps } from './dashboard-redux';
import DashboardView from './dashboard-view';
import './dashboard.scss';
import {connect} from "react-redux";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    return Axios.get('http://localhost:8080/dashboard').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (this.state) ? (<DashboardView dashboard={this.state}/>) : null;
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
