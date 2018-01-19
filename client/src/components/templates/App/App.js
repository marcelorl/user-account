import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import 'typeface-roboto';

import './App.css';

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <AppBar title="User Account" showMenuIconButton={false} style={{ 'padding-left': '274px' }} />
        <Drawer open>
          <MenuItem>User profile</MenuItem>
          <Divider light />
          <MenuItem>Address list</MenuItem>
          <Divider />
          <MenuItem>Order history</MenuItem>
          <Divider />
          <MenuItem>Wishlist</MenuItem>
          <Divider />
        </Drawer>
        <div className="content">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
