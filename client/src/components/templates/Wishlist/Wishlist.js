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

const Order = ({ wishlist }) =>
  <div>
    <h1>Wishlist</h1>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
          <TableHeaderColumn>Purchase Date</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {wishlist.list.map((item, index) =>
          <TableRow key={index}>
            <TableRowColumn><img src={`http://localhost:3000/${item.image}`} width="100px" alt="test" /></TableRowColumn>
            <TableRowColumn>{item.name}</TableRowColumn>
            <TableRowColumn>$ {item.price}</TableRowColumn>
            <TableRowColumn>{item.dateAdded}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>;

Order.propTypes = {
  wishlist: PropTypes.object,
};

export default Order;
