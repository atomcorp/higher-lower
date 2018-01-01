// @flow
import React, { Component } from 'react';
import Table from '../../components/table/table.jsx';

import { CardDeck, shuffleCards, dealCards} from '../../components/cards.jsx';
const cards = new CardDeck();
console.log(shuffleCards(cards));
console.log(dealCards(cards, 4));

export default class Page extends Component {

  render() {
    return (
      <section>
        <h1>Higher or Lower</h1>
        <Table />
      </section>
    );
  }
}