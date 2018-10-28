export const GAME_READY = 'GAME_READY';
export const WAIT_FOR_GAME = 'WAIT_FOR_GAME';

const gameReady = () => ({
  type: GAME_READY
});

const waitForGame = () => ({
  type: WAIT_FOR_GAME
});

export {
  gameReady,
  waitForGame
}

