import React, { Component } from 'react';
import SearchBar from './searchbar';
import ProductTable from './productTable'

class FilterableProductTable extends Component{
	render(){
		return(
			<div className="filterable-product-table">
				<SearchBar />
				<ProductTable data={this.props.data} />
			</div>
		)
	}
}

export default FilterableProductTable;
	