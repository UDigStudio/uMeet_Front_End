// @flow

import { GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE, 
  DELETE_QUESTION_SUCCESS, DELETE_QUESTION_FAILURE,
  UPDATE_ACTIVATION_SUCCESS, UPDATE_ACTIVATION_FAILURE } from '../actions/questions.action';
import type { Question } from '../types/question.type';

//TODO: Modeling state with flow

export default questions = ( state = [], action ) => {
  switch(action.type) {
    case GET_QUESTIONS_SUCCESS:
      return [
        ...state,
        ...action.questions
      ]
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        area: action.area
      }
    case DELETE_QUESTION_SUCCESS:
      return state.filter( question => question.id !== action.id );
    case DELETE_QUESTION_FAILURE:
      return {
        ...state,
        error: action.error,
        area: action.area,
        id: action.id
      }
    case UPDATE_ACTIVATION_SUCCESS:
      return state.map((question) => {
        if (question.id !== action.question.id) {
          return question;
        }

        return {
          ...question,
          active: !action.question.active
        }
      })
    case UPDATE_ACTIVATION_FAILURE:
      return {
        ...state,
        error: action.error,
        area: action.area,
        question: action.question
      }
    default:
      return state;
  }
}