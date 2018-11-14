// @flow
import { getQuestions } from '../utils/api';
import { getQuestionsAction } from '../actions/questions'; 

export const getQuestionsThunk = () => {
  return (dispatch: Function) => {
    getQuestions.then((questions) => {
      dispatch(getQuestionsAction(questions));
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
  };
};