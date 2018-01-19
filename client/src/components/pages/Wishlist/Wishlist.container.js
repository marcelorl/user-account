import React, { Component } from 'react';
import get from 'lodash.get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteProduct, fetchWishlist } from '../../../actions/wishlist';
import WishlistTemplate from '../../templates/Wishlist';

class Wishlist extends Component {
  constructor () {
    super();

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  async componentDidMount () {
    const { fetchWishlist } = this.props;

    await fetchWishlist();
  }

  async deleteProduct (id) {
    await this.props.deleteProduct(id);

    await this.props.fetchWishlist();
  }

  render () {
    return (
      <WishlistTemplate wishlist={this.props.wishlist} deleteProduct={this.deleteProduct} />
    );
  }
}

const mapStateToProps = state =>
  (Object.assign({
    wishlist: get(state, 'wishlist', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteProduct,
  fetchWishlist
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
