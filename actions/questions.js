export const GET_QUESTIONS = 'GET_QUESTIONS';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const UPDATE_ACTIVATION = 'UPDATE_ACTIVATION';

export const getQuestionsAction = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const deleteQuestionAction = (id) => {
  return {
    type: DELETE_QUESTION,
    id
  }
}

export const activateQuestionAction = (question) => {
  return {
    type: UPDATE_ACTIVATION,
    question
  }
}

