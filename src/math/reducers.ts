export type ReducerFn = (array: number[]) => number;

const isEven: (num: number) => boolean = num => num % 2 === 0;

export const sum: ReducerFn = arr => arr.reduce((a, b) => a + b, 0);

export const product: ReducerFn = arr => arr.reduce((a, b) => a * b, 1);

export const sumAndDiff: ReducerFn = array =>
  array.reduce(
    (prev, curr, index) => (isEven(index) ? prev + curr : prev - curr),
    0
  );
