import React, { Component } from 'react';
import data from './product-data';
import './App.css';
import FilterableProductTable from './FilterableProductTable';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(data.data[0].category);
		return (
			<div className="App">
				<FilterableProductTable data={this.props.data} />
			</div>
		
		)
	}
}

export default App;
