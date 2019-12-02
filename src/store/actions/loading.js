import { SET_LOADING } from "./actionTypes";

export const setLoading = loading => dispatch => {
  return dispatch( isLoading( loading ) )
}

export const isLoading = loading => ({
  type: SET_LOADING,
  loading
});