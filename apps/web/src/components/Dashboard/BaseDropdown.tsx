import { themeColors } from '@colors/themeColors';
import salesStyles from '@components/Common/sales.module.scss';
import { useThemeMode } from '@hooks/useThemeMode';
import { Select } from '@sekmet/radix-ui-themes';
import React, { useState } from 'react';

export const BaseDropdown: React.FC<{
  label: string;
  subtitle?: string;
  placeholder?: string | React.JSX.Element;
  selected?: number;
  options?: {
    type: 'btn' | 'option';
    img?: React.JSX.Element;
    text?: string;
    fn?: () => void;
  }[];
  width?: number | string;
}> = ({ label, placeholder, subtitle, options, width, selected }) => {
  const { mode } = useThemeMode();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (!placeholder || typeof placeholder == 'string') {
    return (
      <div className="pr-[2rem] sm:pr-0">
        <p
          style={{
            textTransform: 'capitalize',
            fontSize: 15,
            height: 40
          }}
        >
          {label}
        </p>
        <Select.Root size={'3'} open={isOpen}>
          <Select.Trigger
            variant="ghost"
            style={{
              background: themeColors[mode].dropdown,
              width: width || 'auto'
            }}
            className={salesStyles.salesDropdown}
            placeholder={
              options ? options[selected || 0]?.text : placeholder || 'Choose'
            }
            onClick={() => setIsOpen(!isOpen)}
          />
          <Select.Content
            variant="solid"
            position="popper"
            sideOffset={15}
            onPointerDownOutside={() => setIsOpen(false)}
          >
            <Select.Group>
              {subtitle && <Select.Label>{subtitle}</Select.Label>}
              {options?.map((option, index) => (
                <div
                  key={index}
                  className={salesStyles.salesOptionRow}
                  onClick={() => {
                    if (option?.fn) {
                      setIsOpen(false);
                      option.fn();
                    }
                  }}
                  style={{
                    cursor: option.type == 'btn' ? 'pointer' : 'default',
                    color: themeColors[mode].label,
                    borderBottomColor: mode == 'light' ? '#F4F4F5' : '#3F3F46',
                    borderBottomWidth: index + 1 == options.length ? 0 : 1
                  }}
                >
                  {option.img}&nbsp;
                  {option.text}
                </div>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    );
  }
  return (
    <div className="pr-[2rem] sm:pr-0">
      <p
        style={{
          textTransform: 'capitalize',
          fontSize: 15,
          height: 40
        }}
      >
        {label}
      </p>
      <div
        className={salesStyles.salesDropdown}
        style={{
          background: themeColors[mode].dropdown,
          height: 54
        }}
      >
        {placeholder}
        <Select.Root size={'3'} open={isOpen}>
          <Select.Trigger
            variant="ghost"
            style={{
              background: themeColors[mode].dropdown,
              outlineWidth: 0,
              marginLeft: 20,
              height: 'auto',
              padding: 0,
              marginBottom: 0
            }}
            className={salesStyles.salesDropdown}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Select.Content
            variant="soft"
            position="popper"
            sideOffset={35}
            alignOffset={-35}
            onPointerDownOutside={() => setIsOpen(false)}
          >
            <Select.Group>
              {subtitle && (
                <Select.Label
                  className={salesStyles.salesRowLabel}
                  style={{ color: themeColors[mode].label }}
                >
                  {subtitle}
                </Select.Label>
              )}
              {options?.map((option) => (
                <div
                  key={option.text}
                  className={salesStyles.salesOptionRow}
                  onClick={() => {
                    if (option?.fn) {
                      setIsOpen(false);
                      option.fn();
                    }
                  }}
                  style={{
                    cursor: option.type == 'btn' ? 'pointer' : 'default',
                    color: themeColors[mode].label,
                    borderWidth: 0
                  }}
                >
                  {option.img}&nbsp;
                  {option.text}
                </div>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};
