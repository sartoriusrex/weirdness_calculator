import { SEARCH } from '../actions/actionTypes';

const searchResult = ( state = "", action ) => {
	switch( action.type ){
		case SEARCH:
			return action.searchResult
		default:
			return state;
	}
}

export default searchResult;