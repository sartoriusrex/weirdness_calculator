import { SEARCH } from './actionTypes';

// other actions
import { addError, removeError } from "./errors";
import { setLoading } from './loading';
import { reset } from 'redux-form'; //from redux-form - resets forms

// service: makes an api call
import apiCall from '../../apiCall';

const KEY = process.env.REACT_APP_GIPHY;

export const search = ( searchTerm, weirdness ) => dispatch => {
	return(
		apiCall(
			"get",
			`https://api.giphy.com/v1/gifs/translate?s=${searchTerm}&weirdness=${weirdness}&api_key=${KEY}`,
		).then( res => {
			let data = {}
			
			// Search results can have status 200 but return without data, meaning no results.
			if ( res.data.length === 0 ){
				dispatch( addError("No Results") )
			} else {
				data.searchTerm = searchTerm;
				data.weirdness = parseInt( weirdness );
				// Sometimes we get incomplete data back, such as a missing title. We indicate so here
				data.title = res.data.title === "" ? "No Title" : res.data.title ;
				data.gifSrc = res.data.images.fixed_height.url;
				data.stillSrc = res.data.images.fixed_height_small_still.url;

				dispatch( displaySearchResult( data ) );

				// If there were errors previously from other searchs, remove them
				dispatch( removeError() );
			}

			dispatch( setLoading( false ) );

		}).catch( e => {
			// Interestingly, could not produce many errors, although undefined was sometimes present. If that's the case, then we reassing it and pass it off to the UI
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

export const resetSearch = () => dispatch => {
	dispatch( reset( 'searchGifs' )); //Reset Redux-Form
	dispatch( displaySearchResult( "" ) );
}