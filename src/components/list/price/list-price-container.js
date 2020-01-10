import React from 'react';
import './list-price.scss';
import store from "../../../redux/store";
import Axios from "axios";
import { mapDispatchToProps } from './list-price-redux';
import { connect } from "react-redux";
import { CommonTableView } from "../../common/table/common-table-view";

class ListPrice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
      data: null,
      pages: {
        currentPage: 1,
        totalPages: 0,
      },
      modal: {
        update: false,
        delete: false,
        insert: false,
      },
    };

    this.handlePageView = this.handlePageView.bind(this);
    this.handleModalView = this.handleModalView.bind(this);
    this.handleModalMethod = this.handleModalMethod.bind(this);
  }

  componentDidMount() {
    return Axios.post('http://localhost:8080/list/price/select', {pages: 1}).then(response => {
      this.setState({pages:{currentPage: 1, totalPages: response.data.pages}});
      this.setState({data: response.data.m_price_list});
      store.dispatch(this.props.reduxListPrice(response.data.m_price_list));
    });
  }

  handlePageView(pageNumber) {
    return Axios.post('http://localhost:8080/list/price/select', {pages: pageNumber}).then(response => {
      this.setState({pages:{currentPage: pageNumber, totalPages: response.data.pages}});
      this.setState({data: response.data.m_price_list});
      store.dispatch(this.props.reduxListPrice(response.data.m_price_list));
    });
  }

  handleModalView(type, action, currentId) {
    this.setState({currentId: currentId});
    this.setState({modal: {[type]: action}});
  }

  handleModalMethod(type, data) {
    switch (type) {
      case 'delete':
        this.setState({modal: {delete: false}});
        Axios.post('http://localhost:8080/list/price/delete', {
          "id": this.state.currentId
        }).then(response => {
          if (response.status === 200) {
            this.handlePageView(this.state.pages.currentPage);
          }
        });
        break;
      case 'update':
        break;
      case 'insert':
        break;
      default:
        break;
    }
  }

  render() {
    return (this.state.data) ? (
      <>
        <CommonTableView
          id={"id"}
          title={"Price List"}
          currentId={this.state.currentId}
          data={this.state.data}
          modal={this.state.modal}
          currentPage={this.state.pages.currentPage}
          totalPages={this.state.pages.totalPages}
          handlePageView={this.handlePageView}
          handleModalView={this.handleModalView}
          handleModalMethod={this.handleModalMethod}
        />
      </>
    ) : null;
  }
}

export default connect(null, mapDispatchToProps)(ListPrice);
