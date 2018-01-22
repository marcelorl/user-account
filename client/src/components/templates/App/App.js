import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import cx from 'bem-classnames';

import 'typeface-roboto';

import './App.css';

let classes = {
  name: 'content',
  states: ['marged']
};

class App extends Component {
  constructor () {
    super();

    this.state = {
      showMenu: true
    };

    this.onClickLeftButton = this.onClickLeftButton.bind(this);
  }

  onClickLeftButton () {
    const showMenu = this.state.showMenu;

    this.setState({
      showMenu: !showMenu
    });
  }

  renderAppBar () {
    return <AppBar title="User Account" onLeftIconButtonClick={this.onClickLeftButton} />;
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          {this.renderAppBar()}
          <Drawer open={this.state.showMenu}>
            {this.renderAppBar()}
            <MenuItem>
              <Link className="sidebar__item" to="/">
                User profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="sidebar__item" to="/address">
                Address list
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="sidebar__item" to="/order">
                Order history
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="sidebar__item" to="/wishlist">
                Wishlist
              </Link>
            </MenuItem>
          </Drawer>
          <div className={cx(classes, { marged: this.state.showMenu })}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
