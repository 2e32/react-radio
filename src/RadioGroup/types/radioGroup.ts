import type { RenderIconProps } from '../../Radio';

import type { Nullable } from './common';
import type { AsteriskPosition } from './components';
import type { OptionKey, OptionContent, OptionValue } from './getter';

interface OptionProps {
  key: React.Key;
  selected: boolean;
  disabled: boolean;
}

interface ExtraProps {
  currentIndex: number;
  lastIndex: number;
  selectedIndex: number;
  isFirstIndex: boolean;
  isLastIndex: boolean;
  isSelectedIndex: boolean;
  optionsCount: number;
}

interface RenderOptionProps<O> {
  option: O;
  optionProps: OptionProps;
  extraProps: ExtraProps;
}

interface RadioGroupProps<V, O> extends Omit<React.ComponentPropsWithRef<'span'>, 'onChange'> {
  /**
   * Значение группы.
   */
  value?: Nullable<V>;
  /**
   * Подпись группы.
   */
  label?: React.ReactNode;
  /**
   * Подсказка.
   */
  hint?: React.ReactNode;
  /**
   * Список опций.
   */
  options?: O[];
  /**
   * Вычисляет ключ опции (для случая, когда значения опций не уникальны).
   */
  optionKey?: OptionKey<O>;
  /**
   * Вычисляет контент опции.
   */
  optionContent?: OptionContent<O>;
  /**
   * Вычисляет значение опции, возвращаемое при выборе опции (change).
   */
  optionValue?: OptionValue<O>;
  /**
   * Вычисляет должна ли опция быть отключена (в состоянии `disabled`).
   * @param option Опция из списка.
   * @returns Возвращает `true`, если опция должна быть отключена.
   */
  optionDisabled?: (option: O) => boolean;
  /**
   * Функция для определения равенства текущего значения `value` и опции (для определения признака
   * `checked` у опции).
   *
   * ⚠️ Используйте `isValueEqualOption` для сравнения `value` и опции, если они в виде объектов или
   * представлены разными типами. По умолчанию они сравниваются с помощью `Object.is`.
   *
   * @param value Текущее значение.
   * @param option Опция из списка.
   * @returns Возвращает `true`, если `value` и опция соответствуют друг другу.
   */
  isValueEqualOption?: (value: Nullable<V>, option: O) => boolean;
  /**
   * CSS-класс `label`.
   */
  labelClassName?: string;
  /**
   * CSS-класс `hint`.
   */
  hintClassName?: string;
  /**
   * Компонент отключен (опция не может быть выбрана, получение фокуса запрещено).
   * @default false
   */
  disabled?: boolean;
  /**
   * Компонент только на чтение (опция не может быть выбрана).
   * @default false
   */
  readOnly?: boolean;
  /**
   * Компонент занимает всю ширину контейнера.
   * @default false
   */
  block?: boolean;
  /**
   * Опции располагаются по вертикали.
   * @default false
   */
  vertical?: boolean;
  /**
   * Значение должно быть обязательно заполнено (добавляет в `label` знак обязательности).
   * @default false
   */
  required?: boolean;
  /**
   * Иконка обязательности заполнения.
   * @default *
   */
  asteriskIcon?: React.ReactNode;
  /**
   * Позиция иконки обязательности.
   * @default right
   */
  asteriskPosition?: AsteriskPosition;
  /**
   * CSS-класс контейнера, в котором располагается `asteriskIcon`.
   */
  asteriskClassName?: string;
  /**
   * Отображает иконку радиокнопки.
   *
   * ⚠️ Используйте этот метод для собственной стилизации метки.
   */
  renderIcon?: (props: RenderIconProps<O>) => React.ReactNode;
  /**
   * Отображает опцию.
   *
   * ⚠️ Используйте этот метод изменения структуры и стилизации опции (её метки, контента).
   */
  renderOption?: (props: RenderOptionProps<O>) => React.ReactNode;
  /**
   * Вызывается при выборе значения.
   */
  onChange?: (newValue: V, e: React.ChangeEvent<HTMLInputElement>) => void;
}

type RadioGroupComponent = <V, O>(
  props: RadioGroupProps<V, O>,
  ref: React.Ref<HTMLSpanElement>
) => JSX.Element;

export type { OptionProps, ExtraProps, RenderOptionProps, RadioGroupProps, RadioGroupComponent };
