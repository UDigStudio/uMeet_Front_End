import { getQuestions } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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

export { handleGetQuestions }

