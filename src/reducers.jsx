import { combineReducers } from 'redux';
import { DEAL_CARDS, CHANGE_PLAYER, HIGHER_LOWER, UPDATE_CURRENT_CARD } from './action-types.jsx';
// import { togglePlayer, removeCards, higherOrLower, addToCurrentCounter } from './reducers.jsx';

function activePlayer(state = 'player1', action) {
  switch (action.type) {
    case CHANGE_PLAYER:
      return action.player;
    default:
      return state;
  }
}

// function choice(state = 'higher', action) {
//   switch (action.type) {
//     case HIGHER_LOWER:
//       return Object.assign({}, state, {
//         higherOrLower: action.higherOrLower
//       })
//     default:
//       return state;
//   }
// }

// function cards(state = {}, action) {
//   switch (action.type) {
//     case DEAL_CARDS:
//       return Object.assign({}, state, {
//         cards: state.cards.slice(action.number, state.deck.length),
//         activeCards: state.cards.slice(state.deck, action.number)
//       });
    
//     default:
//       return state;
//   }
// }

function cardCounter(state = 0, action) {
  switch (action.type) {
    case UPDATE_CURRENT_CARD:
      return action.cardCounter
    default:
      return state;
  }
}

// ok!
// this is my state, I can define actions on each little bit of state
// ok!
const higherLowerApp = combineReducers({
  activePlayer,
  cardCounter
});

export default higherLowerApp;

