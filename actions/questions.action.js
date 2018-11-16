// @flow

import Question from '../types/question.type';

export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';

export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
export const DELETE_QUESTION_FAILURE = 'DELETE_QUESTION_FAILURE';

export const UPDATE_ACTIVATION_SUCCESS = 'UPDATE_ACTIVATION_SUCCESS';
export const UPDATE_ACTIVATION_FAILURE = 'UPDATE_ACTIVATION_FAILURE';

export const getQuestionsSuccessAction = (questions: Array<Question>) => {
  return {
    type: GET_QUESTIONS_SUCCESS,
    questions
  }
}

export const getQuestionsFailureAction = (error: Error, area: string) => {
  return {
    type: GET_QUESTIONS_FAILURE,
    error,
    area
  }
}

export const deleteQuestionSuccessAction = (id: string) => {
  return {
    type: DELETE_QUESTION_SUCCESS,
    id
  }
}

export const deleteQuestionFailureAction = (error: Error, area: string, id: string) => {
  return {
    type: DELETE_QUESTION_FAILURE,
    error,
    area,
    id
  }
}

export const activateQuestionSuccessAction = (question: Question) => {
  return {
    type: UPDATE_ACTIVATION_SUCCESS,
    question
  }
}

export const activateQuestionFailureAction = (error: Error, area: string, question: Question) => {
  return {
    type: UPDATE_ACTIVATION_FAILURE,
    error,
    area,
    question
  }
}

