// @flow

import type { Questions } from '../types/question.type';

export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';

export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';

export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
export const DELETE_QUESTION_FAILURE = 'DELETE_QUESTION_FAILURE';

export const UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS';
export const UPDATE_QUESTION_FAILURE = 'UPDATE_QUESTION_FAILURE';

export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAILURE = 'CREATE_QUESTION_FAILURE';

export const QUESTIONS_LOADING = "QUESTIONS_LOADING";

export const getQuestionsSuccessAction = (questionsJSON: Questions) => {
  return {
    type: GET_QUESTIONS_SUCCESS,
    questionsJSON
  }
}

export const getQuestionsFailureAction = (error: Error) => {
  return {
    type: GET_QUESTIONS_FAILURE,
    error
  }
}

export const deleteQuestionSuccessAction = (id: string) => {
  return {
    type: DELETE_QUESTION_SUCCESS,
    id
  }
}

export const deleteQuestionFailureAction = (error: Error) => {
  return {
    type: DELETE_QUESTION_FAILURE,
    error
  }
}

export const updateQuestionSuccessAction = (question: Question) => {
  return {
    type: UPDATE_QUESTION_SUCCESS,
    question
  }
}

export const updateQuestionFailureAction = (error: Error) => {
  return {
    type: UPDATE_QUESTION_FAILURE,
    error
  }
}

export const createQuestionSuccessAction = (question: Question) => {
  return {
    type: CREATE_QUESTION_SUCCESS,
    question
  }
}

export const createQuestionFailureAction = (error: Error) => {
  return {
    type: CREATE_QUESTION_FAILURE,
    error
  }
}

export const questionsLoadingAction = (isLoading: boolean) => {
  return {
    type: QUESTIONS_LOADING,
    isLoading
  }
}

