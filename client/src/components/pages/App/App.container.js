import React, { Component } from 'react';

import AppTemplate from '../../templates/App';

class App extends Component {
  render () {
    return (
      <AppTemplate {...this.props} />
    );
  }
}

export default App;
