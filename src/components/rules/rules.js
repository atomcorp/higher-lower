// @flow
// contains all game logic

export function isHigherOrLower(previous: number, current: number, choice: boolean): boolean {
  // choice: true = higher, lower = false
  if (previous === current) {
    return true;
  }
  if (choice) {
    return current > previous  ? true : false; 
  } else {
    return current < previous  ? true : false; 
  }
}
  
export function round(cards: Array<string>): string | number {
  if (cards.length < 1) {
    return 'Won';
  } else {
    return cards.length.toString();
  }
}