import { combineReducers } from 'redux';
import questionReducer from './questions.reducer';
import game from "./game";

export default combineReducers({
  game,
  questionReducer
});