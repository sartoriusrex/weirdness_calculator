import { ADD_GIF, REMOVE_GIF } from './actionTypes';

export const addGif = gif => ({
	type: ADD_GIF,
	gif
});

export const removeGif = gif => ({
	type: REMOVE_GIF,
	gif
});