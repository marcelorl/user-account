import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

class Address extends Component {
  constructor (props) {
    super(props);

    this.state = {
      address: []
    };

    this.onAddAddress = this.onAddAddress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      address: nextProps.address
    });
  }

  onAddAddress () {
    const address = this.state.address;

    address.push({});

    this.setState({
      address
    })
  }

  onChange (el) {
    const address = Object.assign({}, this.state.address, { [el.target.name]: el.target.value });

    this.setState({
      address
    });
  }

  onSubmit (el) {
    el.preventDefault();

    this.props.updateAddress(this.state.address);
  }

  render() {
    const { address = [] } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>User's Address list</h1>
        {address.map((item, index) =>
          <div key={index}>
            <TextField
              className="form__input__street"
              placeholder="Street"
              name="street"
              value={item.street}
              onChange={this.onChange}
            /><br/>
            <TextField
              className="form__input__number"
              placeholder="Number"
              name="number"
              value={item.number}
              onChange={this.onChange}
            /><br/>
            <TextField
              className="form__input__city"
              placeholder="City"
              name="city"
              value={item.city}
              onChange={this.onChange}
            /><br/>
            <TextField
              className="form__input__country"
              placeholder="Country"
              name="country"
              value={item.country}
              onChange={this.onChange}
            /><br/>
            <Divider />
            <br/>
          </div>
        )}
        <div>
          <RaisedButton onClick={this.onAddAddress} className="form__btn-update" type="button" label="+" primary={true}/>
        </div>

        <br/>

        <RaisedButton className="form__btn-update" type="submit" label="Update" secondary={true}/>
      </form>
    );
  }
}

export default Address;
