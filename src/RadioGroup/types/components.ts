/**
 * Свойства контейнера.
 */
interface ContainerProps extends React.ComponentPropsWithoutRef<'span'> {
  disabled: boolean;
  block: boolean;
}

/**
 * Свойства подписи.
 */
interface LabelProps {
  htmlFor?: string;
  children?: React.ReactNode;
  className?: string;
  required?: boolean;
  asteriskIcon?: React.ReactNode;
  asteriskPosition?: AsteriskPosition;
  asteriskClassName?: string;
}

/**
 * Свойства подсказки.
 */
interface HintProps {
  children?: React.ReactNode;
  className?: string;
}

type AsteriskPosition = 'left' | 'right';

/**
 * Свойства индикатора обязательности.
 */
interface AsteriskProps {
  icon?: React.ReactNode;
  position?: AsteriskPosition;
  className?: string;
}

export type { ContainerProps, LabelProps, HintProps, AsteriskPosition, AsteriskProps };
