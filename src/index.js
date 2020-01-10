import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store/index";
import {Provider} from "react-redux";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import Dashboard from './components/dashboard/index';
import Users from './components/users/index';
import ListPrice from './components/list/price';
import ListInventory from './components/list/inventory';
import ListCustomer from './components/list/customer';
import ListSupplier from './components/list/supplier';
import NotFound from './components/not-found/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const routing = (
  <Provider store={store}>
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <NavDropdown title="List">
              <NavDropdown.Item href="/list/price">Price List</NavDropdown.Item>
              <NavDropdown.Item href="/list/inventory">Inventory List</NavDropdown.Item>
              <NavDropdown.Item href="/list/customer">Customer List</NavDropdown.Item>
              <NavDropdown.Item href="/list/supplier">Supplier List</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={"container"}>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/users" component={Users}/>
          <Route path="/list/price" component={ListPrice}/>
          <Route path="/list/inventory" component={ListInventory}/>
          <Route path="/list/customer" component={ListCustomer}/>
          <Route path="/list/supplier" component={ListSupplier}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("layout"));
