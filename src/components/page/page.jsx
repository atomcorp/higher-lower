// @flow
import React, { Component } from 'react';
import { createStore } from 'redux';
import higherLowerApp from '../../reducers.jsx';
import { newDeck } from '../cards/cards.jsx';
import { togglePlayer } from '../../action-creators.jsx';

let store = createStore(higherLowerApp);
console.log(store.getState());
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(togglePlayer('player2'));
console.log(newDeck([]));
export default class Page extends Component {

  render() {
    return (
      <section>
        <h1>Higher or Lower</h1>
      </section>
    );
  }
}