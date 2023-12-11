import { useThemeMode } from '@hooks/useThemeMode';
import React from 'react';

import headerStyles from '../Header.module.scss';
import { NavItem } from '../NavItem';

export const DesktopNav = () => {
  const { mode } = useThemeMode();
  const navs = [
    {
      href: '/admin/businesses',
      name: 'Dashboard',
      iconURL:
        mode === 'dark'
          ? '/assets/images/bank_icon.svg'
          : '/assets/images/bankLight.svg'
    },
    {
      href: '/admin/users',
      name: 'Discover',
      iconURL:
        mode === 'dark'
          ? '/assets/images/users_icon.svg'
          : '/assets/images/usersLight.svg'
    },
    {
      href: '/admin/surveys',
      name: 'Marketplace',
      iconURL:
        mode === 'dark'
          ? '/assets/images/bar-chart_icon.svg'
          : '/assets/images/bar-chart_icon_light.svg'
    },
    {
      href: '/admin/marketplace',
      name: 'Leaderboards',
      iconURL:
        mode === 'dark'
          ? '/assets/images/shopping-bag_icon.svg'
          : '/assets/images/shopping-bag-icon_light.svg'
    }
  ];
  return (
    <nav className={headerStyles.desktopNav}>
      <ul>
        {navs.map((nav) => (
          <NavItem {...{ ...nav }} key={nav.name} />
        ))}
      </ul>
    </nav>
  );
};
