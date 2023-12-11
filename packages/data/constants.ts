import packageJson from '../../package.json';

// Environments
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_PREVIEW = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';

export const IS_MAINNET = false;

// Near Network
//export const MAINNET_API_URL = 'https://api.qstn.us';
//export const TESTNET_API_URL = 'http://127.0.0.1:4000';

// GraphQL / API
export const GRAPHQL_API_URL = IS_PRODUCTION
  ? 'https://graphql.qstnus.com'
  : 'http://localhost:4000';

export const API_URL = IS_PRODUCTION
  ? 'https://near.qstnus.com/api'
  : 'http://localhost:3000/api';

export const API_SERVER_URL = IS_PRODUCTION
  ? 'https://graphql.qstnus.com/api'
  : 'http://localhost:4003/api';

// Application
export const APP_NAME = 'QSTN Marketplace';
export const DESCRIPTION =
  'QSTN powers an ecosystem where users answer questions, earn credits and spend these rewards within our digital environment.';
export const APP_VERSION = packageJson.version;
export const APP_URL = IS_PRODUCTION
  ? 'https://near.qstnus.com'
  : 'http://localhost:3000';

// Git
export const GIT_COMMIT_SHA =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7);

// JWT and Passwordless
export const MAGIC_SECRET_KEY = 'sk_live_47A4FB8D6E7F150C';
export const MAGIC_API_KEY = 'pk_live_4C2CA30E7C7B4950';
export const ACCESS_TOKEN_SECRET =
  '880e307dcaf528af4c3884e0668264ae7639f05431ab675e74b0cabc21d9d6f4';

// OpenAI
export const OPENAI_API_KEY = '';

export const OPENAI_API_KEY_1 = '';

// Email
export const SENDGRID_API_KEY = '';

// Messages
export const ERROR_MESSAGE = 'Something went wrong!';
export const SIGN_WALLET = 'Please sign in your wallet.';
//export const WRONG_NETWORK = IS_MAINNET
//  ? 'Please change network to Near mainnet.'
//  : 'Please change network to Near testnet.';
export const SIGN_ERROR = 'Failed to sign data';

// URLs
export const STATIC_ASSETS_URL = 'https://assets.qstnus.com';
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`;
export const IPFS_GATEWAY = 'https://gateway.ipfscdn.io/ipfs/';
export const STORJ_API = 'https://gateway.storjshare.io';
export const DEFAULT_OG = `${STATIC_IMAGES_URL}/og/logo.jpeg`;

// Workers
export const STS_TOKEN_URL = IS_PRODUCTION
  ? 'https://sts.open4glabs.xyz'
  : 'http://localhost:8082';
export const STORJ_ACCESS_KEY = 'jx6ctlhoi4sfnntxznhtuiftqgjq';
export const STORJ_ACCESS_SECRET =
  'jz6y6afaac2eypb4v3uitd2r7hfvp62zcarsjafrljh6li3dyp7cs';
export const METADATA_IPFS_AUTHORIZATION_KEY = '';
export const IPFSCLIENT_WORKER_URL = IS_PRODUCTION
  ? 'https://qstn-ipfs.open4glabs.xyz'
  : 'http://localhost:8087';

export const NFT_STORAGE_WORKER_URL = IS_PRODUCTION
  ? 'https://nftstorage.open4glabs.xyz'
  : 'https://nftstorage.open4glabs.xyz';
//: 'http://localhost:8097';

export const NFT_STORAGE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFFQzAyOWZCMjNhNUZBOTVkZDA5YTZBNTY0MmVFMjQ5MTEzNTVFZDEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MDU1MjgwNjQ1MSwibmFtZSI6IlFTVE4tQWxwaGEifQ.FS2BQWKbe6BoNCZ7Eub1Ydk80kP57_PIXi_cq6Ie_p8';

// Web3
export const NEAR_MAIN_ACCOUNT = 'qstn-alpha.testnet';
export const NEAR_NFT_CONTRACT_ID = 'nft-testnet.qstn-alpha.testnet';
export const NEAR_MARKETPLACE_CONTRACT_ID =
  'market1-testnet.qstn-alpha.testnet';
export const NEAR_VAULT_CONTRACT_ID = 'vault4-testnet.qstn-alpha.testnet';
export const NEAR_LINKDROP_CONTRACT_ID =
  'proxydrop1-testnet.qstn-alpha.testnet';
export const NEAR_SURVEY_CONTRACT_ID = 'guest-book.testnet';
export const NEAR_PROOFOFWORK_CONTRACT_ID = 'survey-v0.qstn-us.near';

export const WALLETCONNECT_PROJECT_ID = '';

// Payments
export const STRIPE_API_KEY =
  'pk_test_51Mr82UB8Mm7aLlwq1SKUl4fSo6VBiM7fXPm52ZWh8zGYlHUYmrFS5F5vRxfy1UGxsYp5vXtQ5rdiAlfGEfW0qQHR00eqXds7ly';
export const STRIPE_SECRET_KEY =
  'sk_test_51Mr82UB8Mm7aLlwqQEs4Sx2kavXd6y4YWjZg2pc0QCUlNk32ZcbW1rpIxTTp41umxzbwr8HDJYTA1av2XHaruSfl00htVPuqa4';

// Mixpanel
export const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN ?? '';
export const MIXPANEL_ENABLED = MIXPANEL_TOKEN && IS_PRODUCTION;

// Social connectors
// # export const GOOGLE;
export const GOOGLE_CLIENT_ID =
  '872034559166-moume2t7hto3m0t3np0q2piame2bna64.apps.googleusercontent.com';
export const GOOGLE_CLIENT_SECRET = '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';
export const GOOGLE_REDIRECT_URL = `${APP_URL}/survey/callback/google`;

// # export const MICROSOFT;
export const MICROSOFT_CLIENT_ID = '<YOUR_CLIENT_ID>';
export const MICROSOFT_AUTHORITY =
  'https://login.microsoftonline.com/<YOUR_TENANT_ID>';
export const MICROSOFT_CLIENT_SECRET = '<YOUR_CLIENT_SECRET>';

// # export const GITHUB;
export const GITHUB_CLIENT_SECRET = '1449a3ea4f9d9e44bd360b9794eaf94a021002be';
export const GITHUB_CLIENT_ID = '71439aba66a9bee3cd01';
export const GITHUB_REDIRECTURI = `${APP_URL}/survey/callback/github`;

// # export const FACEBOOK;

// # export const TWITTER;
export const TWITTER_API_KEY = 'SWhtSHBQR3pTaUhTc2xyWlZGQng6MTpjaQ';
export const TWITTER_API_SECRET_KEY =
  'W7niZnIrTg757zVk-ap47wbT40gH9XlpV1pD3ovAWoFLgNx-4_';

// # export const DISCORD;
export const DISCORD_CLIENT_ID = '1100267575709007922';
export const DISCORD_CLIENT_SECRET_KEY = '1ovxdzeCrFAtBR7RWEsz3TOIr-9FYG2C';
export const DISCORD_REDIRECT_URI = `${APP_URL}/survey/callback/discord`;
export const DISCORD_AUTH_ENDPOINT = 'https://discord.com/api/oauth2/authorize';
export const DISCORD_TOKEN_ENDPOINT = 'https://discord.com/api/oauth2/token';
export const DISCORD_USER_ENDPOINT = 'https://discord.com/api/users/@me';

// # export const LINKEDIN;
export const LINKEDIN_CLIENT_ID = '';
export const LINKEDIN_CLIENT_SECRET = '';
export const LINKEDIN_REDIRECT_URI = `${APP_URL}/survey/callback/linkedin`;

// # export const RECAPTCHA;
export const RECAPTCHA_SITE_KEY = '';
export const RECAPTCHA_SECRET_KEY = '';

// Errors
export const ERRORS = {
  notMined:
    'A previous transaction may not been mined yet or you have passed in a invalid nonce. You must wait for that to be mined before doing another action, please try again in a few moments. Nonce out of sync.'
};

// Regex
export const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[\da-z]+([.\-][\da-z]+)*\.[a-z]{2,63}(:\d{1,5})?(\/.*)?$/;
export const ADDRESS_REGEX = /^(0x)?[\da-f]{40}$/i;

// Utils
export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif'
];
export const ALLOWED_AUDIO_TYPES = [
  'audio/mpeg',
  'audio/wav',
  'audio/mp4',
  'audio/aac',
  'audio/ogg',
  'audio/webm',
  'audio/flac'
];
export const ALLOWED_VIDEO_TYPES = [
  'video/mp4',
  'video/mpeg',
  'video/ogg',
  'video/webm',
  'video/quicktime'
];
export const ALLOWED_MEDIA_TYPES = [
  ...ALLOWED_VIDEO_TYPES,
  ...ALLOWED_IMAGE_TYPES,
  ...ALLOWED_AUDIO_TYPES
];

// Localstorage keys
export const QSTN_KEYS = {
  QSTN_STORE: 'qstn.store',
  PREFERENCES_STORE: 'preferences.store',
  TRANSACTIONS_STORE: 'transactions.store',
  PLANS_STORE: 'plans.store',
  SURVEY_STORE: 'survey.store',
  MESSAGE_STORE: 'message.store',
  SELECTED_LOCALE: 'selected.locale'
};

// S3 bucket
export const S3_BUCKET = {
  QSTN_MEDIA: 'qstnv01-bucket'
};

// Networks

export const Networks = {
  all: {
    url: 'https://nearblocks.io',
    providerUrl: '',
    ticker: '/assets/images/near-protocol-near-logo.svg'
  },
  ether: {
    url: 'https://etherscan.io',
    providerUrl:
      'https://eth-mainnet.g.alchemy.com/nft/v2/2PjFFTroSExH3HiNQHDwzfIUQJT8z8lq',
    ticker: '/assets/images/ethereum-eth-logo.svg'
  },
  'goerli-network': {
    url: 'https://goerli.etherscan.io',
    providerUrl:
      'https://eth-goerli.g.alchemy.com/nft/v2/puCQE23cFX_IMlbFp2pXdTH72-zfek8B',
    ticker: '/assets/images/ethereum-eth-logo.svg'
  },
  goerli: {
    url: 'https://goerli.etherscan.io',
    providerUrl:
      'https://eth-goerli.g.alchemy.com/nft/v2/puCQE23cFX_IMlbFp2pXdTH72-zfek8B',
    ticker: '/assets/images/ethereum-eth-logo.svg'
  },
  polygon: {
    url: 'https://polygonscan.com',
    providerUrl:
      'https://polygon-mainnet.g.alchemy.com/nft/v2/0PuKiXMqYn3npMSg8_qYjdXJKtLPhlvz',
    ticker: '/assets/images/polygon-matic-logo.svg',
    CA: '0x670fd103b1a08628e9557cD66B87DeD841115190'
  },
  'polygon-network': {
    url: 'https://mumbai.polygonscan.com',
    providerUrl:
      'https://polygon-mumbai.g.alchemy.com/nft/v2/HDEdGtOijcS7SH78IGaXl4Q01hmmcF65',
    ticker: '/assets/images/polygon-matic-logo.svg'
  },
  'moonbeam-network': {
    url: 'https://explorer.aurora.dev',
    providerUrl: '',
    ticker: '/assets/images/moonbeam.svg'
  },
  'avax-network': {
    url: 'https://explorer.aurora.dev',
    providerUrl: '',
    ticker: '/assets/images/avax.png'
  },
  'hedera-network': {
    url: 'https://hashscan.io/testnet/dashboard',
    providerUrl: '',
    ticker: '/assets/images/hbar.png'
  },
  'aurora-network': {
    url: 'https://explorer.aurora.dev',
    providerUrl: '',
    ticker: '/assets/images/aurora-aoa-logo.svg'
  },
  'near-protocol': {
    url: 'https://nearblocks.io',
    providerUrl: `${API_SERVER_URL}/api/near`,
    ticker: '/assets/images/near-protocol-near-logo.svg'
  },
  'icp-network': {
    url: 'https://icscan.io',
    providerUrl: `${API_SERVER_URL}/api/icp`,
    ticker: '/assets/images/icp-logo.svg'
  },
  'bitfinity-network': {
    url: 'https://explorer.bitfinity.network',
    providerUrl: `${API_SERVER_URL}/api/bitfinity`,
    ticker: '/assets/images/bitfinityLogin.jpg'
  },
  'opbnb-network': {
    url: 'https://opbnb-testnet.bscscan.com',
    providerUrl: `${API_SERVER_URL}/api/opbnb`,
    ticker: '/assets/images/optimism.svg'
  },
  'stellar-futurenet': {
    url: 'https://lumenscan.io',
    providerUrl: `${API_SERVER_URL}/api/stellar`,
    ticker: '/assets/images/stellar-xlm-logo.png'
  },
  'near-testnet': {
    url: 'https://testnet.nearblocks.io',
    providerUrl: `${API_SERVER_URL}/api/near`,
    ticker: '/assets/images/near-protocol-near-logo.svg'
  },
  'polkadot-network': {
    url: 'https://explorer.polkascan.io/polkadot',
    providerUrl: '',
    ticker: '/assets/images/polkadot-new-dot-logo.svg'
  }
};
