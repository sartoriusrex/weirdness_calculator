import React from 'react';

export default function RangeSlider( props ) {
	const { value, onChange } = props.input;
	const { name, input, label } = props;
	return(
		<div className="my-2 flex flex-col w-full">
			<label 
				htmlFor={ name } 
				className="text-sm text-gray-600 px-2 mb-1 w-full"
			>{ label }</label>
			<input 
				name="weirdness"
				type="range" 
				min="0"
				max="10"
				value={ value }
				onChange={ onChange }
				className="mb-2 px-2 h-8 w-full"
				{ ...input }
			/>
		</div>
	)
}