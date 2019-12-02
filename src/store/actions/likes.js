import { ADD_GIF, REMOVE_GIF } from './actionTypes';

export const addGifToLikes = gif => ({
	type: ADD_GIF,
	gif
});

export const likeGif = gif => dispatch => {
	return(
		dispatch( addGifToLikes( gif ) )
	)
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