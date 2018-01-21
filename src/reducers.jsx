import { DEAL_CARDS, CHANGE_PLAYER, HIGHER_LOWER } from './action-types.jsx';
import { togglePlayer, removeCards, higherOrLower } from './reducers.jsx';

function turn(state = 'player1', action) {
  switch (action.type) {
    case CHANGE_PLAYER:
      return action.player;
    default:
      return state;
  }
}

function choice(state = 'higher', action) {
  switch (action.type) {
    case HIGHER_LOWER:
      return Object.assign({}, state, {
        higherOrLower: action.higherOrLower
      })
    default:
      return state;
  }
}

function cards(state = {}, action) {
  switch (action.type) {
    case DEAL_CARDS:
      return Object.assign({}, state, {
        cards: state.cards.slice(action.number, state.deck.length),
        activeCards: state.cards.slice(state.deck, action.number)
      });
    
    default:
      return state;
  }
}

function activeCards(state, action) {
  
}

// ok!
// this is my state, I can define actions on each little bit of state
// ok!
export default function higherLowerApp(state = {}, action) {
  return {
    turn: turn(state.player, action),
    choice: choice(state.higherOrLower, action),
    cards: cards(state, action)
  }
}

