import { themeColors } from '@colors/themeColors';
import adminStyles from '@components/Common/admin.module.scss';
import { useThemeMode } from '@hooks/useThemeMode';
import { Flex } from '@sekmet/radix-ui-themes';
import React, { useState } from 'react';

export const AdminTabPanel = () => {
  const { mode } = useThemeMode();
  const navItems = ['All', 'Active', 'Paused', 'Inactive'];
  const [activeNav, setActiveNav] = useState('All');
  return (
    <div>
      <div className={adminStyles.adminTabHeader}>
        <h2>Surveys</h2>
        <Flex gap={'3'} align={'center'}>
          <ul
            className={adminStyles.adminTabNav}
            style={{ background: themeColors[mode].input }}
          >
            {navItems.map((item) => (
              <li
                className={
                  item === activeNav ? adminStyles.adminTabNavActive : ''
                }
                style={{
                  background:
                    item === activeNav ? themeColors[mode].headerNavActive : ''
                }}
                key={item}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </Flex>
      </div>
    </div>
  );
};
