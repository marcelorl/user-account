import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          <AppBar title="User Account" showMenuIconButton={false} style={{ 'paddingLeft': '274px' }} />
          <Drawer open>
            <MenuItem>
              <Link to="/">
                User profile
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Link to="/address">
                Address list
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Link to="/order">
                Order history
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Link to="/wishlist">
                Wishlist
              </Link>
            </MenuItem>
            <Divider />
          </Drawer>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
