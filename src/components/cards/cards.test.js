import { 
  deck, 
  newDeck, 
  buildDeck, 
  returnSuit, 
  returnCardFace,
  returnCard,
  shuffleDeckKeys
} from './cards.js';

test('Make sure created pack is always the same', () => {
  expect(deck).toEqual(newDeck());
})

test('Check methods are reliable', () => {
  expect(returnCardFace(1)).toEqual('ace');
  expect(returnCardFace(11)).toEqual('jack');
  expect(returnCardFace(12)).toEqual('queen');
  expect(returnCardFace(13)).toEqual('king');
  expect(returnCardFace(3)).toEqual('3');
  expect(returnCard('diamond', 1, 'ace')).toEqual({
    'd1': {
      suit: 'diamond',
      value: 1,
      name: 'ace',
      id: 'd1'
    }
  });
  expect(returnCard('hearts', 7, '7')).toEqual({
    'h7': {
      suit: 'hearts',
      value: 7,
      name: '7',
      id: 'h7'
    }
  });
  expect(shuffleDeckKeys(
    Object.keys(deck)
  )).not.toEqual(shuffleDeckKeys(
    Object.keys(deck))
  );
  expect(returnSuit('clubs', {})).toEqual({
    "c1": {"id": "c1", "name": "ace", "suit": "clubs", "value": 1}, "c10": {"id": "c10", "name": "10", "suit": "clubs", "value": 10}, "c11": {"id": "c11", "name": "jack", "suit": "clubs", "value": 11}, "c12": {"id": "c12", "name": "queen", "suit": "clubs", "value": 12}, "c13": {"id": "c13", "name": "king", "suit": "clubs", "value": 13}, "c2": {"id": "c2", "name": "2", "suit": "clubs", "value": 2}, "c3": {"id": "c3", "name": "3", "suit": "clubs", "value": 3}, "c4": {"id": "c4", "name": "4", "suit": "clubs", "value": 4}, "c5": {"id": "c5", "name": "5", "suit": "clubs", "value": 5}, "c6": {"id": "c6", "name": "6", "suit": "clubs", "value": 6}, "c7": {"id": "c7", "name": "7", "suit": "clubs", "value": 7}, "c8":
{"id": "c8", "name": "8", "suit": "clubs", "value": 8}, "c9": {"id": "c9", "name": "9", "suit": "clubs", "value": 9}
  })
})