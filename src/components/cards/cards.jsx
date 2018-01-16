// @flow
import {CardDeck as CardDeckType} from '../../types.js';

const cardVals = function() {
  let arr = [];
  for (var i = 0; i < 13; i++) {
    arr.push(i);
  }
  return arr;
}

export const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const cardSuits = ['hearts', 'clubs', 'spades', 'diamonds'];

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
  return shuffleDeck(buildDeck(resetDeck(deck)));
}

function buildDeck(deck: Array<void>) {
  return cardSuits.reduce((accumulator, currentValue) => {
    const suit = currentValue;
    return accumulator.concat(returnSuit(suit));
  }, []);
}

function returnSuit(suit: string) {
  return cardValues.reduce((accumulator, currentValue) => {
    return [...accumulator, returnCard(suit, currentValue, returnCardFace(currentValue))];
  }, [])
}

function addtoDeck(deck, card) {
  return [...deck, card];
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