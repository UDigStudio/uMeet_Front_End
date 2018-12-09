// @flow

import { getQuestions, saveQuestion, deleteQuestion } from '../utils/api';
import { 
  getQuestionsSuccessAction, getQuestionsFailureAction,
  updateQuestionSuccessAction, updateQuestionFailureAction,
  deleteQuestionSuccessAction, deleteQuestionFailureAction,
  createQuestionSuccessAction, createQuestionFailureAction,
  questionsLoadingAction
} from '../actions/questions.actions';
import type { Question } from '../types/question.type';

export const getQuestionsThunk = () => {
  return (dispatch: Function) => {

    dispatch(questionsLoadingAction(true));

    getQuestions.then((questionsJSON) => {
      dispatch(getQuestionsSuccessAction(questionsJSON));
      dispatch(questionsLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(getQuestionsFailureAction(error));
    });
  };
};

export const updateQuestionThunk = (question: Question) => {
  return (dispatch: Function) => {

    dispatch(questionsLoadingAction(true));

    saveQuestion(question).then(() => {
      dispatch(updateQuestionSuccessAction(question));
      dispatch(questionsLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(updateQuestionFailureAction(error));
    });
  };
};

export const deleteQuestionThunk = (id: string) => {
  return (dispatch: Function) => {

    dispatch(questionsLoadingAction(true));

    deleteQuestion(id).then(() => {
      dispatch(deleteQuestionSuccessAction(id));
      dispatch(questionsLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(deleteQuestionFailureAction(error));
    });
  }
};

export const createQuestionThunk = (newQuestion: Question) => {
  return (dispatch: Function) => {

    dispatch(questionsLoadingAction(true));

    saveQuestion(newQuestion).then((question) => {
      dispatch(createQuestionSuccessAction(question));
      dispatch(questionsLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(createQuestionFailureAction(error));
    });
  }
};