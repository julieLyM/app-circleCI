import React, { Component } from 'react';
import { sumSrv } from './service/data';

export default class Sum extends Component {
  state = {
    num1: null,
    num2: null,
    total: '',
  };

  getNumber = (bind, { target: { value } }) => {
    this.setState({
      [bind]: value,
    });
  };

  addSum = async () => {
    const { num1, num2 } = this.state;
    const total = await sumSrv(num1, num2);
    this.setState({ total });
  };

  render() {
    return (
      <div>
        <input type="number" onChange={this.getNumber.bind(null, 'num1')} />
        <input type="number" onChange={this.getNumber.bind(null, 'num2')} />
        <button onClick={this.addSum}>submit</button>
        <p>{this.state.total}</p>
      </div>
    );
  }
}
