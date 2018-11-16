import { combineReducers } from 'redux';
import questions from './questions.reducer';
import game from "./game";

export default combineReducers({
  game,
  questions
});