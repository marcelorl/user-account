import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Home = ({ onChange, onSubmit, user }) =>
  <form onSubmit={onSubmit}>
    <h1>User Account</h1>
    <TextField
      className="form__input__name"
      placeholder="Name"
      name="name"
      value={user.name}
      onChange={onChange}
    /><br />
    <TextField
      className="form__input__email"
      placeholder="E-mail"
      name="email"
      type="email"
      value={user.email}
      onChange={onChange}
    /><br />
    <TextField
      className="form__input__age"
      placeholder="Age"
      name="age"
      value={user.age}
      type="number"
      onChange={onChange}
    /><br /><br />

    <RaisedButton className="form__btn-update" type="submit" label="Update" secondary={true} />
  </form>;

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
