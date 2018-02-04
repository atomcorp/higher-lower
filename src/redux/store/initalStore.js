// @flow
type Store = {
  cardOrder: Array<string>,
  nextCards: Array<string>,
  round: number,
  activePlayersId: number,
  playerIds: Array<number>,
  players: [{
    id: number,
    name: string,
    totalPoints: number,
    wins: number
  }],
  predictions: [
    {
      '1': string
    }
  ],

}

export const initialState: Store = {
  cardOrder: [],
  nextCards: [],
  round: 1,
  activePlayersId: 1,
  playerIds: [1],
  players: [{
    id: 1,
    name: 'Tom',
    totalPoints: 0,
    wins: 0
  }],
  predictions: [
    {
      '1': 'higher'
    }
  ]
}