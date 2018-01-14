// @flow
import { newDeck, dealCards } from '../../components/cards/cards.jsx';

// contains all game playing methods

export default class Game {

  constructor() {
    this.deck = this.initialise();
  }

  initialise() {
    const deck = newDeck();
    const playingDeck = deck.slice(0, 10);
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
