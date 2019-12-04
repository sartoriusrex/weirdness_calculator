import React from 'react';
import { connect } from 'react-redux';

const ProgressIndicator = props => {
	const { likes } = props;

	//If the length of the likes list is not 5, then show user how many more gifs they need to like. Otherwise show them the link to calculate their results and navigate them to results page 

	function renderMessage( likes ){
		if( likes.length !== 5 ) {
			return(
				`Like ${ 5 - likes.length } more GIFs to calculate your Weirdness.`
			)
		}
		return(
			"Go Forth and Be Weird!"
		)
	}
	return(
		<p 
			className="text-center text-2xl mb-4"
		>{ renderMessage( likes ) }</p>
	)
}

function mapStateToProps( state ){
	return({
		likes: state.likes
	})
}

export default connect( mapStateToProps, {} )( ProgressIndicator );