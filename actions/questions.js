import { getQuestions, deleteQuestionById, saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const UPDATE_ACTIVATION = 'UPDATE_ACTIVATION';

const handleGetQuestions = () => {
  return (dispatch) => {
    dispatch(receiveQuestions(getQuestions()));
  }
}

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

const handleDeleteQuestion = (id) => {
  return (dispatch) => {
    dispatch(deleteQuestion(deleteQuestionById(id)))
  }
}

const deleteQuestion = (id) => {
  return {
    type: DELETE_QUESTION,
    id
  }
}

const handleUpdateActivation = (question) => {
  return (dispatch) => {
    saveQuestion(question);
    dispatch(updateActivation(question));
  }
}

const updateActivation = (question) => {
  return {
    type: UPDATE_ACTIVATION,
    question
  }
}

export { handleGetQuestions, handleDeleteQuestion, handleUpdateActivation }

