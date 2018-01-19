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
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      user: nextProps.user
    });
  }

  onChange (el) {

    const user = Object.assign({}, this.state.user, { data: { [el.target.name]: el.target.value } });

    this.setState({
      user
    });
  }

  render() {
    const { onSubmit } = this.props;
    const { data } = this.state.user;

    return (
      <form onSubmit={onSubmit}>
        <h1>User Profile</h1>
        <TextField
          className="form__input__name"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={this.onChange}
        /><br />
        <TextField
          className="form__input__email"
          placeholder="E-mail"
          name="email"
          type="email"
          value={data.email}
          onChange={this.onChange}
        /><br />
        <TextField
          className="form__input__age"
          placeholder="Age"
          name="age"
          value={data.age}
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
