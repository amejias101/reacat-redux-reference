import { combineReducers } from 'redux';
import moviesReducer from './movies';
import activeMovieReducer from './active_movie';

const rootReducer = combineReducers({
  movies: moviesReducer,
  activeMovie: activeMovieReducer
});

export default rootReducer;
