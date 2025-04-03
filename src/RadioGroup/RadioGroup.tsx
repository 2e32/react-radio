import React from 'react';
import cn from 'classnames';

import Radio from '../Radio';

import type { RadioGroupProps, RadioGroupComponent } from './types';
import { Container, Label, Hint } from './components';
import {
  getOptionKey,
  getOptionContent,
  getOptionValue,
  getExtraProps,
  isSameValue,
} from './utils';

const RadioGroup = <V, O>(props: RadioGroupProps<V, O>, ref: React.Ref<HTMLSpanElement>) => {
  const {
    value,
    label,
    hint,
    options = [],
    optionKey,
    optionContent,
    optionValue,
    optionDisabled,
    isValueEqualOption,
    labelClassName,
    hintClassName,
    disabled = false,
    readOnly = false,
    block = false,
    vertical = false,
    required = false,
    asteriskIcon,
    asteriskPosition = 'right',
    asteriskClassName,
    renderIcon,
    renderOption,
    onChange,
    ...rest
  }: RadioGroupProps<V, O> = props;

  const isEqual = isValueEqualOption ?? isSameValue;

  const selectedIndex = options.findIndex((o) => isEqual(value, o));

  const renderedOptions = options.map((option, index) => {
    const key = getOptionKey(option, index, optionKey);
    const isSelected = isEqual(value, option);
    const isDisabled = optionDisabled ? optionDisabled(option) : false;

    if (renderOption) {
      const optionProps = { key, selected: isSelected, disabled: isDisabled };
      const extraProps = getExtraProps(index, selectedIndex, options.length);

      return renderOption({ option, optionProps, extraProps });
    }

    const content = getOptionContent(option, index, optionContent);

    const handleChange = (newValue: O, e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedValue = getOptionValue(newValue, optionValue) as V;

      onChange?.(selectedValue, e);
    };

    return (
      <Radio<O>
        key={key}
        checked={isSelected}
        value={option}
        disabled={disabled || isDisabled}
        readOnly={readOnly}
        renderIcon={renderIcon}
        onChange={handleChange}
      >
        {content}
      </Radio>
    );
  });

  return (
    <Container ref={ref} disabled={disabled} block={block} {...rest}>
      {label != null && (
        <Label
          className={labelClassName}
          required={required}
          asteriskIcon={asteriskIcon}
          asteriskPosition={asteriskPosition}
          asteriskClassName={asteriskClassName}
        >
          {label}
        </Label>
      )}

      <div
        className={cn('e-radio-group__content', { 'e-radio-group__content--vertical': vertical })}
      >
        {renderedOptions}
      </div>

      {hint != null && <Hint className={hintClassName}>{hint}</Hint>}
    </Container>
  );
};

export default React.forwardRef(RadioGroup) as RadioGroupComponent;
