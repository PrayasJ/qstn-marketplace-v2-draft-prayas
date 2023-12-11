import { themeColors } from '@colors/themeColors';
import { useThemeMode } from '@hooks/useThemeMode';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import headerStyles from './Header.module.scss';

export const NavItem: React.FC<{
  href: string;
  name: string;
  iconURL: string;
}> = ({ href, name, iconURL }) => {
  const pathname = usePathname();
  const { mode } = useThemeMode();

  return (
    <li className={headerStyles.navItem}>
      <Link
        href={href}
        style={{
          background: pathname === href ? themeColors[mode].headerNavActive : ''
        }}
      >
        <Image src={iconURL} alt={`${name} nav Icon`} height={20} width={20} />
        <span>{name}</span>
      </Link>
    </li>
  );
};
