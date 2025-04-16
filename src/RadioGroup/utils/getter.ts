import { isString, isNumber, isFunction } from '../../utils';

import type { OptionKey, OptionContent, OptionValue, ExtraProps } from '../types';

/**
 * Получает ключ опции.
 */
export const getOptionKey = <T>(option: T, index: number, getter?: OptionKey<T>) => {
  if (isString(getter)) return option[getter] as React.Key;
  if (isFunction(getter)) return getter(option, index);

  if (isString(option) || isNumber(option)) return option;

  return index;
};

/**
 * Получает значение опции.
 */
export const getOptionValue = <T>(option: T, getter?: OptionValue<T>) => {
  if (isString(getter)) return option[getter];
  if (isFunction(getter)) return getter(option);

  return option;
};

/**
 * Получает отображаемое содержимое опции.
 */
export const getOptionContent = <T>(option: T, index: number, getter?: OptionContent<T>) => {
  if (isString(getter)) return option[getter] as React.ReactNode;
  if (isFunction(getter)) return getter(option, index);

  if (isString(option) || isNumber(option)) return option;

  // Избагаем ошибку React "Object are not valid as a React child", если option, например, объект
  return JSON.stringify(option);
};

/**
 * Получает дополнительные свойства опции.
 */
export const getExtraProps = (
  index: number,
  selectedIndex: number,
  optionsCount: number
): ExtraProps => {
  const lastIndex = optionsCount - 1;

  return {
    currentIndex: index,
    lastIndex,
    selectedIndex,
    isFirstIndex: index === 0,
    isLastIndex: index === lastIndex,
    isSelectedIndex: index === selectedIndex,
    optionsCount,
  };
};
