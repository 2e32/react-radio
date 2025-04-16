import cn from 'classnames';

import type { BoxProps } from '../types';

const Box = (props: BoxProps) => {
  const {
    checked = false,
    disabled = false,
    readOnly = false,
    className,
    checkmarkPosition,
    checkmarkAlign,
    ...rest
  }: BoxProps = props;

  return (
    <span
      className={cn(
        'e-radio__box',
        `e-radio__box--position-${checkmarkPosition}`,
        `e-radio__box--align-${checkmarkAlign}`,
        {
          'e-radio__box--checked': checked,
          'e-radio__box--disabled': disabled,
          'e-radio__box--readonly': readOnly && !disabled,
        },
        className
      )}
      {...rest}
    />
  );
};

export default Box;
