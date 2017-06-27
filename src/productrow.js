import React, { Component } from 'react';

class ProductRow extends Component{
	render(){			
		if(this.props.randomThing.inStock === true){
			var productClass = "text-success"
		}else{
			var productClass = "text-danger"
		}
		return(
			<tr>
				<td className={productClass}>{this.props.randomThing.name}</td>
				<td>{this.props.randomThing.price}</td>
			</tr>
		)
	}
}

export default ProductRow;