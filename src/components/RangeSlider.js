import React from 'react';

const RangeSlider = props => {
	const { value, onChange } = props.input;
	return(
		<>
			<input 
				name="weirdness"
				type="range" 
				min="0"
				max="10"
				value={ value }
				onChange={ onChange }
			/>
		</>
	)
}

export default RangeSlider;