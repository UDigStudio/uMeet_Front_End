// @flow
import { getQuestions, saveQuestion } from '../utils/api';
import { getQuestionsAction, activateQuestionAction } from '../actions/questions';
import { Question } from '../types/question.type';

//TODO: Create proper messaging

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

export const activateQuestionThunk = (question: Question) => {
  return (dispatch: Function) => {
    saveQuestion(question).then(() => {
      dispatch(activateQuestionAction(question));
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
  };
};