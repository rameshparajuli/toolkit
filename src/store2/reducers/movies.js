import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
  error: "",
};

export const updateMoviesAction = createAction("movieUpdate");
/**
 * same as doing this
 * exprot const updateACtion = function(value) {
 *  return {
 *   type: 'UPDATE ,
 *   payload
 * }
 * }
 */

// internally uses immer.js to manage immutability
const moviesReducer = createReducer(initialState, function (builder) {
  builder.addCase(updateMoviesAction, function (state, action) {
    state.movies = action.payload;
  });
});
export default moviesReducer;
