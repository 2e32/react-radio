export const isFunction = (fn: unknown): fn is (...args: never) => unknown =>
  typeof fn === 'function';
