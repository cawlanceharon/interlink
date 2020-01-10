import React from 'react'
import { Card, CardDeck } from 'react-bootstrap';

const DashboardView = ({dashboard}) => {
  return (
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>Delivery</Card.Title>
          <Card.Text>
            Today: {dashboard.delivery.today} <br/>
            Yesterday: {dashboard.delivery.yesterday} <br/>
            This Month: {dashboard.delivery.this_month}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Total: {dashboard.delivery.total}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Items</Card.Title>
          <Card.Text>
            Today: {dashboard.items.today} <br/>
            Yesterday: {dashboard.items.yesterday} <br/>
            This Month: {dashboard.items.this_month}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Total: {dashboard.items.total}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Sales</Card.Title>
          <Card.Text>
            Today: {dashboard.sales.today} <br/>
            Yesterday: {dashboard.sales.yesterday} <br/>
            This Month: {dashboard.sales.this_month}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Total: {dashboard.sales.total}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Cancelled Reports</Card.Title>
          <Card.Text>
            Today: {dashboard.cancelled_reports.today} <br/>
            Yesterday: {dashboard.cancelled_reports.yesterday} <br/>
            This Month: {dashboard.cancelled_reports.this_month}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Total: {dashboard.cancelled_reports.total}</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  )
};

export default DashboardView