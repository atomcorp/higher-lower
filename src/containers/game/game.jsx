// @flow
import { CardDeck as CardDeckType } from '../../types.js';
import { CardDeck, shuffleCards, dealCards } from '../../components/cards.jsx';

// contains all game playing methods

export default class Game {

  constructor() {
    this.deck = initialise();
  }

  initialise() {
    const newDeck = new CardDeck;
    const shuffledDeck = shuffleCards(newDeck);
    const playingDeck = shuffledDeck.slice(1, 10);
    return playingDeck;
  }

  currentDeck() {
    return this.deck;
  }

  playCard() {
    const deal = dealCards(this.deck, 1);
    this.deck = deal.deck;
    return deal.cards;
  }

}
