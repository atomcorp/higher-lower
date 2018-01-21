// @flow
import {CardDeck as CardDeckType} from '../../types.js';

function returnCard(suit: string, value: number, name: string) {
  return {
    suit: suit,
    value: value,
    name: name
  }
}

function resetDeck(deck) {
  return deck = [];
}

export function newDeck(deck: Array<void>) {
  return shuffleDeck(buildDeck(resetDeck(deck)));
}

function buildDeck(deck: Array<void>) {
  return ['hearts', 'clubs', 'spades', 'diamonds'].reduce((accumulator, currentValue) => {
    return returnSuit(currentValue, accumulator);
  }, deck);
}

function returnSuit(suit: string, deck: Array<void>) {
  // Array.from(Array(13), (el, i) => el = i + 1) simply creates an array of 1 - 13
  return Array.from(Array(13), (el, i) => el = i + 1).reduce((accumulator, currentValue) => {
    return [...accumulator, returnCard(suit, currentValue, returnCardFace(currentValue))];
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

export function sliceDeck(cards: CardDeckType, count: number = 10) {
  return cards.slice(0, count);
}

export function dealCards(deck: CardDeckType, count: number) {
  // pull out top card
  // remove card from deck and return new deck
  let cards = [];
  for (let i = 0; i < count; i++) {
    cards = [...cards, deck[i]];
  }
  const newDeck = deck.slice(count);
  return {
    cards: cards,
    deck: newDeck
  };
}