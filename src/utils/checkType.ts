export const isString = (str: unknown): str is string => typeof str === 'string';

export const isNumber = (num: unknown): num is number => typeof num === 'number';

export const isFunction = (fn: unknown): fn is (...args: never) => unknown =>
  typeof fn === 'function';
