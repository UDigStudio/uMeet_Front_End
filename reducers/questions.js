import { RECEIVE_QUESTIONS, DELETE_QUESTION, UPDATE_ACTIVATION } from '../actions/questions';

export default questions = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return [
        ...state,
        ...action.questions
      ]
    case DELETE_QUESTION:
      return state.filter( question => question.id !== action.id );
    case UPDATE_ACTIVATION:
      return state.map((question) => {
        if (question.id !== action.question.id) {
          return question;
        }

        return {
          ...question,
          active: !action.question.active
        }
      })
    default:
      return state;
  }
}