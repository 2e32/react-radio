import type { CheckmarkPosition, CheckmarkAlign, RenderIconProps } from './components';

/**
 * Свойства и методы радиокнопки.
 */
interface RadioProps<T> extends Omit<React.ComponentPropsWithRef<'span'>, 'onChange'> {
  /**
   * Имя элемента.
   */
  name?: string;
  /**
   * Значение элемента формы.
   */
  value?: T;
  /**
   * Значение, указывающее отмечен ли элемент управления.
   * При значении `true` метка установлена, в противном случае - не установлена.
   */
  checked?: boolean;
  /**
   * Подсказка.
   */
  hint?: React.ReactNode;
  /**
   * CSS-класс контейнера, в котором располагается метка.
   */
  boxClassName?: string;
  /**
   * CSS-класс элемента `input`.
   */
  inputClassName?: string;
  /**
   * CSS-класс контейнера, в котором располагается текст.
   */
  labelClassName?: string;
  /**
   * CSS-класс `hint`.
   */
  hintClassName?: string;
  /**
   * Позиция отображения метки относительно контента радиокнопки.
   * @default left
   */
  checkmarkPosition?: CheckmarkPosition;
  /**
   * Выравнивание метки относительно контента радиокнопки.
   * @default center
   */
  checkmarkAlign?: CheckmarkAlign;
  /**
   * Компонент отключен (метка не может быть выбрана, получение фокуса запрещено).
   * @default false
   */
  disabled?: boolean;
  /**
   * Компонент только на чтение (состояние метки не может быть изменено).
   * @default false
   */
  readOnly?: boolean;
  /**
   * Компонент занимает всю ширину контейнера.
   * @default false
   */
  block?: boolean;
  /**
   * Отображает иконку радиокнопки.
   *
   * ⚠️ Используйте этот метод для собственной стилизации метки.
   */
  renderIcon?: (props: RenderIconProps<T>) => React.ReactNode;
  /**
   * Вызывается при выборе значения.
   */
  onChange?: (value: NonNullable<T>, event: React.ChangeEvent<HTMLInputElement>) => void;

  // Фокус (события проброшены на input)
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

/**
 * Сигнатура компонента. Radio - это функция вида `(props: RadioProps, ref) => JSX.Element`.
 */
type RadioComponent = <T>(props: RadioProps<T>, ref: React.Ref<HTMLSpanElement>) => JSX.Element;

export type { RadioProps, RadioComponent };
