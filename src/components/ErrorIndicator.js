import React from 'react';

export default function ErrorIndicator( props ){
	const { error } = props;

	function displayError(){
		if( error === "Duplicate Gif" ){
			return "Sorry, you've already liked a GIF using that Search Term. Please search with a new term."
		}

		return "Sorry, something went wrong. Please try your search again"
	}

	return(
	<h4 className="text-xl text-red-700">{ displayError() }</h4>
	)
}