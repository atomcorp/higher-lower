// @flow
import {CardDeck as CardDeckType} from '../../types.js';

function returnCard(suit: string, value: number, name: string) {
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

function resetDeck(deck) {
  return deck = {};
}

export function newDeck(deck: {} = {}) {
  return buildDeck(resetDeck(deck));
}

function buildDeck(deck: CardDeckType) {
  return ['hearts', 'clubs', 'spades', 'diamonds'].reduce((accumulator: {}, currentValue) => {
    return Object.assign({}, accumulator, returnSuit(currentValue, accumulator));
  }, deck);
}

function returnSuit(suit: string, deck: CardDeckType) {
  // Array.from(Array(13), (el, i) => el = i + 1) simply creates an array of 1 - 13
  return Array.from(Array(13), (el, i) => el = i + 1).reduce((accumulator: {}, currentValue) => {
    return Object.assign({}, accumulator, returnCard(suit, currentValue, returnCardFace(currentValue)));
  }, deck);
}

function returnCardFace(number: number) {
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

export function shuffleDeck(cards: CardDeckType) {
  // https://stackoverflow.com/a/12646864/2368141
  for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // $FlowFixMe (https://github.com/mzabriskie/react-draggable/issues/283)
      [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

export function pickedCards(cards: CardDeckType, count: number = 10) {
  return cards.slice(0, count);
}

export function remainingDeck(deck: CardDeckType, count: number) {
  return deck.slice(count, deck.length);
}