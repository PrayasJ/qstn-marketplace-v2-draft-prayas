import { Input } from '@components/Input/Input';
import { useThemeMode } from '@hooks/useThemeMode';
import { TextAlignLeftIcon } from '@radix-ui/react-icons';
import { DropdownMenu, IconButton } from '@sekmet/radix-ui-themes';
import Image from 'next/image';
import React from 'react';

import headerStyles from '../Header.module.scss';
import { NavItem } from '../NavItem';

export const MobileNav = () => {
  const { mode } = useThemeMode();
  const navs = [
    {
      href: '/admin/businesses',
      name: 'businesses',
      iconURL:
        mode === 'dark'
          ? '/assets/images/bank_icon.svg'
          : '/assets/images/bankLight.svg'
    },
    {
      href: '/admin/users',
      name: 'users',
      iconURL:
        mode === 'dark'
          ? '/assets/images/users_icon.svg'
          : '/assets/images/usersLight.svg'
    },
    {
      href: '/admin/surveys',
      name: 'surveys',
      iconURL:
        mode === 'dark'
          ? '/assets/images/bar-chart_icon.svg'
          : '/assets/images/bar-chart_icon_light.svg'
    },
    {
      href: '/admin/marketplace',
      name: 'markeplace',
      iconURL:
        mode === 'dark'
          ? '/assets/images/shopping-bag_icon.svg'
          : '/assets/images/shopping-bag-icon_light.svg'
    }
  ];
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="mobile">
        <IconButton radius="full" className={headerStyles.hambtn}>
          <TextAlignLeftIcon transform="scale(1.5)" />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="mobile">
        <nav className={headerStyles.mobileNav}>
          <ul>
            {navs.map((nav) => (
              <NavItem {...{ ...nav }} key={nav.name} />
            ))}
          </ul>
          <div style={{ marginTop: '1.5rem' }}>
            <Input
              prefixIcon={
                <Image
                  height={20}
                  width={20}
                  alt="h"
                  src={'/assets/images/search-sm.svg'}
                />
              }
              width={'100%'}
              placeholder="Search businessess, users"
            />
          </div>
        </nav>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
