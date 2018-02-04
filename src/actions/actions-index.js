// actions types
export const CHANGE_PLAYER = 'CHANGE_PLAYER';
export const UPDATE_CURRENT_CARD = 'UPDATE_CURRENT_CARD';
export const NEW_DECK = 'NEW_DECK';
export const SHUFFLE_NEW_DECK = 'SHUFFLE_NEW_DECK';

// action creators
export function togglePlayer(player: string) {
  return {
    type: CHANGE_PLAYER,
    player: player
  }
}

export function createNewDeck(deck) {
  return {
    type: NEW_DECK,
    deck
  }
}

export function shuffleNewDeck(cardOrder) {
  return {
    type: SHUFFLE_NEW_DECK,
    cardOrder
  }
}

let cardCount = 0;
export function addToCurrentCounter() {
  return {
    type: UPDATE_CURRENT_CARD,
    cardCounter: ++cardCount
  }
}