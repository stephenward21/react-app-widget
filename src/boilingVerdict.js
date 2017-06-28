import React from 'react';

function BoilingVerdict(props){
	if(
		((props.temperature >= 100) && (props.tUnit == 'c'))
	|| ((props.temperature >= 212)  && (props.tUnit == 'f'))){
		return(
			<p>The water would boil at {props.temperature} {props.tUnit}</p>
		)
	}else{
		return(
			<p>The water would NOT boil at {props.temperature} {props.tUnit}</p>
		)		
	}
}


export default BoilingVerdict;