// @flow
import {CardDeck as CardDeckType} from '../../types.js';

export function returnSuits() {
  return ['hearts', 'clubs', 'spades', 'diamonds'];
}

export const cards = [];

function returnCard(suit: string, value: number, name: string) {
  const card = {
    suit: suit,
    value: value,
    name: name
  }
  return card;
}

function resetDeck(deck) {
  return deck = [];
}

export function newDeck(deck: Array<void>) {
  console.log('newDeck');
  return shuffleDeck(buildDeck(resetDeck(deck)));
}

function buildDeck(deck: Array<void>) {
  ['hearts', 'clubs', 'spades', 'diamonds'].forEach((suit) => {
    deck = [...deck, returnSuit(deck, suit)];
  });
  return deck.reduce(( acc, cur ) => acc.concat(cur), []);
}

function returnSuit(deck: Array<string>, suit: string) {
  for (let i = 0; i < 13; i++) {
    deck = [...deck, returnCard(suit, i + 1, returnCardFace(i + 1))];
  }
  return deck;
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

export function slideDeck(cards: CardDeckType, count: number = 10) {
  return cards.slice(0, 10)
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