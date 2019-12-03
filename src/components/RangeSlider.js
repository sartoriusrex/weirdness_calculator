import React from 'react';

export default function RangeSlider( props ) {
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
				className="mb-2 px-2 h-8 w-full"
			/>
		</>
	)
}