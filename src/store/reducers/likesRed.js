import { ADD_GIF, REMOVE_GIF } from '../actions/actionTypes';

const likes = ( state = [], action ) => {
  switch( action.type ){
    case ADD_GIF:
			return [ ...state, action.gif ];
		case REMOVE_GIF:
      let oldLikes = [ ...state ]
      let newLikes = oldLikes.filter( gif => gif.gifSrc !== action.gifSrc );

			return newLikes
    default:
      return [ ...state];
  }
};

export default likes;