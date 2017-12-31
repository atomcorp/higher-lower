// @flow

export default class Cards {
  cardsInSuits: number;
  suits: Array<string>;
  constructor() {
    this.cardsInSuits = 13;
    this.suits = ['hearts', 'clubs', 'spades', 'diamonds'];
    return this.returnDeck(this.suits, this.cardsInSuits);
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