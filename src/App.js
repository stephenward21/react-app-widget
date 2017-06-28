import React, { Component } from 'react';
import data from './product-data';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import Calculator from './calculator'
import TemperatureInput from './temperatureInput'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Calculator />
		)

	
		// console.log(data.data[0].category);
		return (
			<div className="App">
				<FilterableProductTable data={this.props.data} />
			</div>
		
		)
	}
}

export default App;
