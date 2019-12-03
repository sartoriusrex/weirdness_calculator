import React from 'react';

import { renderError } from '../formValidations/validateSearchInput';

export default function SearchInput( props ) {
	const { name, input, label, meta } = props;

	return(
		<div className="my-2 flex flex-col w-full">
			<label
				htmlFor={ name }
				className="text-sm text-gray-600 mb-1 px-2"
			>{ label }</label>
			
			<input
				autoComplete="off"
				type="text"
				placeholder="Search for GIFs"
				className="p-2 bg-gray-300 flex-grow mb-2"
				{ ...input }
			/>

			{ renderError( meta ) }
		</div>
	)
}