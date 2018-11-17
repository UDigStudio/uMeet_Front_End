// @flow

import { GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE, 
  DELETE_QUESTION_SUCCESS, DELETE_QUESTION_FAILURE,
  UPDATE_ACTIVATION_SUCCESS, UPDATE_ACTIVATION_FAILURE } from '../actions/questions.action';

export default questionReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questionsJSON.questions
      }
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        questions: state.questions.filter((question) => {
          if (question.id !== action.id) {
            return question;
          }
        })
      }
    case DELETE_QUESTION_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case UPDATE_ACTIVATION_SUCCESS:
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (question.id === action.question.id) {
            question.active = action.question.active;
          }

          return question;
        })
      }
    case UPDATE_ACTIVATION_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}