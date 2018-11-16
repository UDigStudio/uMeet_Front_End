// @flow
import { getQuestionsThunk, activateQuestionThunk } from '../thunks/questions.thunk';

export const getQuestions = () => {
  return getQuestionsThunk();
}

export const activateQuestion = (question) => {
  return activateQuestionThunk(question);
}