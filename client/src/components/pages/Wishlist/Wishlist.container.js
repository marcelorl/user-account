import React, { Component } from 'react';
import get from 'lodash.get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWishlist } from '../../../actions/wishlist';
import WishlistTemplate from '../../templates/Wishlist';

class Wishlist extends Component {
  async componentDidMount () {
    const { fetchWishlist } = this.props;

    await fetchWishlist();
  }

  render () {
    return (
      <WishlistTemplate {...this.props} />
    );
  }
}

const mapStateToProps = state =>
  (Object.assign({
    wishlist: get(state, 'wishlist', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWishlist
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
