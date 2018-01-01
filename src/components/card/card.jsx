// @flow
import React from 'react';

import { Card as CardType } from '../../types.js';

type Props = {
  cardObj: CardType
};

export default function Card(props: Props) {
  const card = props.cardObj;
  return <div>{`${card.name} of ${card.suit}`}</div>
} 