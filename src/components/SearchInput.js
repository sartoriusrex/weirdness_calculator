import React from 'react';

import { renderError } from '../formValidations/validateSearchInput';

const SearchInput = props => {
	const { name, input, label, meta } = props;

	return(
		<>
			<label htmlFor={ name } >{ label }</label>
			
			<input 
				autoComplete="off"
				type="text"
				placeholder="Search for GIFs"
				{ ...input }
			/>

			{ renderError( meta ) }
		</>
	)
}

export default SearchInput;