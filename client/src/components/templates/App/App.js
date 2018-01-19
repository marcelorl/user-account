import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import 'typeface-roboto';

import './App.css';

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar showMenuIconButton={false} />
          <Drawer open>
            <AppBar title="User Account" showMenuIconButton={false} />
            <MenuItem>
              <Link to="/">
                User profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/address">
                Address list
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/order">
                Order history
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/wishlist">
                Wishlist
              </Link>
            </MenuItem>
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
