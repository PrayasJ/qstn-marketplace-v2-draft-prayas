import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoStyles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={logoStyles.logo}>
      <Link href="/">
        <Image
          src={'/assets/images/QSTN_logo.svg'}
          height={40}
          width={26}
          alt="QSTN LOGO"
        />
      </Link>
      <span className={logoStyles.logoText}>qstn</span>
    </div>
  );
};
