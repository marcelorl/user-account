import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Order = ({ order }) =>
  <div>
    <h1>Order history</h1>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Purchase Date</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {order.list.map((item, index) =>
          <TableRow index={index}>
            <TableRowColumn><img src={`http://localhost:3000/${item.image}`} width="100px" /></TableRowColumn>
            <TableRowColumn>{item.name}</TableRowColumn>
            <TableRowColumn>{item.description}</TableRowColumn>
            <TableRowColumn>{item.purchaseDate}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>;

Order.propTypes = {
  order: PropTypes.array,
};

export default Order;
