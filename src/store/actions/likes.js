import { ADD_GIF, REMOVE_GIF, RESET_LIKES } from './actionTypes';

//actions
import { displaySearchResult } from './search';
import { reset } from 'redux-form';

export const addGifToLikes = gif => ({
	type: ADD_GIF,
	gif
});

export const likeGif = gif => dispatch => {
	dispatch( addGifToLikes( gif ) );
	dispatch( reset( 'searchGifs' )); //Reset form
	dispatch( displaySearchResult( '' )); //Reset search term to display, prompting user to search again
}

export const removeGifFromLikes = gifSrc => ({
	type: REMOVE_GIF,
	gifSrc
});

export const unlikeGif = gifSrc => dispatch => {
	return(
		dispatch( removeGifFromLikes( gifSrc ) )
	)
}

export const removeAllLikes = () => ({
	type: RESET_LIKES,
})

export const resetLikes = () => dispatch =>{
	return(
		dispatch( removeAllLikes() )
	)
}