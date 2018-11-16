// @flow
import { getQuestionsThunk, activateQuestionThunk, deleteQuestionThunk } from '../thunks/questions.thunk';

export const getQuestions = () => {
  return getQuestionsThunk();
}

export const activateQuestion = (question) => {
  return activateQuestionThunk(question);
}

export const deleteQuestion = (id) => {
  return deleteQuestionThunk(id);
}