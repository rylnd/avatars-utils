import { sum } from '../math';

const getCharInt = (char: string): number => Number(char.charCodeAt(0)) || 0;

export const hashFactory: (reducer: ReducerFn) => HashFn = reducer => key => {
  const charArray = key.split('');
  const intArray = charArray.map(getCharInt);

  return reducer(intArray) + intArray.length;
};

export const sumHash: HashFn = hashFactory(sum);
