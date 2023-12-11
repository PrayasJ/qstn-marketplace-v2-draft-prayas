import { themeColors } from '@colors/themeColors';
import { useThemeMode } from '@hooks/useThemeMode';
import type { ComponentProps, ReactNode } from 'react';
import React, { forwardRef, useId } from 'react';

import inputStyles from './Input.module.scss';

interface InputProps extends Omit<ComponentProps<'input'>, 'prefix'> {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  value?: number | string;
  type?: string;
  onChange?: () => void;
  placeholder?: string;
  width?: string | number;
  style?: React.CSSProperties;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    prefixIcon,
    value,
    type,
    onChange,
    placeholder,
    width,
    style,
    suffixIcon,
    ...props
  },
  ref
) {
  const id = useId();

  const { mode } = useThemeMode();

  return (
    <div className={inputStyles.inputContainer} style={{ width }}>
      <div className={inputStyles.inputPrefixIcon}>{prefixIcon}</div>
      <div className={inputStyles.inputSuffixIcon}>{suffixIcon}</div>

      <input
        id={id}
        ref={ref}
        type={type ? type : 'text'}
        className={inputStyles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          paddingLeft: prefixIcon ? 42 : '',
          paddingRight: suffixIcon ? 42 : '',
          width: width,
          background: themeColors[mode].input,
          ...style
        }}
        {...props}
      />
    </div>
  );
});
