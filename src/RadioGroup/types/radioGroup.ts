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
  value?: Nullable<V>;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  options?: O[];
  optionKey?: OptionKey<O>;
  optionContent?: OptionContent<O>;
  optionValue?: OptionValue<O>;
  optionDisabled?: (option: O) => boolean;
  isValueEqualOption?: (value: Nullable<V>, option: O) => boolean;
  disabled?: boolean;
  readOnly?: boolean;
  block?: boolean;
  onChange?: (newValue: V, e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * CSS-класс `label`.
   */
  labelClassName?: string;
  /**
   * CSS-класс `hint`.
   */
  hintClassName?: string;
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
   * Отображает иконку переключателя.
   *
   * ⚠️ Используйте этот метод для собственной стилизации галочки.
   */
  renderIcon?: (props: RenderIconProps<O>) => React.ReactNode;

  renderOption?: (props: RenderOptionProps<O>) => React.ReactNode;
}

type RadioGroupComponent = <V, O>(
  props: RadioGroupProps<V, O>,
  ref: React.Ref<HTMLSpanElement>
) => JSX.Element;

export type { OptionProps, ExtraProps, RenderOptionProps, RadioGroupProps, RadioGroupComponent };
