import { ADD_ERROR, REMOVE_ERROR } from "./actionTypes";

export const addError = error => ({
  type: ADD_ERROR,
  error
});

export const removeError = () => ({
  type: REMOVE_ERROR,
});

export const duplicateGifError = error => dispatch => {
  return dispatch( addError( error ) )
}