// @flow

import { getQuestions, saveQuestion, deleteQuestion } from '../utils/api';
import { getQuestionsSuccessAction, getQuestionsFailureAction, GET_QUESTIONS_FAILURE,
  activateQuestionSuccessAction, activateQuestionFailureAction, UPDATE_ACTIVATION_FAILURE,
  deleteQuestionSuccessAction, deleteQuestionFailureAction, DELETE_QUESTION_FAILURE } from '../actions/questions.action';
import type { Question } from '../types/question.type';

export const getQuestionsThunk = () => {
  return (dispatch: Function) => {
    getQuestions.then((questionsJSON) => {
      dispatch(getQuestionsSuccessAction(questionsJSON));
    })
    .catch((error: Error) => {
      dispatch(getQuestionsFailureAction(error));
    });
  };
};

export const activateQuestionThunk = (question: Question) => {
  return (dispatch: Function) => {
    saveQuestion(question).then(() => {
      dispatch(activateQuestionSuccessAction(question));
    })
    .catch((error: Error) => {
      dispatch(activateQuestionFailureAction(error));
    });
  };
};

export const deleteQuestionThunk = (id: string) => {
  return (dispatch: Function) => {
    deleteQuestion(id).then(() => {
      dispatch(deleteQuestionSuccessAction(id));
    })
    .catch((error: Error) => {
      dispatch(deleteQuestionFailureAction(error));
    });
  }
};