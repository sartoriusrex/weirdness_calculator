import { SEARCH } from './actionTypes';
import { addError } from "./errors";
import apiCall from '../../apiCall';

export const search = async ( query, weirdness ) => {
	try {
		let searchResults = await apiCall( query, weirdness );
		dispatch( displaySearchResult( searchResults ));
	} catch( error ) {
		dispatch( addError( error ));
	}
	
}

export const displaySearchResult = searchResult => ({
	type: SEARCH,
	searchResult
})