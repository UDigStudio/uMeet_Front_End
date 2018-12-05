/*
  API for interacting with the data store
*/

//NOTE: This is just to mimick the AWS REST datastore for the time being

const questionsJSON = { questions: [{ id: '1', text: 'First question?', active: true }, { id: '2', text: 'Second question?', active: false }] };
const usersJSON = { users: [{ id: '1', email: 'test@user.com', username: 'test' }] };

export const getQuestions = new Promise((resolve, reject) => {
  resolve(questionsJSON);
});

export const saveQuestion = (newQuestion) => {
  return new Promise((resolve, reject) => {
    //If the question has an empty id, add it
    if (!newQuestion.id) {
      const highestId = questionsJSON.questions.reduce((currentValue, question) => ( (Number.parseInt(question.id) > Number.parseInt(highestId)) ? question.id : highestId ), '1');

      newQuestion.id = (Number.parseInt(highestId) + 1).toString();
      questionsJSON.questions.push(newQuestion);
    } 
    //Update the question
    else {
      const index = questionsJSON.questions.findIndex(question => question.id === newQuestion.id);
      questionsJSON.questions[index] = newQuestion;
    }

    //Send the new question back
    resolve(newQuestion);
  });
};

export const deleteQuestion = (id) => {
  return new Promise((resolve, reject) => {
    questionsJSON.questions = questionsJSON.questions.filter( question => question.id !== id );
    resolve();
  });
};

export const getUsers = new Promise((resolve, reject) => {
  resolve(usersJSON);
});