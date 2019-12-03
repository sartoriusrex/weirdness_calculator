import React from 'react';
import { connect } from 'react-redux';

import { likeGif } from '../store/actions/likes';

const LikeButton = props => {
	const { searchResult, likes, likeGif } = props;

	function checkSearchTermDuplicates( candidate ) {
		const searchTerms = likes.map( gifs => gifs.searchTerm );
		return searchTerms.every( gif => gif !== candidate ); //Check that the candidate gif to like isn't searched using a term already liked
	}

	function handleLike(){
		if( checkSearchTermDuplicates( searchResult.searchTerm ) ) {
			return likeGif( searchResult );
		}
		alert( "You already liked a gif using that Search Term. Please search for a new Gif using another search term.");
	}

	function disableLikeButton(){
		// conditions to NOT display the Like button
		if( searchResult === "" || //Initial state is empty string
				searchResult.searchTerm === "" || //Search results return status 200, but without any gifs returned, searchResult.searchTerm is empty string.
				searchResult.searchTerm === "No Results Found" || //Cannot like a gif not found
				likes.length === 5 //Maximum number of liked gifs is 5
		) {
			return true
		}
		return false
	}

	return(
		
		<button 
			type="submit" 
			onClick={ handleLike }
			disabled={ disableLikeButton() }
		>Like</button>
	)
}

function mapStateToProps( state ) {
	return{
		searchResult: state.searchResult,
		likes: state.likes
	}
}

export default connect( mapStateToProps, { likeGif } )( LikeButton );