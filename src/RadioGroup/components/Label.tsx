import React from 'react';
import cn from 'classnames';

import type { LabelProps } from '../types';

import Asterisk from './Asterisk';

const Label = (props: LabelProps) => {
  const {
    htmlFor,
    children,
    className,
    required = false,
    asteriskIcon,
    asteriskPosition,
    asteriskClassName,
  }: LabelProps = props;

  const asterisk = required ? (
    <Asterisk icon={asteriskIcon} position={asteriskPosition} className={asteriskClassName} />
  ) : null;

  return (
    <label htmlFor={htmlFor} className={cn('e-radio-group__label', className)}>
      {asteriskPosition === 'left' ? (
        <>
          {asterisk}
          {children}
        </>
      ) : (
        <>
          {children}
          {asterisk}
        </>
      )}
    </label>
  );
};

export default Label;
