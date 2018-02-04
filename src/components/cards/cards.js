// @flow
import type {CardDeckType, CardType} from '../../types.js';

export const returnCard = (
  suit: string, 
  value: number, 
  name: string
): CardType => {
  const id = suit.charAt(0) + value;
  return {
    [id]: {
      suit: suit,
      value: value,
      name: name,
      id
    }
  }
}

function resetDeck(): {} {
  return {};
}

export function newDeck(): CardDeckType {
  return buildDeck(resetDeck());
}

export function buildDeck(deck: CardDeckType): CardDeckType {
  return [
    'hearts', 
    'clubs', 
    'spades', 
    'diamonds'].reduce(
      (accumulator: {}, suit: string): CardDeckType  => {
        return Object.assign(
          {}, 
          accumulator, 
          returnSuit(suit, accumulator)
        );
      }, deck); 
}

export const returnSuit = (
  suit: string, 
  deck: CardDeckType
): CardDeckType => {
  // Array.from(Array(13), (el, i) => el = i + 1) simply creates an array of 1 - 13
  return Array.from(Array(13), (el: number, i: number): number => el = i + 1).reduce((
    accumulator: {}, 
    index: number
  ): CardDeckType => {
    return Object.assign({}, accumulator, returnCard(suit, index, returnCardFace(index)));
  }, deck);
}

export function returnCardFace(number: number): string {
  switch(number) {
    case 1:
      return 'ace';
    case 11:
      return 'jack';
    case 12: 
      return 'queen';
    case 13:
      return 'king';
    default:
      return number.toString(); 
  }
}

export function shuffleDeckKeys(cards: Array<string>): Array<string> {
  // https://stackoverflow.com/a/12646864/2368141
  for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // $FlowFixMe (https://github.com/mzabriskie/react-draggable/issues/283)
      [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

export const pickedCards = (
  cardIds: Array<string>, 
  count: number = 10
): Array<string> => {
  return cardIds.slice(0, count);
}

export const remainingDeck = (
  cardIds: Array<string>, 
  count: number
): Array<string> => {
  return cardIds.slice(count, cardIds.length);
}

export const deck = newDeck();