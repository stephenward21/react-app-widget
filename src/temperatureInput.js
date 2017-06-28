import React, { Component } from 'react';
import BoilingVerdict from './boilingVerdict'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {temperature: ''};
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    var value = this.props.value;
    var tUnits = this.props.tUnits;
    return(
      <div>
        <label>Enter temperature in question in {tUnits}</label>
        <input 
          placeholder="Temp" 
          value={value} 
          onChange={this.handleChange} />     
      </div>
    )
  }
}

export default TemperatureInput;