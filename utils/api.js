/*
  API for interacting with the data store
*/

//TODO: Switch to promise-based API

//Get all questions
const getQuestions = () => {
  return [{ id: '1', text: 'First question?', active: true }, { id: '2', text: 'Second question?', active: false }];
}

//Get a specific question by id

//Save a question

export { getQuestions }