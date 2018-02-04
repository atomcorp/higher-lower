import { combineReducers } from 'redux';
import { CHANGE_PLAYER, UPDATE_CURRENT_CARD, NEW_DECK, SHUFFLE_NEW_DECK } from '../actions/actions-index.js';

function activePlayer(state = 'player1', action) {
  switch (action.type) {
    case CHANGE_PLAYER:
      return action.player;
    default:
      return state;
  }
}

function cardCounter(state = 0, action) {
  switch (action.type) {
    case UPDATE_CURRENT_CARD:
      return action.cardCounter
    default:
      return state;
  }
}

function deck(state = {}, action) {
  switch (action.type) {
    case NEW_DECK:
      return action.deck;
    default:
      return state;
  }
}

function cardOrder(state = [], action) {
  switch (action.type) {
    case SHUFFLE_NEW_DECK:
      return action.cardOrder;
    default:
      return state;
  }
}

// ok!
// this is my state, I can define actions on each little bit of state
// ok!
const higherLowerApp = combineReducers({
  activePlayer,
  cardCounter,
  deck,
  cardOrder
});

export default higherLowerApp;

