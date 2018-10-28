import { combineReducers } from 'redux';
import questions from './questions';
import game from "./game";

export default combineReducers({
  game,
  questions
});