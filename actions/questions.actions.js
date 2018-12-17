// @flow

import type { Questions } from '../types/question.type';

export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';
export const GET_QUESTIONS_LOADING = "GET_QUESTIONS_LOADING";

export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
export const DELETE_QUESTION_FAILURE = 'DELETE_QUESTION_FAILURE';
export const DELETE_QUESTION_LOADING = 'DELETE_QUESTION_LOADING';

export const UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS';
export const UPDATE_QUESTION_FAILURE = 'UPDATE_QUESTION_FAILURE';
export const UPDATE_QUESTION_LOADING = 'UPDATE_QUESTION_LOADING';

export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAILURE = 'CREATE_QUESTION_FAILURE';
export const CREATE_QUESTION_LOADING = 'CREATE_QUESTION_LOADING';

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

export const getQuestionsLoadingAction = (getQuestionsLoading: boolean) => {
  return {
    type: GET_QUESTIONS_LOADING,
    getQuestionsLoading
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

export const deleteQuestionLoadingAction = (deleteQuestionLoading: boolean) => {
  return {
    type: DELETE_QUESTION_LOADING,
    deleteQuestionLoading
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

export const updateQuestionLoadingAction = (updateQuestionLoading: boolean) => {
  return {
    type: UPDATE_QUESTION_LOADING,
    updateQuestionLoading
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

export const createQuestionLoadingAction = (createQuestionLoading: boolean) => {
  return {
    type: CREATE_QUESTION_LOADING,
    createQuestionLoading
  }
}