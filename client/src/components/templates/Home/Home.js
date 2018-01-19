import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: { data: {} }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      user: nextProps.user.data
    });
  }

  onChange (el) {

    const user = Object.assign({}, this.state.user, { [el.target.name]: el.target.value });

    this.setState({
      user
    });
  }

  onSubmit (el) {
    el.preventDefault();

    this.props.updateUser(this.state.user);
  }

  render() {
    const { user } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>User Profile</h1>
        <TextField
          className="form__input__name"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={this.onChange}
        /><br />
        <TextField
          className="form__input__email"
          placeholder="E-mail"
          name="email"
          type="email"
          value={user.email}
          onChange={this.onChange}
        /><br />
        <TextField
          className="form__input__age"
          placeholder="Age"
          name="age"
          value={user.age}
          type="number"
          onChange={this.onChange}
        /><br /><br />

        <RaisedButton className="form__btn-update" type="submit" label="Update" secondary={true}/>
      </form>
    );
  }
}

Home.defaultProps = {
  user: {}
};

Home.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number
  }),
};

export default Home;
