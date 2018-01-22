import React, { Component } from 'react';
import get from 'lodash.get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAddress, updateAddress } from '../../../actions/address';

import AddressTemplate from '../../templates/Address';

class Address extends Component {
  async componentDidMount () {
    const { fetchAddress } = this.props;

    await fetchAddress();
  }

  render () {
    return (
      <AddressTemplate {...this.props} />
    );
  }
}

const mapStateToProps = state =>
  (Object.assign({
    address: get(state, 'address.data', [])
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAddress,
  updateAddress
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Address);
