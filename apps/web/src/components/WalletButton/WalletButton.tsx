import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Avatar } from '@sekmet/radix-ui-themes';
import React from 'react';

import walletBtnStyles from './walletBtn.module.scss';

export const WalletButton = () => {
  return (
    <div className={walletBtnStyles.walletBtn}>
      <Avatar
        src="/assets/images/profile_pic.svg"
        fallback="Q"
        radius="full"
        size={'2'}
      />
      <ChevronDownIcon />
    </div>
  );
};
