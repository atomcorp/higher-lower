// @flow
import {CardDeck as CardDeckType} from '../types.js';

export function returnSuits() {
  return ['hearts', 'clubs', 'spades', 'diamonds'];
}

export class CardDeck {
  cardsInSuits: number;
  suits: Array<string>;
  constructor() {
    return this.returnDeck(returnSuits(), 13);
  }

  returnCard(suit: string, value: number, name: string) {
    const card = {
      suit: suit,
      value: value,
      name: name
    }
    return card;
  }

  returnDeck(suits: Array<string>, cardCount: number) {
    let deck = [];
    suits.forEach((suit) => {
      for (let i = 0; i < cardCount; i++) {
        const card = this.returnCard(suit, i + 1, this.returnFace(i + 1));
        deck = [...deck, card];
      }
    });
    return deck;
  }

  returnFace(number: number) {
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
}

export function shuffleCards(cards: CardDeckType) {
  // https://stackoverflow.com/a/12646864/2368141
  for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // $FlowFixMe (https://github.com/mzabriskie/react-draggable/issues/283)
      [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
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