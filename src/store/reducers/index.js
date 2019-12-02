import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import likes from './likesRed';
import searchResult from './searchRed';
import loading from './loadingRed';

const rootReducer = combineReducers({
	likes,
	searchResult,
	loading,
	form: formReducer
});

export default rootReducer;