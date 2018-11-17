/*
  API for interacting with the data store
*/

//Questions Model to be placed by AWS datastore
const questionsJSON = { questions: [{ id: '1', text: 'First question?', active: true }, { id: '2', text: 'Second question?', active: false }] };

export const getQuestions = new Promise((resolve, reject) => {
  resolve(questionsJSON);
});

export const saveQuestion = (updatedQuestion) => {
  return new Promise((resolve, reject) => {
    const index = questionsJSON.questions.findIndex(question => question.id === updatedQuestion.id);
    questionsJSON.questions[index] = updatedQuestion;
    resolve();
  });
};

export const deleteQuestion = (id) => {
  return new Promise((resolve, reject) => {
    questionsJSON.questions = questionsJSON.questions.filter( question => question.id !== id );
    resolve();
  });
};