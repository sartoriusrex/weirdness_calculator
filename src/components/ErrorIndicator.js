import React from 'react';

export default function ErrorIndicator( props ){
	const { error } = props;

	function displayError(){
		if( error === "Duplicate Gif" ){
			return "Sorry, you've already liked a GIF using that Search Term. Please search with a new term."
		} else if( error === "No Results" ){
			return error;
		}

		// Hide any other errors from the users and display generic message.
		return "Sorry, something went wrong. Please try your search again"
	}

	return(
	<h4 className="text-2xl text-red-700 mb-4">{ displayError() }</h4>
	)
}