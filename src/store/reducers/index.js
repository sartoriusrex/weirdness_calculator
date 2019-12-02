import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import likes from './likesRed';
import searchResult from './searchRed';
import loading from './loadingRed';
import errors from './errorsRed';

const rootReducer = combineReducers({
	likes,
	searchResult,
	loading,
	errors,
	form: formReducer
});

export default rootReducer;