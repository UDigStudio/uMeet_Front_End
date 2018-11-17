// @flow
import { getQuestionsThunk, activateQuestionThunk, deleteQuestionThunk } from '../thunks/questions.thunk';
import type { Questions } from '../types/question.type';

export const getQuestions = () => {
  return getQuestionsThunk();
}

export const activateQuestion = (question: Questions) => {
  //Switch status
  question.active = !question.active;

  return activateQuestionThunk(question);
}

export const deleteQuestion = (id: string) => {
  return deleteQuestionThunk(id);
}