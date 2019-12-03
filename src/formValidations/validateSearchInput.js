import React from 'react';

export const validateSearchInput = formValues => {
	const errors = {};

	if( !formValues.query || formValues.query === "" ){
		errors.query = "Please enter a search term."
	}

	return errors;
}

export const renderError = ({ error, touched }) => {
	if( touched && error ){
		return(
			<p>{ error }</p>
		)
	}
}