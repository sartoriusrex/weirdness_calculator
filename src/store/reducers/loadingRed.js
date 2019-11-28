import { SET_LOADING } from "../actions/actionTypes";

export default (state = { loading: false }, action ) => {
  switch( action.type ) {
    case SET_LOADING:
			return { ...state, loading: !!state.loading }
    default:
      return state;
  }
}