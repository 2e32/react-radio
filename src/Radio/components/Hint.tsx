import cn from 'classnames';

import type { HintProps } from '../types';

const Hint = ({ children, className }: HintProps) => (
  <div className={cn('e-radio__hint', className)}>{children}</div>
);

export default Hint;
