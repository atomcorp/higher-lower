// @flow
import { CardDeck as CardDeckType } from '../../types.js';

// contains all game logic

export function isHigherOrLower(previous: number, current: number, choice: boolean) {
  // choice: true = higher, lower = false
  if (previous === current) {
    return true;
  }
  if (higherOrLower) {
    return previous < current ? true : false; 
  } else {
    return previous < current ? true : false; 
  }
}
  
export function round(cards: CardDeckType) {
  if (cards.length < 1) {
    return 'Won';
  } else {
    return cards.length.toString();
  }
}