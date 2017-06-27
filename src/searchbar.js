import React, { Component } from 'react';
import ProductCategoryRow from './productcategoryrow';
import ProductRow from './productrow';

class SearchBar extends Component{
	render(){
		return(
			
			<form className="search-bar">
				<input type="text" placeholder="Search..." />
			</form>
		)
	}
}

export default SearchBar;