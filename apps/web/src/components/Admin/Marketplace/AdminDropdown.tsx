import { themeColors } from '@colors/themeColors';
import adminStyles from '@components/Common/admin.module.scss';
import { useThemeMode } from '@hooks/useThemeMode';
import { Select } from '@sekmet/radix-ui-themes';
import React from 'react';

export const AdminDropdown: React.FC<{ label: string }> = ({ label }) => {
  const { mode } = useThemeMode();
  return (
    <div style={{ paddingRight: '2rem' }}>
      <p style={{ textTransform: 'capitalize' }}>{label}</p>
      <Select.Root defaultValue="Choose" size={'3'}>
        <Select.Trigger
          variant="ghost"
          style={{
            background: themeColors[mode].input
          }}
          className={adminStyles.adminDropdown}
        />
        <Select.Content variant="soft">
          <Select.Group>
            <Select.Label>Choose</Select.Label>
            <Select.Item value="Choose">Choose</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
};
