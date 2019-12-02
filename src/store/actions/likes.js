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

export const removeGifFromLikes = gif => ({
	type: REMOVE_GIF,
	gif
});