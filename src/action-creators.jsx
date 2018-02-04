import { CHANGE_PLAYER, DEAL_CARDS, HIGHER_LOWER, UPDATE_CURRENT_CARD } from './action-types.jsx';

export function togglePlayer(player: string) {
  return {
    type: CHANGE_PLAYER,
    player: player
  }
}

// export function dealCards(number: number) {
//   return {
//     type: DEAL_CARDS,
//     number: number
//   }
// }

// export function higherOrLower(higherOrLower: string) {
//   return {
//     type: HIGHER_LOWER,
//     higherOrLower: higherOrLower
//   }
// }
let cardCount = 0;
export function addToCurrentCounter() {
  return {
    type: UPDATE_CURRENT_CARD,
    cardCounter: cardCount++
  }
}