// @flow
import { CardDeck, shuffleCards, dealCards } from '../../components/cards.jsx';
import { Cards } from '../../components/cards.jsx';

// contains all game playing methods

export default class Game {

  constructor() {
    this.deck = this.initialise();
    const cardTest = Cards();
    const deck = [];
    console.log(cardTest.newDeck(deck));
  }

  initialise() {
    const newDeck = new CardDeck();
    const shuffledDeck = shuffleCards(newDeck);
    const playingDeck = shuffledDeck.slice(0, 10);
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
