import { GET_QUESTIONS, DELETE_QUESTION, UPDATE_ACTIVATION } from '../actions/questions';
import type { Question } from '../types/question.type';

/*
* TODO:
* 2. Add in GET_QUESTIONS_SUCCESS and GET_QUESTIONS_FAILURE
* 3. Add in ISQUESTIONLOADING in the store
* 4. Error message in redux store
*/

export default questions = (state: Array<Question> = [], action: Array<Question> | string | Question) => {
  switch(action.type) {
    case GET_QUESTIONS:
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