import { sum } from '../math';

const getCharInt = (char: string): number => Number(char.charCodeAt(0)) || 0;

export const sumHash: (key: string) => number = key => {
  const charArray = key.split('');
  const intArray = charArray.map(getCharInt);

  return sum(intArray) + intArray.length;
};
