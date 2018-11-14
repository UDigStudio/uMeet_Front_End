/*
  API for interacting with the data store
*/

//TODO: Switch to promise-based API
//TODO: Also, this is a fake datastore that will disappear once we get AWS up and running

//Questions Model
const questions = [{ id: '1', text: 'First question?', active: true }, { id: '2', text: 'Second question?', active: false }];

//Get all questions
const getQuestions = new Promise((resolve, reject) => {
  resolve(questions);
});

//Get a specific question by id

//Save a question
const saveQuestion = (updatedQuestion) => {
  const index = questions.findIndex(question => question.id === updatedQuestion.id);
  questions[index] = updatedQuestion;
}

//Delete a question by id
const deleteQuestionById = (id) => {
  questions = questions.filter( question => question.id !== id );
  return id;
}

export { getQuestions, deleteQuestionById, saveQuestion }