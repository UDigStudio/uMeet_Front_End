// @flow
import { getQuestions, saveQuestion, deleteQuestion } from '../utils/api';
import { getQuestionsAction, activateQuestionAction, deleteQuestionAction } from '../actions/questions';
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

export const deleteQuestionThunk = (id: string) => {
  return (dispatch: Function) => {
    deleteQuestion(id).then(() => {
      dispatch(deleteQuestionAction(id));
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
  }
};