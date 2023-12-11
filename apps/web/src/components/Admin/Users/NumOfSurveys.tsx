import { themeColors } from '@colors/themeColors';
import adminStyles from '@components/Common/admin.module.scss';
import { useThemeMode } from '@hooks/useThemeMode';
import { Flex, Slider } from '@sekmet/radix-ui-themes';
import React, { useState } from 'react';

export const NumOfSurveys = () => {
  const [value, setValue] = useState(10);
  const { mode } = useThemeMode();
  return (
    <div>
      <p style={{ marginBottom: '6px' }}>Number of surveys</p>
      <Flex
        gap={'4'}
        align={'center'}
        style={{
          background: themeColors[mode].input,
          color: '#71717A',
          borderRadius: '12px',
          padding: '16px 16px',
          fontSize: '14px'
        }}
        className={adminStyles.numOfSurveys}
      >
        <p
          style={{
            margin: '0',
            color: mode === 'dark' ? '#ffffff' : '#09090B'
          }}
        >
          {value}
        </p>
        <Slider
          defaultValue={[25]}
          size={'1'}
          value={[value]}
          onValueChange={(value) => setValue(value[0])}
          className={adminStyles.slider}
        />
        <p style={{ margin: '0' }}>{'<100'}</p>
      </Flex>
    </div>
  );
};
