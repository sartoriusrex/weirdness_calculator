import React from 'react';
import { connect } from 'react-redux';

import { likeGif } from '../store/actions/likes';

const LikeButton = props => {
	const { searchResult, likeGif } = props;

	function handleLike(){
		likeGif( searchResult );
	}

	return(
		<button type="submit" onClick={ handleLike }>Like</button>
	)
}

function mapStateToProps( state ) {
	return{
		searchResult: state.searchResult
	}
}

export default connect( mapStateToProps, { likeGif } )( LikeButton );