import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
  constructor (props) {
    super(props);

    console.log(this.props)

    this.state = {
      user: { data: {} }
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.state = {
      user: nextProps.user
    };
  }

  onChange (el) {
    const user = Object.assign({}, this.state.user, { [el.target.name]: el.target.value });

    this.setState({
      user
    });
  }

  render() {
    const { onChange, onSubmit } = this.props;
    const { data } = this.state.user;

    return (
      <form onSubmit={onSubmit}>
        <h1>User Profile</h1>
        <TextField
          className="form__input__name"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={onChange}
        /><br />
        <TextField
          className="form__input__email"
          placeholder="E-mail"
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
        /><br />
        <TextField
          className="form__input__age"
          placeholder="Age"
          name="age"
          value={data.age}
          type="number"
          onChange={onChange}
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
