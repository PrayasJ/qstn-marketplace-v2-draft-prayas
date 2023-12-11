export const polygonRpcs = [
  'https://polygon.rpc.thirdweb.com',
  'https://rpc.ankr.com/polygon'
];
export const mumbaiRpcs = [
  'https://mumbai.rpc.thirdweb.com',
  'https://rpc.ankr.com/polygon_mumbai'
];
export const auroraTestnetRpcs = ['https://testnet.aurora.dev'];
export const moonbaseRpcs = ['https://rpc.api.moonbase.moonbeam.network'];
export const bitfinityTestnetRpcs = ['https://testnet.bitfinity.network'];
export const ethereumRpcs = [
  'https://ethereum.rpc.thirdweb.com',
  'https://rpc.ankr.com/eth'
];

/**
 * Get RPC URL based on chainId
 * @param chainId Chain ID
 * @returns RPC URL
 */
const getRpc = (chainId: number) => {
  switch (chainId) {
    case 137:
      return polygonRpcs[Math.floor(Math.random() * polygonRpcs.length)];
    case 80001:
      return mumbaiRpcs[Math.floor(Math.random() * mumbaiRpcs.length)];
    case 1313161554:
      return auroraTestnetRpcs[
        Math.floor(Math.random() * auroraTestnetRpcs.length)
      ];
    case 1287:
      return moonbaseRpcs[Math.floor(Math.random() * moonbaseRpcs.length)];
    case 355113:
      return bitfinityTestnetRpcs[
        Math.floor(Math.random() * bitfinityTestnetRpcs.length)
      ];
    default:
      return ethereumRpcs[Math.floor(Math.random() * ethereumRpcs.length)];
  }
};

export default getRpc;
