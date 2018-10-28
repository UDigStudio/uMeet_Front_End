export const getGameState = store => store.game;

export const getGameReady = store =>
  getGameState(store) ? getGameState(store).gameReady : false;