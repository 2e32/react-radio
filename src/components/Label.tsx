import React from 'react';
import cn from 'classnames';

const Label = ({ className, ...rest }: React.ComponentPropsWithoutRef<'label'>) => (
  <label className={cn('e-radio__label', className)} {...rest} />
);

export default Label;
