// @flow
import { getQuestionsThunk } from '../thunks/questions.thunk';

export const getQuestions = () => {
  return getQuestionsThunk();
}