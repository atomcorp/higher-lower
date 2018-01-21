// @flow
import React, { Component } from 'react';
import { createStore } from 'redux';
import higherLowerApp from '../../reducers.jsx';
import { newDeck, shuffleDeck } from '../cards/cards.jsx';
import { togglePlayer } from '../../action-creators.jsx';

let store = createStore(higherLowerApp);
console.log(store.getState());
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(togglePlayer('player2'));
const deck = newDeck({});
const deckKeys = Object.keys(deck);
console.log(deck, shuffleDeck(deckKeys));

export default class Page extends Component {

  render() {
    return (
      <section>
        <h1>Higher or Lower</h1>
      </section>
    );
  }
}