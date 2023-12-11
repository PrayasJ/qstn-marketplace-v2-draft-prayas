import { themeColors } from '@colors/themeColors';
import { useThemeMode } from '@hooks/useThemeMode';
import type { ComponentProps } from 'react';
import React, { forwardRef, useId } from 'react';

import textareaStyles from './TextArea.module.scss';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label?: string;
  placeholder?: string;
  width?: string | number;
  style?: React.CSSProperties;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ label, placeholder, width, style, ...props }, ref) {
    const id = useId();
    const { mode } = useThemeMode();

    return (
      <div className={textareaStyles.textareaContainer} style={{ width }}>
        <label htmlFor={id}>
          {label && <div className="label">{label}</div>}
          <textarea
            id={id}
            className={textareaStyles.textarea}
            placeholder={placeholder}
            rows={5}
            style={{
              width: width,
              background: themeColors[mode].input,
              ...style
            }}
            ref={ref}
            {...props}
          />
        </label>
      </div>
    );
  }
);
