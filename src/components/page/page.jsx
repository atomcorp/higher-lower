// @flow
import React, { Component } from 'react';
import { createStore } from 'redux';
import higherLowerApp from '../../redux/reducers/reducers-index.js';
import { togglePlayer, addToCurrentCounter, shuffleNewDeck } from '../../redux/actions/actions-index.js';
import { newDeck, shuffleDeck } from '../cards/cards.jsx';

const deck = newDeck();
const cardKeys = Object.keys(deck);
const initialState = {
  cardOrder: shuffleDeck(cardKeys),
  cardCounter: 0
};
let store = createStore(higherLowerApp, initialState);
const unsubscribe = store.subscribe(() =>
  console.info(store.getState())
)

store.dispatch(addToCurrentCounter());
store.dispatch(togglePlayer('player2'));
store.dispatch(shuffleNewDeck(shuffleDeck(cardKeys)));
unsubscribe();

function Test() {
  return <h1>{store.getState().cardOrder[0]}</h1>
}

export default class Page extends Component {

  render() {
    return (
      <section>
        <h1>Higher or Lower</h1>
        <Test></Test>
      </section>
    );
  }
}