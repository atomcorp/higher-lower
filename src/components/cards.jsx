// @flow
import {CardDeck as CardDeckType} from '../types.js';

export function returnSuits() {
  return ['hearts', 'clubs', 'spades', 'diamonds'];
}

export function Cards() {

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

  function newDeck(deck: Array<void>) {
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
      deck = [...deck, returnCard(suit, i + 1, returnFace(i + 1))];
    }
    return deck;
  }

  function returnFace(number: number) {
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

  function shuffleDeck(cards: CardDeckType) {
    // https://stackoverflow.com/a/12646864/2368141
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // $FlowFixMe (https://github.com/mzabriskie/react-draggable/issues/283)
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  function dealCards(deck: CardDeckType, count: number) {
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

  return {
    newDeck: newDeck,
    shuffleCards: shuffleCards,
    dealCards: dealCards
  }
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