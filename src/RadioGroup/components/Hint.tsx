import React from 'react';
import cn from 'classnames';

import type { HintProps } from '../types';

const Hint = ({ children, className }: HintProps) => (
  <div className={cn('e-radio-group__hint', className)}>{children}</div>
);

export default Hint;
