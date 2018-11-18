// @flow

import { getQuestions, saveQuestion, deleteQuestion } from '../utils/api';
import { 
  getQuestionsSuccessAction, getQuestionsFailureAction,
  updateQuestionSuccessAction, updateQuestionFailureAction,
  deleteQuestionSuccessAction, deleteQuestionFailureAction,
  createQuestionSuccessAction, createQuestionFailureAction
} from '../actions/questions.action';
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

export const updateQuestionThunk = (question: Question) => {
  return (dispatch: Function) => {
    saveQuestion(question).then(() => {
      dispatch(updateQuestionSuccessAction(question));
    })
    .catch((error: Error) => {
      dispatch(updateQuestionFailureAction(error));
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

export const createQuestionThunk = (newQuestion: Question) => {
  return (dispatch: Function) => {
    saveQuestion(newQuestion).then((question) => {
      dispatch(createQuestionSuccessAction(question));
    })
    .catch((error: Error) => {
      dispatch(createQuestionFailureAction(error));
    });
  }
};