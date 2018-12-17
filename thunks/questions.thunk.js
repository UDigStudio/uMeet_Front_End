// @flow

import { getQuestions, saveQuestion, deleteQuestion } from '../utils/api';
import { 
  getQuestionsSuccessAction, getQuestionsFailureAction, getQuestionsLoadingAction,
  updateQuestionSuccessAction, updateQuestionFailureAction, updateQuestionLoadingAction,
  deleteQuestionSuccessAction, deleteQuestionFailureAction, deleteQuestionLoadingAction,
  createQuestionSuccessAction, createQuestionFailureAction, createQuestionLoadingAction
  
} from '../actions/questions.actions';
import type { Question } from '../types/question.type';

export const getQuestionsThunk = () => {
  return (dispatch: Function) => {

    dispatch(getQuestionsLoadingAction(true));

    getQuestions.then((questionsJSON) => {
      dispatch(getQuestionsSuccessAction(questionsJSON));
      dispatch(getQuestionsLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(getQuestionsFailureAction(error));
    });
  };
};

export const updateQuestionThunk = (question: Question) => {
  return (dispatch: Function) => {

    dispatch(updateQuestionLoadingAction(true));

    saveQuestion(question).then(() => {
      dispatch(updateQuestionSuccessAction(question));
      dispatch(updateQuestionLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(updateQuestionFailureAction(error));
    });
  };
};

export const deleteQuestionThunk = (id: string) => {
  return (dispatch: Function) => {

    dispatch(deleteQuestionLoadingAction(true));

    deleteQuestion(id).then(() => {
      dispatch(deleteQuestionSuccessAction(id));
      dispatch(deleteQuestionLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(deleteQuestionFailureAction(error));
    });
  }
};

export const createQuestionThunk = (newQuestion: Question) => {
  return (dispatch: Function) => {

    dispatch(createQuestionLoadingAction(true));

    saveQuestion(newQuestion).then((question) => {
      dispatch(createQuestionSuccessAction(question));
      dispatch(createQuestionLoadingAction(false));
    })
    .catch((error: Error) => {
      dispatch(createQuestionFailureAction(error));
    });
  }
};