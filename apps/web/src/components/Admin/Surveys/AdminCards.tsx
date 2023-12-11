import React from 'react';

import { AdminCard } from './AdminCard';

const DATA = [
  {
    id: 1,
    name: 'Binance',
    surveyName: 'About AI',
    src: '/assets/images/admin-surveys/binance.svg',
    status: 'active',
    boost: true,
    blockchain: 'ETH',
    reward: '0.000002 WETH',
    rewardIcon: 'WETH',
    participants: 300
  },
  {
    id: 2,
    name: 'Curve Finance',
    surveyName: 'About AI-Finance',
    src: '/assets/images/admin-surveys/curveFinance.svg',
    status: 'inactive',
    boost: true,
    blockchain: 'NEAR',
    reward: 'NFT',
    rewardIcon: 'NFT',
    participants: 125
  },
  {
    id: 3,
    name: 'Avalanche',
    surveyName: 'Avalanche',
    src: '/assets/images/admin-surveys/avalanche.svg',
    status: 'active',
    boost: false,
    blockchain: 'ETH',
    reward: '0.000002 WETH',
    rewardIcon: 'WETH',
    participants: 60
  },
  {
    id: 4,
    name: 'Kava Network',
    surveyName: 'Kava Network',
    src: '/assets/images/admin-surveys/kavaNetwork.svg',
    status: 'active',
    boost: true,
    blockchain: 'NEAR',
    reward: '36.39 MATIC',
    rewardIcon: 'MATIC',
    participants: 300
  },
  {
    id: 5,
    name: 'Optimism',
    surveyName: 'Optimism',
    src: '/assets/images/admin-surveys/optimism.svg',
    status: 'paused',
    boost: false,
    blockchain: 'ETH',
    reward: 'NFT',
    rewardIcon: 'NFT',
    participants: 348
  },
  {
    id: 6,
    name: 'Solana',
    surveyName: 'Solana',
    src: '/assets/images/admin-surveys/solana.svg',
    status: 'paused',
    boost: true,
    blockchain: 'ETH',
    reward: '12.5 DOT',
    rewardIcon: 'DOT',
    participants: 11
  },
  {
    id: 7,
    name: 'Stellar',
    surveyName: 'Stellar',
    src: '/assets/images/admin-surveys/stellar.svg',
    status: 'active',
    boost: false,
    blockchain: 'NEAR',
    reward: '0.000002 WETH',
    rewardIcon: 'WETH',
    participants: 450
  },
  {
    id: 8,
    name: 'UniSwap',
    surveyName: 'UniSwap',
    src: '/assets/images/admin-surveys/uniSwap.svg',
    status: 'active',
    boost: true,
    blockchain: 'ETH',
    reward: 'NFT',
    rewardIcon: 'NFT',
    participants: 1000,
    banned: true
  },
  {
    id: 9,
    name: 'Polkadot',
    surveyName: 'Polkadot',
    src: '/assets/images/admin-surveys/polkadot.svg',
    status: 'active',
    boost: true,
    blockchain: 'DOT',
    reward: '12.5 DOT',
    rewardIcon: 'DOT',
    participants: 125
  }
];

export const AdminCards = () => {
  return (
    <div>
      {DATA.map((data) => (
        <AdminCard key={data.id} data={data} />
      ))}
    </div>
  );
};
