import React, { Component } from 'react';

import HomeTemplate from '../../templates/Home';

class Home extends Component {
  constructor () {
    super();

    this.onChange = this.onChange.bind(this);

    this.state = {
      user: {}
    }
  }

  onChange (el) {
    const user = Object.assign({}, this.state.user, { [el.target.name]: el.target.value });

    this.setState({
      user
    });
  }

  onSubmit () {

  }

  render () {
    return (
      <HomeTemplate {...this.state} {...this.props} />
    );
  }
}

export default Home;
