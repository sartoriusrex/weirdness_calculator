import { SEARCH } from './actionTypes';
import { addError } from "./errors";
import { setLoading } from './loading';
import apiCall from '../../apiCall';

const KEY = process.env.REACT_APP_GIPHY;

export const search = ( searchTerm, weirdness ) => dispatch => {
	return(
		apiCall(
			"get",
			`https://api.giphy.com/v1/gifs/translate?s=${searchTerm}&weirdness=${weirdness}&api_key=${KEY}`,
		).then( res => {
			let data = {}
			data.searchTerm = searchTerm;
			data.weirdness = parseInt( weirdness );
			data.title = res.data.title;
			data.gifSrc = res.data.images.downsized_large.url;

			dispatch( displaySearchResult( data ) );
			dispatch( setLoading( false ) );
		}).catch( e => {
			console.log(e.msg)
			dispatch( addError( e.msg ))
			dispatch( setLoading( false ) );
		})
	)
}

export const displaySearchResult = searchResult => ({
	type: SEARCH,
	searchResult
})