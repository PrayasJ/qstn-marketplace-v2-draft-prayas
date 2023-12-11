import React from 'react';

import { AdminCard } from './AdminCard';

export const AdminCards = () => {
  return (
    <div>
      <AdminCard name="Binance" src="/assets/images/binance.png" />
      <AdminCard name="Curve finance" src="/assets/images/curve_finance.png" />
      <AdminCard name="avalanche" src="/assets/images/avalanche.png" />
      <AdminCard name="Kava network" src="/assets/images/Kava.png" />
      <AdminCard name="optimism" src="/assets/images/optimism.png" />
      <AdminCard name="solana" src="/assets/images/solana.png" banned />
      <AdminCard name="stellar" src="/assets/images/stellar.png" />
      <AdminCard name="uniswap" src="/assets/images/uniswap.png" />
      <AdminCard name="polkadot" src="/assets/images/polkadot.png" />
    </div>
  );
};
