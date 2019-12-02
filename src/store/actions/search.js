import { SEARCH } from './actionTypes';
import { addError, removeError } from "./errors";
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
			
			if ( res.data.length === 0 ){
				data.searchTerm = "";
				data.weirdness = 0;
				data.title = "No Results Found";
				data.gifSrc = "";
				data.stillSrc = "";
			} else {
				data.searchTerm = searchTerm;
				data.weirdness = parseInt( weirdness );
				data.title = res.data.title;
				data.gifSrc = res.data.images.downsized_large.url;
				data.stillSrc = res.data.images.fixed_width_small_still.url;
			}

			dispatch( displaySearchResult( data ) );
			dispatch( removeError() );
			dispatch( setLoading( false ) );
		}).catch( e => {
			if( e === undefined ){
				e = "No gifs found"
			}
			dispatch( addError( e ))
			dispatch( setLoading( false ) );
		})
	)
}

export const displaySearchResult = searchResult => ({
	type: SEARCH,
	searchResult
})