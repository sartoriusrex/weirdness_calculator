import { ADD_GIF, REMOVE_GIF } from '../actions/actionTypes';

const likes = ( state = [], action ) => {
  switch( action.type ){
    case ADD_GIF:
			return [ ...state, action.gif ];
		case REMOVE_GIF:
			return [ state.filter( state => state !== action.gif ) ]
    default:
      return [ ...state];
  }
};

export default likes;