import { themeColors } from '@colors/themeColors';
import { useThemeMode } from '@hooks/useThemeMode';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Flex, Switch } from '@sekmet/radix-ui-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import footerStyles from './footer.module.scss';

export const Footer = () => {
  const { mode, setMode } = useThemeMode();
  const pathname = usePathname();
  return pathname &&
    !pathname.includes('/login') &&
    !pathname.includes('/dashboard') &&
    !pathname.includes('/forgot-password') &&
    !pathname.includes('/account/') ? (
    <footer
      className={`${footerStyles.footer}`}
      style={{ borderColor: themeColors[mode].headerNavActive }}
    >
      <Flex justify={'between'} wrap={'wrap'} gap={'6'}>
        <Flex direction={'column'} gap={'4'}>
          <Logo />
          <p>The new creative community.</p>
          <Flex gap={'2'} align={'center'}>
            <Switch
              checked={mode === 'dark' ? false : true}
              onCheckedChange={() =>
                setMode(mode === 'dark' ? 'light' : 'dark')
              }
            />
            <span style={{ fontSize: '12px' }}>
              {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </Flex>
        </Flex>
        <Flex />

        <Flex
          className={footerStyles.footerSubscribe}
          direction={'column'}
          gap={'1'}
        >
          <p>Subscribe to newsletter</p>
          <Input placeholder="Email Address" suffixIcon={<ArrowRightIcon />} />
          <p style={{ color: '#71717A' }}>
            By signing up for email, you agree to QSTN&apos;s
          </p>
          <p style={{ color: '#71717A' }}>
            <span style={{ color: '#A855F7' }}>Terms of Service</span> and{' '}
            <span style={{ color: '#A855F7' }}>Privacy Policy</span>
          </p>
        </Flex>
      </Flex>

      <Flex
        justify={'between'}
        style={{ marginTop: '40px' }}
        wrap={'wrap'}
        gap={'3'}
      >
        <p style={{ color: '#71717A', fontSize: '12px' }}>
          Copyright © 2023 QSTN LLC. All rights reserved
        </p>
        <Flex gap={'2'}>
          <Link href={''} style={{ color: mode === 'light' ? '#27272A' : '' }}>
            Terms of Service
          </Link>
          <Link href={''} style={{ color: mode === 'light' ? '#27272A' : '' }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </footer>
  ) : null;
};
