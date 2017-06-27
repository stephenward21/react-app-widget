import React, { Component } from 'react';
import ProductCategoryRow from './productcategoryrow';
import ProductRow from './productrow';

class ProductTable extends Component{
	render(){
		var rows = [];
		var lastCategory = "";
		var key = 0;
		// console.log(this.props.products)
		this.props.data.data.map(function(product, index){
			if(product.category !== lastCategory){
				rows.push(<ProductCategoryRow key={key} category={product.category} />)
				lastCategory = product.category;
				key++;
			}
			rows.push(<ProductRow key={key} randomThing={product} />)
			key++;
		});
		// console.log(rows);

		return(
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

export default ProductTable;