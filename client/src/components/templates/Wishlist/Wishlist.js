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

import './Wishlist.css';

const Wishlist = ({ deleteProduct, wishlist: { list } }) =>
  <div>
    <h1>Wishlist</h1>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
          <TableHeaderColumn>Purchase Date</TableHeaderColumn>
          <TableHeaderColumn></TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {list.map((item, index) =>
          <TableRow key={index}>
            <TableRowColumn><img src={`http://localhost:3000/${item.image}`} width="100px" alt="test" /></TableRowColumn>
            <TableRowColumn>{item.name}</TableRowColumn>
            <TableRowColumn>$ {item.price}</TableRowColumn>
            <TableRowColumn>{item.dateAdded}</TableRowColumn>
            <TableRowColumn>
              <i className="mi mi-delete mi-24" onClick={() => deleteProduct(item.id)} />
            </TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>;

Wishlist.propTypes = {
  wishlist: PropTypes.object,
};

export default Wishlist;
