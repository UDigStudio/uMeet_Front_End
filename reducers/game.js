// Controls the state of a game.

import { GAME_READY, WAIT_FOR_GAME } from "../actions/game";

const initialState = {
  gameReady: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GAME_READY: {
      return {
        ...state,
        gameReady: true
      };
    }
    case WAIT_FOR_GAME: {
      return {
        ...state,
        gameReady: false
      };
    }
    default:
      return state;
  }
}
