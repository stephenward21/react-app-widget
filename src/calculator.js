import React, { Component } from 'react';
import BoilingVerdict from './boilingVerdict';
import TemperatureInput from './temperatureInput'

function toCelcius(f){
  return (f - 32) * 5 / 9;
}
function toFahrenheit(c){
  return(c * 9 / 5) + 32;
}
function toKevlin(c){
  // ????
}

// Make another utility function that tries the conversion.
// If it can, it returns the conversion rounded.
// If it can't it returns an empty string
function tryConvert(value,tUnit){
  var tryNumber = Number(value);
  if(isNaN(tryNumber)){
    //this is !!!!NOT!!!! a valid number. What is your problem user?
    return '';
  }else{
    //this is a valid number (isNAN returned false) We can convert!
    if(tUnit == 'c'){
      var convertedNumber = toFahrenheit(tryNumber);
    }else{
      var convertedNumber = toCelcius(tryNumber);
    }
    return convertedNumber;
  }
}

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      value: 32,
      scale: 'c'
    }
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelciusChange(value) {
    this.setState({
      scale: 'c', 
      value: value
    })
  }

  handleFahrenheitChange(value) {
    this.setState({
      scale: 'f', 
      value: value
    })
  }

  handleKelvinChange(value) {
    this.setState({
      scale: 'k', 
      value: value
    })
  }

  render() {
    var scale = this.state.scale;
    var value = this.state.value;
    if(this.state.scale == 'c'){
      var fTemp = tryConvert(value,'c');
      var cTemp = value;
    }else if(this.state.scale == 'f'){
      var fTemp = value;
      var cTemp = tryConvert(value,'f');
    }else{
      var fTemp = value;
      var cTemp = tryConvert(value,'f');
    }

    return(
      <div>
        <TemperatureInput 
          tUnits="Celcius" 
          value={cTemp} 
          onChange={this.handleCelciusChange} 
        />
        <TemperatureInput 
          tUnits="Fahrenheit" 
          value={fTemp} 
          onChange={this.handleFahrenheitChange} /> 
        {/* <TemperatureInput tUnits="Kelvin" value={kTemp} onChange={this.handleKelvinChange} /> */ }
        <BoilingVerdict temperature={Number(cTemp)} tUnit="c" />
        <BoilingVerdict temperature={Number(fTemp)} tUnit="f" />
      </div>
    )
  }
}

export default Calculator;