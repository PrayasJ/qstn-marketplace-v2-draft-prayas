import { Input } from '@components/Input/Input';
import { Logo } from '@components/Logo/Logo';
import { WalletButton } from '@components/WalletButton/WalletButton';
import { useThemeMode } from '@hooks/useThemeMode';
import { Button } from '@sekmet/radix-ui-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import headerStyles from '../Header.module.scss';
import { MobileNav } from '../mobile/MobileNav';
import { DesktopNav } from './DesktopNav';

export const DesktopHeader = () => {
  const pathname = usePathname();
  const { mode } = useThemeMode();
  return (
    <div className={headerStyles.desktopHeader}>
      <div className={headerStyles.leftDesktopNav}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <MobileNav />
          <Logo />
        </div>
        {pathname &&
        !pathname.includes('/login') &&
        !pathname.includes('/forgot-password') &&
        !pathname.includes('/account/') ? (
          <DesktopNav />
        ) : null}
      </div>

      {pathname &&
      !pathname.includes('/login') &&
      !pathname.includes('/forgot-password') &&
      !pathname.includes('/account/') ? (
        <div className={headerStyles.rightDesktopNav}>
          <div className="desktop">
            <Input
              prefixIcon={
                <Image
                  height={20}
                  width={20}
                  alt="h"
                  src={'/assets/images/search-sm.svg'}
                />
              }
              width={300}
              placeholder="Search businesses, users"
            />
          </div>
          <Button
            style={{
              padding: '21px 16px',
              borderRadius: '12px',
              cursor: 'pointer'
            }}
          >
            Upload
          </Button>
          <WalletButton />
        </div>
      ) : (
        <div className="flex items-center justify-start gap-2">
          <Link href="/login">
            <Button
              className="h-24 w-24 rounded-2xl"
              style={{
                padding: '26px 14px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: mode === 'dark' ? '#18181B' : '#FFFFFF',
                color: mode === 'dark' ? 'white' : 'black'
              }}
            >
              Login
            </Button>
          </Link>
          <Button
            className="h-24 w-24 rounded-2xl"
            style={{
              padding: '26px 14px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#A855F7'
            }}
          >
            Sign up
          </Button>
        </div>
      )}
    </div>
  );
};
