// @flow

//WIP: Do not code review yet

import { getUsers } from '../utils/api';

export const getUsersThunk = () => {
  return return (dispatch: Function) => {
    getUsers.then((usersJSON) => {
      dispatch()
    })
    .catch((error: Error) => {

    })
  }
}