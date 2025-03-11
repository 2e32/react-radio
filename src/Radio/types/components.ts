type CheckmarkPosition = 'left' | 'right' | 'top' | 'bottom';

type CheckmarkAlign = 'start' | 'center' | 'end';

/**
 * Свойства контейнера.
 */
interface ContainerProps extends React.ComponentPropsWithoutRef<'span'> {
  disabled: boolean;
  block: boolean;
  checkmarkPosition: CheckmarkPosition;
}

/**
 * Свойства контейнера иконки радиокнопки.
 */
interface BoxProps extends React.ComponentPropsWithoutRef<'span'> {
  checked: boolean;
  disabled: boolean;
  readOnly: boolean;
  checkmarkPosition: CheckmarkPosition;
  checkmarkAlign: CheckmarkAlign;
}

/**
 * Свойства подсказки.
 */
interface HintProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Свойства, которые принимает функция рендера иконки радиокнопки.
 */
interface RenderIconProps<T> {
  value?: T;
  checked: boolean;
  disabled: boolean;
  readOnly: boolean;
}

export type {
  CheckmarkPosition,
  CheckmarkAlign,
  ContainerProps,
  BoxProps,
  HintProps,
  RenderIconProps,
};
