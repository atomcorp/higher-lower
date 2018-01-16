// @flow
import React, { Component } from 'react';
import { newDeck, dealCards } from '../cards/cards.jsx';

console.log(newDeck());
export default class Page extends Component {

  render() {
    return (
      <section>
        <h1>Higher or Lower</h1>
      </section>
    );
  }
}