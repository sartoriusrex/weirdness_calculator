import React from 'react';
import { connect } from 'react-redux';

// style
import './LikeButton.css';

// actions
import { likeGif } from '../store/actions/likes';
import { duplicateGifError } from '../store/actions/errors';

const LikeButton = props => {
	const { searchResult, likes, likeGif, duplicateGifError } = props;

	function checkSearchTermDuplicates( candidate ) {
		const searchTerms = likes.map( gifs => gifs.searchTerm );
		return searchTerms.every( gif => gif !== candidate ); //Check that the candidate gif to like isn't searched using a term already liked
	}

	function handleLike(){
		if( checkSearchTermDuplicates( searchResult.searchTerm ) ) {
			return likeGif( searchResult );
		}
		duplicateGifError( "Duplicate Gif" );
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
			className="like-button bg-green-800 text-white py-2 my-4 md:w-1/4 w-full"
		>Like</button>
	)
}

function mapStateToProps( state ) {
	return{
		searchResult: state.searchResult,
		likes: state.likes
	}
}

export default connect( mapStateToProps, { likeGif, duplicateGifError } )( LikeButton );