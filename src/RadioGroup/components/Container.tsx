import React from 'react';
import cn from 'classnames';

import type { ContainerProps } from '../types';

const Container = (props: ContainerProps, ref: React.Ref<HTMLSpanElement>) => {
  const { disabled = false, block = false, className, ...rest }: ContainerProps = props;

  return (
    <span
      ref={ref}
      className={cn(
        'e-radio-group',
        {
          'e-radio-group--disabled': disabled,
          'e-radio-group--block': block,
        },
        className
      )}
      {...rest}
    />
  );
};

export default React.forwardRef(Container);
