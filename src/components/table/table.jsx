// @flow
import React, { Component } from 'react';
import Card from '../card/card.jsx';
import Game from '../../containers/game/game.jsx';
import { Card as CardType, CardDeck as CardDeckType } from '../../types.js';
import {isHigherOrLower} from '../game-logic.jsx';

type State = {
  inPlay: boolean,
  card: CardType | {},
  game: {
    deck: CardDeckType,
    playCard: CardType,
    currentDeck: CardDeckType
  },
  won: boolean,
  cheat: boolean,
  wins: number,
  losses: number,
  topScore: number,
  currentScore: number
};

export default class Table extends Component<void, void, State> {
  state: State;
  constructor() {
    super();
    this.state = {
      inPlay: false,
      card: {},
      game: new Game(),
      won: false,
      cheat: true,
      wins: 0,
      losses: 0,
      topScore: 0,
      currentScore: 0
    };
    // this.play = this.play.bind(this);
    // this.getCard = this.getCard.bind(this);
  }
  
  play() {
    // initiate new game
    this.setState({
      inPlay: true,
      card: this.getCard(),
      won: false
    });
  }

  getCard() {
    const card = this.state.game.playCard();
    return card[0];
  }

  choice(choice: boolean) {
    const newCard = this.getCard();
    const result = isHigherOrLower(this.state.card.value, newCard.value, choice);
    if (result) {
      this.nextCard(newCard);
    } else {
      this.lost();
    }
  }

  nextCard(nextCard: CardType) {
    if (this.state.game.currentDeck().length < 1) {
      this.won(nextCard);
    } else {
      this.setState({
        card: nextCard,
        currentScore: this.state.currentScore + 1
      });
    }
  }

  lost() {
    const losses = this.state.losses + 1;
    this.setState({
      inPlay: false,
      card: {},
      game: new Game(),
      won: false,
      losses: losses,
      topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore,
      currentScore: 0
    });
  }

  won(card: CardType) {
    const wins = this.state.wins + 1;
    this.setState({
      inPlay: false,
      card: card,
      won: true,
      game: new Game(),
      wins: wins,
      topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore,
      currentScore: 0
    });
  }

  debugCheat() {
    console.log(this.state.game.currentDeck());
  }

  render() {
    if (this.state.cheat) {
      this.debugCheat();
    }
    const playButton = <button onClick={() => this.play()}>Play</button>;
    return (
      <section>
        {
          this.state.inPlay ? <Card cardObj={this.state.card} /> : playButton
        }
        <br/>
        {
          this.state.inPlay ? (
            <div>
              <button onClick={() => this.choice(true)}>Higher</button> 
              <button onClick={() => this.choice(false)}>Lower</button>
            </div>
          ) : ''
        }
        {
          this.state.won ? 'Won!' : 'Lost'
        }
        <br/>
        {
          `wins: ${this.state.wins}, losses: ${this.state.losses}`
        }
        <br/>
        {
          `top score: ${this.state.topScore}`
        }
      </section>
    );
  }
}