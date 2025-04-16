import React from 'react';
import cn from 'classnames';

import type { AsteriskProps } from '../types';

const Asterisk = ({ icon, position, className }: AsteriskProps) => {
  const asteriskIcon = icon ?? '*';

  const left = position === 'left';
  const right = position === 'right';

  return (
    <span
      className={cn(
        'e-radio-group__asterisk',
        {
          'e-radio-group__asterisk--position-left': left,
          'e-radio-group__asterisk--position-right': right,
        },
        className
      )}
    >
      {asteriskIcon}
    </span>
  );
};

export default Asterisk;
