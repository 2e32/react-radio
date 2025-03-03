import React from 'react';
import cn from 'classnames';

import type { ContainerProps } from '../types';

const Container = (props: ContainerProps, ref: React.Ref<HTMLSpanElement>) => {
  const {
    disabled = false,
    block = false,
    className,
    checkmarkPosition,
    ...rest
  }: ContainerProps = props;

  return (
    <span
      ref={ref}
      className={cn(
        'e-radio',
        `e-radio--orientation-${checkmarkPosition}`,
        {
          'e-radio--disabled': disabled,
          'e-radio--block': block,
        },
        className
      )}
      {...rest}
    />
  );
};

export default React.forwardRef(Container);
