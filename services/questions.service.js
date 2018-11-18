// @flow
import { updateQuestionThunk, getQuestionsThunk, deleteQuestionThunk, createQuestionThunk } from '../thunks/questions.thunk';
import type { Questions } from '../types/question.type';

export const getQuestions = () => {
  return getQuestionsThunk();
}

export const activateQuestion = (question: Question) => {
  //Switch status
  question.active = !question.active;

  return updateQuestionThunk(question);
}

export const createQuestion = (questionText: string, navigation) => {
  //Go to the question list
  navigation.navigate('Home');

  //New question
  const newQuestion = { text: questionText, active: false };

  return createQuestionThunk(newQuestion);
}

export const deleteQuestion = (id: string) => {
  return deleteQuestionThunk(id);
}