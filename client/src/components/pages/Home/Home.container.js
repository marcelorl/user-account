import React, { Component } from 'react';
import get from 'lodash.get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUser } from '../../../actions/user';

import HomeTemplate from '../../templates/Home';

class Home extends Component {
  async componentDidMount () {
    const { fetchUser } = this.props;

    await fetchUser();
  }

  onSubmit () {

  }

  render () {
    return (
      <HomeTemplate {...this.props} />
    );
  }
}

const mapStateToProps = state =>
  (Object.assign({
    user: get(state, 'user', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
