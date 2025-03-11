import React, { useRef, useId } from 'react';
import cn from 'classnames';

import { isFunction } from '../utils';

import type { RadioComponent, RadioProps } from './types';
import { Container, Box, Label, Hint } from './components';
import { renderIconDefault } from './utils';

const Radio = <T,>(props: RadioProps<T>, ref: React.Ref<HTMLSpanElement>) => {
  const {
    id,
    name,
    value,
    checked = false,
    children,
    hint,
    boxClassName,
    inputClassName,
    labelClassName,
    hintClassName,
    checkmarkPosition = 'left',
    checkmarkAlign = 'center',
    disabled = false,
    readOnly = false,
    autoFocus = false,
    block = false,
    tabIndex = 0,
    renderIcon: renderIconProp,
    onChange,
    onFocus,
    onBlur,
    ...rest
  }: RadioProps<T> = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const generatedId = useId();
  const inputId = id ?? generatedId;

  const hasValue = value != null;

  const renderIcon = () => {
    const renderIconProps = { value, checked, disabled, readOnly };
    const renderFn = isFunction(renderIconProp) ? renderIconProp : renderIconDefault;

    return renderFn(renderIconProps);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hasValue) onChange?.(value, e);
  };

  return (
    <Container
      ref={ref}
      checkmarkPosition={checkmarkPosition}
      disabled={disabled}
      block={block}
      {...rest}
    >
      <Box
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
        className={boxClassName}
        checkmarkPosition={checkmarkPosition}
        checkmarkAlign={checkmarkAlign}
      >
        {/* input первый для возможности применения комбинаторов A + B, A ~ B */}
        <input
          id={inputId}
          ref={inputRef}
          type="radio"
          checked={checked}
          name={name}
          value={hasValue ? String(value) : undefined}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          className={cn('e-radio__input', inputClassName)}
          tabIndex={tabIndex}
          onChange={disabled || readOnly ? undefined : handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {renderIcon()}
      </Box>

      {children != null && (
        <div>
          <Label htmlFor={inputId} className={labelClassName}>
            {children}
          </Label>

          {hint != null && <Hint className={hintClassName}>{hint}</Hint>}
        </div>
      )}
    </Container>
  );
};

export default React.forwardRef(Radio) as RadioComponent;
