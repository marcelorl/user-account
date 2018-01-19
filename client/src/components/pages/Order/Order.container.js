import React, { Component } from 'react';
import get from 'lodash.get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchOrder } from '../../../actions/order';
import OrderTemplate from '../../templates/Order';

class Order extends Component {
  async componentDidMount () {
    const { fetchOrder } = this.props;

    await fetchOrder();
  }

  render () {
    return (
      <OrderTemplate {...this.props} />
    );
  }
}

const mapStateToProps = state =>
  (Object.assign({
    order: get(state, 'order', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchOrder
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Order);
