import React from 'react';

export const validateSearchInput = formValues => {
	const errors = {};

	// If the query is empty or users do not type anything in it before attempting to search, creator error message
	if( !formValues.query || formValues.query === "" ){
		errors.query = "Please enter a search term."
	}

	return errors;
}

// Redux-form will give us an object with meta fields error and touched if the field produces an error as defined in the form validation function and if the field has been touched

// If the field has been touched and there is an error, we will render the error
export const renderError = ({ error, touched }) => {
	if( touched && error ){
		return(
			<p
				className="mx-2 text-red-700"
			>{ error }</p>
		)
	}
}