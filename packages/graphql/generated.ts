import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AccessGating: { input: any; output: any };
  BlockchainData: { input: any; output: any };
  BusinessCategory: { input: any; output: any };
  ChainId: { input: any; output: any };
  Cid: { input: any; output: any };
  ClaimId: { input: any; output: any };
  ContentEncryptionKey: { input: any; output: any };
  ContractAddress: { input: any; output: any };
  CredibilityScore: { input: any; output: any };
  Cursor: { input: any; output: any };
  DateTime: { input: any; output: any };
  Did: { input: any; output: any };
  Email: { input: any; output: any };
  EncryptedValueScalar: { input: any; output: any };
  EvmAddress: { input: any; output: any };
  InternalSurveyId: { input: any; output: any };
  Jwt: { input: any; output: any };
  LimitScalar: { input: any; output: any };
  Locale: { input: any; output: any };
  MimeType: { input: any; output: any };
  NearAddress: { input: any; output: any };
  NftGalleryId: { input: any; output: any };
  NftGalleryName: { input: any; output: any };
  NftId: { input: any; output: any };
  NftOwnershipId: { input: any; output: any };
  Nonce: { input: any; output: any };
  NotificationId: { input: any; output: any };
  ProfileId: { input: any; output: any };
  Search: { input: any; output: any };
  Signature: { input: any; output: any };
  StripeAccountId: { input: any; output: any };
  SurveyData: { input: any; output: any };
  SurveyId: { input: any; output: any };
  SurveyUrl: { input: any; output: any };
  Tag: { input: any; output: any };
  TimestampScalar: { input: any; output: any };
  TokenId: { input: any; output: any };
  TxHash: { input: any; output: any };
  TxId: { input: any; output: any };
  UnixTimestamp: { input: any; output: any };
  Url: { input: any; output: any };
  Void: { input: any; output: any };
};

export enum AccountStatus {
  Authorized = 'AUTHORIZED',
  Banned = 'BANNED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

export enum AccountType {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  Enduser = 'ENDUSER',
  Root = 'ROOT',
  Unknown = 'UNKNOWN',
  Unknownwallet = 'UNKNOWNWALLET'
}

export type AllCryptoRewardInUsd = {
  __typename?: 'AllCryptoRewardInUSD';
  amountUsd?: Maybe<Scalars['Float']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

export type AnonymousUser = {
  __typename?: 'AnonymousUser';
  anonId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  fingerprint: Scalars['String']['output'];
  profileId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AnonymousUserQueryRequest = {
  fingerprint: Scalars['String']['input'];
  profileId?: InputMaybe<Scalars['Int']['input']>;
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  /** The text to sign */
  text: Scalars['String']['output'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt']['output'];
  /** The refresh token */
  refreshToken: Scalars['Jwt']['output'];
};

export type AverageSurveyCompletionRatesByUser = {
  __typename?: 'AverageSurveyCompletionRatesByUser';
  percentageCompletionAverage?: Maybe<Scalars['Float']['output']>;
  profileId?: Maybe<Scalars['ProfileId']['output']>;
};

export type BanUnbanUserRequest = {
  /** The action ban/unban type */
  actionType: Scalars['String']['input'];
  /** The user profile ID */
  profileId: Scalars['ProfileId']['input'];
};

export type BooleanElement = {
  __typename?: 'BooleanElement';
  correctAnswer?: Maybe<Scalars['String']['output']>;
  isRequired: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: SurveyElementType;
};

/** Business search results */
export type BusinessSearchResult = {
  __typename?: 'BusinessSearchResult';
  items: Array<User>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type Campaign = {
  __typename?: 'Campaign';
  campaignId: Scalars['ID']['output'];
  campaignType: SurveyCampaignType;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  surveys: Array<Survey>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
};

export type CategoriesRequest = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The challenge request */
export type ChallengeRequest = {
  /** The email address you want to login with */
  email: Scalars['Email']['input'];
};

/** Chart type data results */
export type ChartDataLabels = {
  __typename?: 'ChartDataLabels';
  avgCompletionTime?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Scalars['Int']['output']>>;
  labels?: Maybe<Array<Scalars['String']['output']>>;
  rankingCompletions?: Maybe<Array<Maybe<RankTopCompletions>>>;
  totalBusiness?: Maybe<Scalars['Int']['output']>;
  totalCompletions?: Maybe<Scalars['Int']['output']>;
  totalPageviews?: Maybe<Scalars['Int']['output']>;
  totalSurveys?: Maybe<Scalars['Int']['output']>;
};

export type ClaimMarketplaceOrderMediaRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  mediaId: Scalars['ID']['input'];
  orderId?: InputMaybe<Scalars['ID']['input']>;
  ownerAddress: Scalars['NearAddress']['input'];
  profileId: Scalars['ProfileId']['input'];
};

export type ClaimSurveyMediaRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  mediaId: Scalars['ID']['input'];
  ownerAddress: Scalars['NearAddress']['input'];
  profileId: Scalars['ProfileId']['input'];
  surveyId: Scalars['SurveyId']['input'];
};

export type ClaimSurveyRewardRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  profileId: Scalars['ProfileId']['input'];
  surveyId: Scalars['SurveyId']['input'];
};

export type CommentElement = {
  __typename?: 'CommentElement';
  correctAnswer?: Maybe<Scalars['String']['output']>;
  isRequired: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: SurveyElementType;
};

export type CreateAnonymousUserRequest = {
  fingerprint: Scalars['String']['input'];
};

export type CreateEmbedSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  fingerprint: Scalars['String']['input'];
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  result: Scalars['SurveyData']['input'];
  rewardId?: InputMaybe<Scalars['ID']['input']>;
  rewardType?: InputMaybe<Scalars['String']['input']>;
  surveyId: Scalars['ID']['input'];
};

export type CreateFillingQueueRequest = {
  metadata?: InputMaybe<Scalars['String']['input']>;
  profileId: Scalars['ProfileId']['input'];
  status: Scalars['String']['input'];
  surveyId: Scalars['SurveyId']['input'];
  type: Scalars['String']['input'];
};

export type CreateMarketplaceOrderRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  orderAmount: Scalars['Int']['input'];
  orderStatus: Scalars['String']['input'];
  orderType: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
  profileId: Scalars['ProfileId']['input'];
};

export type CreateProductRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  productStatus: Scalars['String']['input'];
  productType: Scalars['String']['input'];
  profileId: Scalars['ProfileId']['input'];
  sellerId?: InputMaybe<Scalars['ProfileId']['input']>;
  whiteList?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProfileRequest = {
  /** The user account type */
  accountType?: InputMaybe<AccountType>;
  /** The user profile image */
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** The business user name */
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** The business category */
  category?: InputMaybe<Scalars['BusinessCategory']['input']>;
  /** The user display name */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** The user email */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The user first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The user Iden3 DID */
  iden3issuer?: InputMaybe<Scalars['Did']['input']>;
  /** The enduser interests */
  interests?: InputMaybe<Array<Scalars['BusinessCategory']['input']>>;
  /** The user DID */
  issuer?: InputMaybe<Scalars['Did']['input']>;
  /** User last login */
  lastLoginAt: Scalars['UnixTimestamp']['input'];
  /** The user last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSurveyGatingRequest = {
  /** The profile id of the creator */
  profileId: Scalars['ProfileId']['input'];
  requirements: Scalars['AccessGating']['input'];
  /** The Survey id */
  surveyId: Scalars['SurveyId']['input'];
};

export type CreateSurveyReferralRequest = {
  invitedEmail: Scalars['Email']['input'];
  profileId: Scalars['ProfileId']['input'];
  surveyId?: InputMaybe<Scalars['SurveyId']['input']>;
};

export type CreateSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  profileId: Scalars['ProfileId']['input'];
  result: Scalars['SurveyData']['input'];
  rewardId?: InputMaybe<Scalars['ID']['input']>;
  rewardType?: InputMaybe<Scalars['String']['input']>;
  surveyId: Scalars['ID']['input'];
};

export type CreateSurveyRewardRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  profileId: Scalars['ProfileId']['input'];
  rewardType: Scalars['String']['input'];
  surveyId: Scalars['SurveyId']['input'];
};

export type CreateUserBoostRequest = {
  endAt: Scalars['DateTime']['input'];
  /** The user profile ID */
  profileId: Scalars['ProfileId']['input'];
};

export type CreateUserContractRequest = {
  contractAddress: Scalars['ContractAddress']['input'];
  contractName: Scalars['String']['input'];
  contractType: Scalars['String']['input'];
  funcCall: Scalars['String']['input'];
  input: Scalars['String']['input'];
  network: Scalars['ChainId']['input'];
  output: Scalars['String']['input'];
  ownerAddress: Scalars['ContractAddress']['input'];
  /** The user profile ID */
  profileId: Scalars['ProfileId']['input'];
  surveyId?: InputMaybe<Scalars['SurveyId']['input']>;
};

export type CreateUserMembershipRequest = {
  endAt: Scalars['DateTime']['input'];
  /** The user profile ID */
  profileId: Scalars['ProfileId']['input'];
};

export type CreateUserRefferalRequest = {
  invitedEmail: Scalars['Email']['input'];
  profileId: Scalars['ProfileId']['input'];
  surveyId?: InputMaybe<Scalars['SurveyId']['input']>;
};

export type CreateWalletRequest = {
  credit: Scalars['Int']['input'];
  profileId: Scalars['ProfileId']['input'];
  recipient?: InputMaybe<Scalars['String']['input']>;
};

/** Business Data Types */
export type CryptoIssued = {
  __typename?: 'CryptoIssued';
  amountCrypto?: Maybe<Scalars['Int']['output']>;
  businessId: Scalars['ProfileId']['output'];
  cryptoValueInUSD?: Maybe<Scalars['Float']['output']>;
};

export type CryptoIssuedAllBlockchains = {
  __typename?: 'CryptoIssuedAllBlockchains';
  businessId: Scalars['ProfileId']['output'];
  cryptoValueInUSD?: Maybe<Scalars['Float']['output']>;
};

/** User Data Types */
export type CryptoReward = {
  __typename?: 'CryptoReward';
  amountCrypto?: Maybe<Scalars['Int']['output']>;
  amountUsd?: Maybe<Scalars['Float']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

/** The custom filters types */
export enum CustomFiltersTypes {
  Qstnstaff = 'QSTNSTAFF'
}

export type DataBusiness = {
  __typename?: 'DataBusiness';
  highestConversionRate?: Maybe<Array<Maybe<HighestConversionRate>>>;
  highestNumberOfParticipantsEngaged?: Maybe<
    Array<Maybe<HighestNumberOfParticipantsEngaged>>
  >;
  highestNumberOfSuccessfulSurveyCampaigns?: Maybe<
    Array<Maybe<HighestNumberOfSuccessfulSurveyCampaigns>>
  >;
  mostCashValueIssuedViaSurveysViaStripe?: Maybe<
    Array<Maybe<MostCashValueIssuedViaSurveysViaStripe>>
  >;
  mostCompletedSurveys?: Maybe<MostCompletedSurveys>;
  mostCryptocurrencyValueIssuedViaSurveys?: Maybe<MostCryptocurrencyValueIssuedViaSurveys>;
  mostDiverseSurveyTopicsCovered?: Maybe<
    Array<Maybe<MostDiverseSurveyTopicsCovered>>
  >;
  mostIssuedSurveys?: Maybe<Array<Maybe<MostIssuedSurveys>>>;
};

export type DataUser = {
  __typename?: 'DataUser';
  highestAverageSurveyCompletionRate?: Maybe<HighestAverageSurveyCompletionRate>;
  highestNumberOfConsecutiveDaysWithSurveyCompletions?: Maybe<
    Array<Maybe<HighestNumberOfConsecutiveDaysWithSurveyCompletions>>
  >;
  mostActiveParticipationInSpecificTypesOfSurveys?: Maybe<MostActiveParticipationInSpecificTypesOfSurveys>;
  mostCompletedSurveysInSpecificCategory?: Maybe<
    Array<Maybe<MostCompletedSurveysInSpecificCategory>>
  >;
  mostConsistentSurveyCompletionFrequency?: Maybe<MostConsistentSurveyCompletionFrequency>;
  mostCreativeAndUniqueSurveyResponses?: Maybe<MostCreativeAndUniqueSurveyResponses>;
  mostCryptocurrencySpentNFTMarketplace?: Maybe<MostCryptocurrencySpentNftMarketplace>;
  mostDollarsSpentNFTMarketplace?: Maybe<
    Array<Maybe<MostDollarsSpentNftMarketplace>>
  >;
  mostEarnedCashRewards?: Maybe<Array<Maybe<MostEarnedCashRewards>>>;
  mostEarnedCryptocurrencyRewards?: Maybe<MostEarnedCryptocurrencyRewards>;
  mostEngagementWithCommunityFeatures?: Maybe<
    Array<Maybe<MostEngagementWithCommunityFeatures>>
  >;
  mostInvitedUsers?: Maybe<Array<Maybe<MostInvitedUsers>>>;
  mostReferralsConvertedIntoActiveSurveyParticipants?: Maybe<
    Array<Maybe<MostReferralsConvertedIntoActiveSurveyParticipants>>
  >;
  userMostCompletedSurveys?: Maybe<Array<Maybe<UserMostCompletedSurveys>>>;
};

export type DeleteFillingQueueRequest = {
  fillingId: Scalars['ID']['input'];
};

export type DeleteProductRequest = {
  productId: Scalars['ID']['input'];
};

export type DeleteSurveyResultRequest = {
  resultsId: Scalars['ID']['input'];
};

export type DeleteTransactionCreditRequest = {
  transactionId: Scalars['ID']['input'];
};

export type DeleteWalletRequest = {
  walletId: Scalars['ID']['input'];
};

export type EmbedSurveyResult = {
  __typename?: 'EmbedSurveyResult';
  chainId?: Maybe<Scalars['ChainId']['output']>;
  cidHash?: Maybe<Scalars['Cid']['output']>;
  claimId?: Maybe<Scalars['ClaimId']['output']>;
  createdAt: Scalars['DateTime']['output'];
  embedResultsId: Scalars['ID']['output'];
  fingerprint: Scalars['String']['output'];
  mediaClaimed?: Maybe<Scalars['Boolean']['output']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']['output']>;
  result: Scalars['SurveyData']['output'];
  rewardClaimed?: Maybe<Scalars['Boolean']['output']>;
  rewardClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  rewardId?: Maybe<Scalars['ID']['output']>;
  rewardType?: Maybe<Scalars['String']['output']>;
  survey?: Maybe<Survey>;
};

export type EmbedSurveyResultQueryRequest = {
  /** The result creation date */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The anon participants ids */
  fingerprints?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The participants ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The results ids */
  resultsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
};

/** Enduser search results */
export type EnduserSearchResult = {
  __typename?: 'EnduserSearchResult';
  items: Array<User>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** The nft type */
export type Erc721 = {
  __typename?: 'Erc721';
  /** aka "1"  */
  chainId: Scalars['ChainId']['output'];
  /** aka "NearPunks"  */
  collectionName: Scalars['String']['output'];
  /** aka "https://api.punks..."  */
  contentUri: Scalars['String']['output'];
  /** aka genesis.nearpunksv10.near */
  contractAddress: Scalars['ContractAddress']['output'];
  /** aka us NearPunks */
  contractName?: Maybe<Scalars['String']['output']>;
  /** aka "Astalavista Baby. ....  */
  description: Scalars['String']['output'];
  /** aka "ERC1155"  */
  ercType: Scalars['String']['output'];
  /** aka "Terminator Punk"  */
  name: Scalars['String']['output'];
  /** The NFT internal id */
  nftId: Scalars['NftId']['output'];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent?: Maybe<NftContent>;
  /** aka { address: owner.nearpunksv10.near, amount:"1" }  */
  owners?: Maybe<Array<Owner>>;
  /** aka RARI */
  symbol: Scalars['String']['output'];
  /** aka "13"  */
  tokenId?: Maybe<Scalars['String']['output']>;
};

export type FillingQueue = {
  __typename?: 'FillingQueue';
  claimId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  fillingId: Scalars['ID']['output'];
  fillingStatus: FillingStatus;
  fillingType: FillingType;
  metadata?: Maybe<Scalars['EncryptedValueScalar']['output']>;
  survey?: Maybe<Survey>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type FillingQueueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  isQueue?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The creators ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The filling survey status */
  status?: InputMaybe<FillingStatus>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
  /** The filling survey type */
  type?: InputMaybe<FillingType>;
};

export enum FillingStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING',
  Started = 'STARTED'
}

export enum FillingType {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Tutorial = 'TUTORIAL'
}

export type GoodsOwnedMedia = {
  __typename?: 'GoodsOwnedMedia';
  mediaId?: Maybe<Scalars['String']['output']>;
};

export type HighestAverageSurveyCompletionRate = {
  __typename?: 'HighestAverageSurveyCompletionRate';
  highestAverageSurveyCompletion?: Maybe<
    Array<Maybe<AverageSurveyCompletionRatesByUser>>
  >;
};

export type HighestConversionRate = {
  __typename?: 'HighestConversionRate';
  businessId: Scalars['Int']['output'];
  conversionPercentageRate?: Maybe<Scalars['Float']['output']>;
  convertedPurchasers?: Maybe<Scalars['Int']['output']>;
  uniqueParticipants?: Maybe<Scalars['Int']['output']>;
};

export type HighestNumberOfConsecutiveDaysWithSurveyCompletions = {
  __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions';
  longestDailyStreak?: Maybe<Scalars['Int']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

export type HighestNumberOfParticipantsEngaged = {
  __typename?: 'HighestNumberOfParticipantsEngaged';
  businessId: Scalars['ProfileId']['output'];
  campaignId?: Maybe<Scalars['Int']['output']>;
  numberOfParticipants?: Maybe<Scalars['Int']['output']>;
};

export type HighestNumberOfSuccessfulSurveyCampaigns = {
  __typename?: 'HighestNumberOfSuccessfulSurveyCampaigns';
  businessId: Scalars['ProfileId']['output'];
  numberOfSuccessfulCampaigns?: Maybe<Scalars['Int']['output']>;
};

export type Iden3IssuerProfileQueryRequest = {
  /** The email for the profile */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The profile iden3 did */
  iden3issuer?: InputMaybe<Scalars['Did']['input']>;
};

export type InviteUserRequest = {
  /** The user account type */
  accountType: AccountType;
  /** The user profile image */
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** The user display name */
  displayName: Scalars['String']['input'];
  /** The user email */
  email: Scalars['Email']['input'];
};

export type IssuerProfileQueryRequest = {
  /** The email for the profile */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The profile did */
  issuer?: InputMaybe<Scalars['Did']['input']>;
};

export type LeaderboardEntriesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  leaderboardId: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
};

/** leaderboard entries result */
export type LeaderboardEntriesResult = {
  __typename?: 'LeaderboardEntriesResult';
  items?: Maybe<Array<LeaderboardEntry>>;
  pageInfo?: Maybe<PaginatedResultInfo>;
};

/** The leaderboard result info */
export type LeaderboardEntry = {
  __typename?: 'LeaderboardEntry';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iden3issuer?: Maybe<Scalars['String']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  leaderboardEntryId: Scalars['Int']['output'];
  leaderboardId: Scalars['Int']['output'];
  points?: Maybe<Scalars['Float']['output']>;
  profileId: Scalars['Int']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
};

export type MarketplaceOrder = {
  __typename?: 'MarketplaceOrder';
  chainId?: Maybe<Scalars['ChainId']['output']>;
  createdAt: Scalars['DateTime']['output'];
  mediaClaimed?: Maybe<Scalars['Boolean']['output']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  orderAmount: Scalars['Float']['output'];
  orderId: Scalars['ID']['output'];
  orderStatus: Scalars['String']['output'];
  orderType: Scalars['String']['output'];
  paymentType: Scalars['String']['output'];
  productId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type MarketplaceOrderQueryRequest = {
  /** The order id */
  orderId?: InputMaybe<Scalars['ID']['input']>;
  /** The product ids */
  productIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The order status */
  status?: InputMaybe<Scalars['String']['input']>;
};

export type MarketplaceOrdersQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MarketplaceProduct = {
  __typename?: 'MarketplaceProduct';
  chainId?: Maybe<Scalars['ChainId']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  mediaId?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productId: Scalars['ID']['output'];
  productStatus: Scalars['String']['output'];
  productType: Scalars['String']['output'];
  sellerId?: Maybe<Scalars['ProfileId']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whiteList?: Maybe<Scalars['String']['output']>;
};

/** Marketplace search results */
export type MarketplaceSearchResult = {
  __typename?: 'MarketplaceSearchResult';
  items: Array<MarketplaceProduct>;
  pageInfo?: Maybe<PaginatedResultInfo>;
  type: SearchRequestTypes;
};

export type Media = {
  __typename?: 'Media';
  cid?: Maybe<Scalars['Cid']['output']>;
  copiesLimit: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  mediaId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  price: Scalars['Float']['output'];
  type?: Maybe<MediaType>;
  whiteList?: Maybe<Array<Maybe<User>>>;
};

export type MediaBoughtAndSold = {
  __typename?: 'MediaBoughtAndSold';
  mediaId: Scalars['String']['output'];
};

export type MediaBoughtAndSoldRequest = {
  profileId: Scalars['ProfileId']['input'];
};

export type MediaSold = {
  __typename?: 'MediaSold';
  mediaId?: Maybe<Scalars['String']['output']>;
};

export enum MediaType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Metadata = {
  __typename?: 'Metadata';
  copies?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  media: Scalars['String']['output'];
  mediaHash?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  referenceHash?: Maybe<Scalars['String']['output']>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MostActiveParticipationInSpecificTypesOfSurveys = {
  __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys';
  multipleChoiceSurveysRankings?: Maybe<Array<Maybe<MultipleChoiceSurveys>>>;
  openEndedSurveysRankings?: Maybe<Array<Maybe<OpenEndedSurveys>>>;
};

export type MostCashValueIssuedViaSurveysViaStripe = {
  __typename?: 'MostCashValueIssuedViaSurveysViaStripe';
  amountCash?: Maybe<Scalars['Float']['output']>;
  businessId: Scalars['ProfileId']['output'];
};

export type MostCompletedAll = {
  __typename?: 'MostCompletedAll';
  businessId?: Maybe<Scalars['ProfileId']['output']>;
  totalCompleted?: Maybe<Scalars['Int']['output']>;
};

export type MostCompletedNear = {
  __typename?: 'MostCompletedNear';
  businessId?: Maybe<Scalars['ProfileId']['output']>;
  numberOfSurveysNear?: Maybe<Scalars['Int']['output']>;
};

export type MostCompletedPolkadot = {
  __typename?: 'MostCompletedPolkadot';
  businessId?: Maybe<Scalars['ProfileId']['output']>;
  numberOfSurveysPolkadot?: Maybe<Scalars['Int']['output']>;
};

export type MostCompletedPolygon = {
  __typename?: 'MostCompletedPolygon';
  businessId?: Maybe<Scalars['ProfileId']['output']>;
  numberOfSurveysPolygon?: Maybe<Scalars['Int']['output']>;
};

export type MostCompletedSurveys = {
  __typename?: 'MostCompletedSurveys';
  mostCompletedAll?: Maybe<Array<Maybe<MostCompletedAll>>>;
  mostCompletedNear?: Maybe<Array<Maybe<MostCompletedNear>>>;
  mostCompletedPolkadot?: Maybe<Array<Maybe<MostCompletedPolkadot>>>;
  mostCompletedPolygon?: Maybe<Array<Maybe<MostCompletedPolygon>>>;
};

export type MostCompletedSurveysInSpecificCategory = {
  __typename?: 'MostCompletedSurveysInSpecificCategory';
  categoryName?: Maybe<Scalars['String']['output']>;
  profileId: Scalars['ProfileId']['output'];
  surveysCompleted?: Maybe<Scalars['Int']['output']>;
};

export type MostConsistentSurveyCompletionFrequency = {
  __typename?: 'MostConsistentSurveyCompletionFrequency';
  daily?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
  monthly?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
  weekly?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
  yearly?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
};

export type MostCreativeAndUniqueSurveyResponses = {
  __typename?: 'MostCreativeAndUniqueSurveyResponses';
  mediaRating?: Maybe<Array<Maybe<Rating>>>;
  surveyResponseRating?: Maybe<Array<Maybe<Rating>>>;
};

export type MostCryptocurrencySpentNftMarketplace = {
  __typename?: 'MostCryptocurrencySpentNFTMarketplace';
  mostSpentNear?: Maybe<Array<Maybe<CryptoReward>>>;
  mostSpentPolkadot?: Maybe<Array<Maybe<CryptoReward>>>;
  mostSpentPolygon?: Maybe<Array<Maybe<CryptoReward>>>;
};

export type MostCryptocurrencyValueIssuedViaSurveys = {
  __typename?: 'MostCryptocurrencyValueIssuedViaSurveys';
  mostIssuedInTotal?: Maybe<Array<Maybe<CryptoIssuedAllBlockchains>>>;
  mostIssuedNear?: Maybe<Array<Maybe<CryptoIssued>>>;
  mostIssuedPolkadot?: Maybe<Array<Maybe<CryptoIssued>>>;
  mostIssuedPolygon?: Maybe<Array<Maybe<CryptoIssued>>>;
};

export type MostDiverseSurveyTopicsCovered = {
  __typename?: 'MostDiverseSurveyTopicsCovered';
  allTopics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  businessId: Scalars['ProfileId']['output'];
  campaignId?: Maybe<Scalars['Int']['output']>;
  numberOfTopics?: Maybe<Scalars['Int']['output']>;
};

export type MostDollarsSpentNftMarketplace = {
  __typename?: 'MostDollarsSpentNFTMarketplace';
  profileId: Scalars['ProfileId']['output'];
  realDollarsSpent?: Maybe<Scalars['Float']['output']>;
};

export type MostEarnedCashRewards = {
  __typename?: 'MostEarnedCashRewards';
  mostCashViaStripe?: Maybe<Scalars['Float']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

export type MostEarnedCryptocurrencyRewards = {
  __typename?: 'MostEarnedCryptocurrencyRewards';
  nearRewards?: Maybe<Array<Maybe<CryptoReward>>>;
  polkadotRewards?: Maybe<Array<Maybe<CryptoReward>>>;
  polygonRewards?: Maybe<Array<Maybe<CryptoReward>>>;
  totalCryptoInCash?: Maybe<Array<Maybe<AllCryptoRewardInUsd>>>;
};

export type MostEngagementWithCommunityFeatures = {
  __typename?: 'MostEngagementWithCommunityFeatures';
  profileId: Scalars['ProfileId']['output'];
  totalPosts?: Maybe<Scalars['Int']['output']>;
};

export type MostInvitedUsers = {
  __typename?: 'MostInvitedUsers';
  profileId: Scalars['ProfileId']['output'];
  usersInvited?: Maybe<Scalars['Int']['output']>;
};

export type MostIssuedSurveys = {
  __typename?: 'MostIssuedSurveys';
  businessId: Scalars['ProfileId']['output'];
  numberOfSurveys?: Maybe<Scalars['Int']['output']>;
};

export type MostReferralsConvertedIntoActiveSurveyParticipants = {
  __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants';
  profileId: Scalars['ProfileId']['output'];
  referralsSent?: Maybe<Scalars['Int']['output']>;
  referredParticipantCount?: Maybe<Scalars['Int']['output']>;
};

export type MultipleChoiceSurveys = {
  __typename?: 'MultipleChoiceSurveys';
  multipleChoiceSurveys?: Maybe<Scalars['Int']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthenticationResult;
  banUnbanUser: User;
  claimMarketplaceOrderMedia: MarketplaceOrder;
  claimSurveyMedia: SurveyReward;
  claimSurveyReward: SurveyReward;
  createAnonymousUser: AnonymousUser;
  createEmbedSurveyResult: EmbedSurveyResult;
  /** Create a new ERC721 NFT gallery */
  createErc721NftGallery: Scalars['NftGalleryId']['output'];
  createFillingQueue: FillingQueue;
  createMarketplaceOrder: MarketplaceOrder;
  /** Create a new NFT gallery */
  createNftGallery: Scalars['NftGalleryId']['output'];
  createProduct: MarketplaceProduct;
  createProfile: User;
  createSurvey: Survey;
  createSurveyGating: SurveyGating;
  createSurveyReferral: SurveyReferral;
  createSurveyResult: SurveyResult;
  createSurveyReward: SurveyReward;
  createTransactionCredit: TransactionCredit;
  createTransactionDebit: TransactionCredit;
  createUserBoost: UserBoost;
  createUserContract: UserContract;
  createUserMembership: UserMembership;
  createUserRefferal: UserRefferal;
  createWallet: Wallet;
  deleteFillingQueue?: Maybe<Scalars['Void']['output']>;
  /** Delete an NFT Gallery */
  deleteNftGallery?: Maybe<Scalars['Void']['output']>;
  deleteProduct?: Maybe<Scalars['Void']['output']>;
  deleteSurvey?: Maybe<Scalars['Void']['output']>;
  deleteSurveyResult?: Maybe<Scalars['Void']['output']>;
  deleteTransactionCredit?: Maybe<Scalars['Void']['output']>;
  deleteWallet: Scalars['Boolean']['output'];
  inviteUser: User;
  refresh: AuthenticationResult;
  refundMarketplaceOrder: MarketplaceOrder;
  registryUserPrize: UserPrize;
  scoreSurveyResult: SurveyResult;
  syncMediaProducts?: Maybe<Scalars['Void']['output']>;
  syncNftGallery?: Maybe<Scalars['Void']['output']>;
  syncPageviewSources?: Maybe<Scalars['Void']['output']>;
  updateAnonymousUser: AnonymousUser;
  updateEmbedSurveyResult: EmbedSurveyResult;
  updateFillingQueue: FillingQueue;
  updateMarketplaceOrder: MarketplaceOrder;
  /** Update the name of an NFT gallery */
  updateNftGalleryInfo?: Maybe<Scalars['Void']['output']>;
  /** Add and/or remove NFTs to a gallery */
  updateNftGalleryItems?: Maybe<Scalars['Void']['output']>;
  /** Update the order of NFTs in a gallery */
  updateNftGalleryOrder?: Maybe<Scalars['Void']['output']>;
  updateProduct: MarketplaceProduct;
  updateProfile: User;
  updateSurvey: Survey;
  updateSurveyGating: SurveyGating;
  updateSurveyReferral: SurveyReferral;
  updateSurveyResult: SurveyResult;
  updateSurveyReward: SurveyReward;
  updateTransactionCredit: TransactionCredit;
  updateUserBoost: UserBoost;
  updateUserMembership: UserMembership;
  updateUserRefferal: UserRefferal;
  updateWallet: Wallet;
  verifyUser: User;
};

export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};

export type MutationBanUnbanUserArgs = {
  request: BanUnbanUserRequest;
};

export type MutationClaimMarketplaceOrderMediaArgs = {
  request: ClaimMarketplaceOrderMediaRequest;
};

export type MutationClaimSurveyMediaArgs = {
  request: ClaimSurveyMediaRequest;
};

export type MutationClaimSurveyRewardArgs = {
  request: ClaimSurveyRewardRequest;
};

export type MutationCreateAnonymousUserArgs = {
  request: CreateAnonymousUserRequest;
};

export type MutationCreateEmbedSurveyResultArgs = {
  request: CreateEmbedSurveyResultRequest;
};

export type MutationCreateErc721NftGalleryArgs = {
  request: NftGalleryCreateRequest;
};

export type MutationCreateFillingQueueArgs = {
  request: CreateFillingQueueRequest;
};

export type MutationCreateMarketplaceOrderArgs = {
  request: CreateMarketplaceOrderRequest;
};

export type MutationCreateNftGalleryArgs = {
  request: NftGalleryCreateRequest;
};

export type MutationCreateProductArgs = {
  request: CreateProductRequest;
};

export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};

export type MutationCreateSurveyArgs = {
  request: SurveyCreateRequest;
};

export type MutationCreateSurveyGatingArgs = {
  request: CreateSurveyGatingRequest;
};

export type MutationCreateSurveyReferralArgs = {
  request: CreateSurveyReferralRequest;
};

export type MutationCreateSurveyResultArgs = {
  request: CreateSurveyResultRequest;
};

export type MutationCreateSurveyRewardArgs = {
  request: CreateSurveyRewardRequest;
};

export type MutationCreateTransactionCreditArgs = {
  request: TransactionCreditRequest;
};

export type MutationCreateTransactionDebitArgs = {
  request: TransactionDebitRequest;
};

export type MutationCreateUserBoostArgs = {
  request: CreateUserBoostRequest;
};

export type MutationCreateUserContractArgs = {
  request: CreateUserContractRequest;
};

export type MutationCreateUserMembershipArgs = {
  request: CreateUserMembershipRequest;
};

export type MutationCreateUserRefferalArgs = {
  request: CreateUserRefferalRequest;
};

export type MutationCreateWalletArgs = {
  request: CreateWalletRequest;
};

export type MutationDeleteFillingQueueArgs = {
  request: DeleteFillingQueueRequest;
};

export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};

export type MutationDeleteProductArgs = {
  request: DeleteProductRequest;
};

export type MutationDeleteSurveyArgs = {
  request: SurveyDeleteRequest;
};

export type MutationDeleteSurveyResultArgs = {
  request: DeleteSurveyResultRequest;
};

export type MutationDeleteTransactionCreditArgs = {
  request: DeleteTransactionCreditRequest;
};

export type MutationDeleteWalletArgs = {
  request: DeleteWalletRequest;
};

export type MutationInviteUserArgs = {
  request: InviteUserRequest;
};

export type MutationRefreshArgs = {
  request: RefreshRequest;
};

export type MutationRefundMarketplaceOrderArgs = {
  request: RefundMarketplaceOrderRequest;
};

export type MutationRegistryUserPrizeArgs = {
  request: RegistryUserPrizeRequest;
};

export type MutationScoreSurveyResultArgs = {
  request: ScoreSurveyResultRequest;
};

export type MutationSyncMediaProductsArgs = {
  request: SyncMediaProductsRequest;
};

export type MutationSyncNftGalleryArgs = {
  request: SyncNftGalleryRequest;
};

export type MutationSyncPageviewSourcesArgs = {
  request: SyncPageviewSourcesRequest;
};

export type MutationUpdateAnonymousUserArgs = {
  request: UpdateAnonymousUserRequest;
};

export type MutationUpdateEmbedSurveyResultArgs = {
  request: UpdateEmbedSurveyResultRequest;
};

export type MutationUpdateFillingQueueArgs = {
  request: UpdateFillingQueueRequest;
};

export type MutationUpdateMarketplaceOrderArgs = {
  request: UpdateMarketplaceOrderRequest;
};

export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};

export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};

export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};

export type MutationUpdateProductArgs = {
  request: UpdateProductRequest;
};

export type MutationUpdateProfileArgs = {
  request: UpdateProfileRequest;
};

export type MutationUpdateSurveyArgs = {
  request: SurveyUpdateInfoRequest;
};

export type MutationUpdateSurveyGatingArgs = {
  request: UpdateSurveyGatingRequest;
};

export type MutationUpdateSurveyReferralArgs = {
  request: UpdateSurveyReferralRequest;
};

export type MutationUpdateSurveyResultArgs = {
  request: UpdateSurveyResultRequest;
};

export type MutationUpdateSurveyRewardArgs = {
  request: UpdateSurveyRewardRequest;
};

export type MutationUpdateTransactionCreditArgs = {
  request: UpdateTransactionCreditRequest;
};

export type MutationUpdateUserBoostArgs = {
  request: UpdateUserBoostRequest;
};

export type MutationUpdateUserMembershipArgs = {
  request: UpdateUserMembershipRequest;
};

export type MutationUpdateUserRefferalArgs = {
  request: UpdateUserRefferalRequest;
};

export type MutationUpdateWalletArgs = {
  request: UpdateWalletRequest;
};

export type MutationVerifyUserArgs = {
  request: VerifyUserRequest;
};

export type Nft = Erc721 | Nep171;

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent';
  /** The animated url */
  animatedUrl?: Maybe<Scalars['String']['output']>;
  /** The token uri  nft */
  contentUri?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  /** The meta type content */
  metaType?: Maybe<Scalars['String']['output']>;
  /** The token uri  nft */
  uri?: Maybe<Scalars['String']['output']>;
};

export type Nep171 = {
  __typename?: 'Nep171';
  chainId: Scalars['ChainId']['output'];
  creatorId?: Maybe<Scalars['ProfileId']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  evmContractAddress?: Maybe<Scalars['ContractAddress']['output']>;
  mediaClaimed?: Maybe<Scalars['Boolean']['output']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']['output']>;
  metadata: Metadata;
  /** The NFT internal id */
  nftId: Scalars['NftId']['output'];
  orderId?: Maybe<Scalars['ID']['output']>;
  orderStatus?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['NearAddress']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  productStatus?: Maybe<Scalars['String']['output']>;
  productType?: Maybe<Scalars['String']['output']>;
  resultsId?: Maybe<Scalars['ID']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  sellerId?: Maybe<Scalars['ProfileId']['output']>;
  seriesId: Scalars['Int']['output'];
  surveyId?: Maybe<Scalars['SurveyId']['output']>;
};

export type NftGalleriesQueryRequest = {
  /** The result creation date */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The user media ids */
  mediaIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The surveys ids */
  nftGalleryIds?: InputMaybe<Array<Scalars['NftGalleryId']['input']>>;
  /** The creators ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
};

/** The NFT gallery input */
export type NftGalleriesRequest = {
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};

/** The NFT gallery */
export type NftGallery = {
  __typename?: 'NftGallery';
  chainId?: Maybe<Scalars['ChainId']['output']>;
  /** The creation date */
  createdAt: Scalars['DateTime']['output'];
  /** The NFTs in the gallery */
  items?: Maybe<Array<Nft>>;
  /** The NFT gallery name */
  name: Scalars['String']['output'];
  /** The NFT gallery id */
  nftGalleryId: Scalars['NftGalleryId']['output'];
  /** The owning profile id */
  profileId: Scalars['ProfileId']['output'];
  /** The last update date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The input for creating a new NFT gallery */
export type NftGalleryCreateRequest = {
  /** The chain ID of the NFT */
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  /** The NFTs in the gallery */
  items: Array<NftInput>;
  /** The name of the NFT gallery */
  name: Scalars['NftGalleryName']['input'];
  /** The owner profile id */
  profileId: Scalars['ProfileId']['input'];
};

/** The input for deleting gallery */
export type NftGalleryDeleteRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
};

/** The input for updating NFT gallery name */
export type NftGalleryUpdateInfoRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The name of the NFT gallery */
  name: Scalars['NftGalleryName']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
};

/** The input for reordering gallery items */
export type NftGalleryUpdateItemOrderRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
  /** The order of the NFTs in the gallery */
  updates: Array<NftUpdateItemOrder>;
};

/** The input for adding/removing gallery items */
export type NftGalleryUpdateItemsRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
  /** The contents of the NFT gallery */
  toAdd?: InputMaybe<Array<NftInput>>;
  /** The contents of the NFT gallery */
  toRemove?: InputMaybe<Array<NftInput>>;
};

/** The NFT profile image */
export type NftImage = {
  __typename?: 'NftImage';
  /** The token image nft */
  chainId: Scalars['ChainId']['output'];
  /** The contract address */
  contractAddress: Scalars['ContractAddress']['output'];
  /** registered date in the marketplace */
  createdAt: Scalars['DateTime']['output'];
  nftImageId: Scalars['ID']['output'];
  /** The token id of the nft */
  tokenId: Scalars['String']['output'];
  /** The token image nft */
  uri: Scalars['Url']['output'];
  /** If the NFT is verified */
  verified: Scalars['Boolean']['output'];
};

/** The NFT input for gallery */
export type NftInput = {
  /** The chain ID of the NFT */
  chainId: Scalars['ChainId']['input'];
  /** The contents URI of the NFT */
  contentUri?: InputMaybe<Scalars['String']['input']>;
  /** The contract address of the NFT */
  contractAddress: Scalars['ContractAddress']['input'];
  /** The description of the NFT */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The erc type the NFT */
  ercType?: InputMaybe<Scalars['String']['input']>;
  /** The name of the NFT */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The original contents of the NFT */
  originalContent?: InputMaybe<Scalars['String']['input']>;
  /** The symbol of the NFT */
  symbol?: InputMaybe<Scalars['String']['input']>;
  /** The token ID of the NFT */
  tokenId?: InputMaybe<Scalars['String']['input']>;
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId']['input'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress']['input'];
  /** Token id for NFT */
  tokenId: Scalars['String']['input'];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  nearAddress: Scalars['NearAddress']['input'];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId']['output'];
  text: Scalars['String']['output'];
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar']['output'];
};

/** NFT search results */
export type NftSearchResult = {
  __typename?: 'NftSearchResult';
  items: Array<Nft>;
  pageInfo?: Maybe<PaginatedResultInfo>;
  type: SearchRequestTypes;
};

/** The input for updating the order of a NFT gallery item */
export type NftUpdateItemOrder = {
  /** The chain ID of the NFT */
  chainId: Scalars['ChainId']['input'];
  /** The contract address of the NFT */
  contractAddress: Scalars['ContractAddress']['input'];
  /** The new order of the NFT in the gallery */
  newOrder: Scalars['Int']['input'];
  /** The token ID of the NFT */
  tokenId: Scalars['String']['input'];
};

export type NftsRequest = {
  /** Chain Ids */
  chainIds?: InputMaybe<Array<Scalars['ChainId']['input']>>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']['input']>;
  /** The creator id */
  creatorIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The user media ids */
  mediaIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter by owner address */
  ownerAddress?: InputMaybe<Scalars['NearAddress']['input']>;
  /** The profile id */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
};

/** The paginated nft result */
export type NftsResult = {
  __typename?: 'NftsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export enum OnBoardingStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING',
  Tutorial = 'TUTORIAL',
  Wallet = 'WALLET'
}

export type OpenEndedSurveys = {
  __typename?: 'OpenEndedSurveys';
  openEndedSurveys?: Maybe<Scalars['Int']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

/** The nft type */
export type Owner = {
  __typename?: 'Owner';
  /** aka mintify.near  */
  address: Scalars['NearAddress']['output'];
  /** number of tokens owner */
  amount: Scalars['Float']['output'];
  /** The owner profile id */
  profileId?: Maybe<Scalars['ProfileId']['output']>;
};

export type Pageview = {
  __typename?: 'Pageview';
  browser: Scalars['String']['output'];
  browserVersion: Scalars['Int']['output'];
  city: Scalars['String']['output'];
  currentUrl: Scalars['String']['output'];
  deviceId: Scalars['String']['output'];
  distinctId: Scalars['String']['output'];
  event: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  initialReferrer: Scalars['String']['output'];
  initialReferringDomain: Scalars['String']['output'];
  insertId: Scalars['String']['output'];
  libVersion: Scalars['String']['output'];
  mpApiEndpoint: Scalars['String']['output'];
  mpApiTimestampMs: Scalars['Int']['output'];
  mpCountryCode: Scalars['String']['output'];
  mpLib: Scalars['String']['output'];
  mpProcessingTimeMs: Scalars['Int']['output'];
  os: Scalars['String']['output'];
  page: Scalars['String']['output'];
  region: Scalars['String']['output'];
  screenHeight: Scalars['Int']['output'];
  screenWidth: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

/** The paginated user result */
export type PaginatedEmbedSurveyResult = {
  __typename?: 'PaginatedEmbedSurveyResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user filling queue result */
export type PaginatedEmbedSurveyResultResult = {
  __typename?: 'PaginatedEmbedSurveyResultResult';
  items: Array<EmbedSurveyResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user filling queue result */
export type PaginatedFillingQueueResult = {
  __typename?: 'PaginatedFillingQueueResult';
  items: Array<FillingQueue>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated marketplace orders result */
export type PaginatedMarketplaceOrdersResult = {
  __typename?: 'PaginatedMarketplaceOrdersResult';
  items: Array<MarketplaceOrder>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated nft gallery result */
export type PaginatedNftGalleryResult = {
  __typename?: 'PaginatedNftGalleryResult';
  items: Array<NftGallery>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated marketplace products result */
export type PaginatedProductsResult = {
  __typename?: 'PaginatedProductsResult';
  items: Array<MarketplaceProduct>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']['output']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']['output']>;
  /**
   * The total number of entities the pagination iterates over. If its null then its not been worked out due to it being an expensive query and not really needed for the client. All main counters are in counter tables to allow them to be faster fetching.
   * @deprecated Total counts is expensive and in dynamic nature of queries it slows stuff down. Most the time you do not need this you can just use the 'next' property to see if there is more data. This will be removed soon. The only use case anyone is using this right now is on notification query, this should be changed to query the notifications and cache the last notification id. You can then keep checking if the id changes you know more notifications.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** The paginated user transactions result */
export type PaginatedSurveyReferralResult = {
  __typename?: 'PaginatedSurveyReferralResult';
  items: Array<SurveyReferral>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user result */
export type PaginatedSurveyResult = {
  __typename?: 'PaginatedSurveyResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user filling queue result */
export type PaginatedSurveyResultResult = {
  __typename?: 'PaginatedSurveyResultResult';
  items: Array<SurveyResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user contracts result */
export type PaginatedUserContractResult = {
  __typename?: 'PaginatedUserContractResult';
  items: Array<UserContract>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user transactions result */
export type PaginatedUserRefferalResult = {
  __typename?: 'PaginatedUserRefferalResult';
  items: Array<UserRefferal>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user result */
export type PaginatedUserResult = {
  __typename?: 'PaginatedUserResult';
  items: Array<User>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user transactions result */
export type PaginatedUserTransactionResult = {
  __typename?: 'PaginatedUserTransactionResult';
  items: Array<TransactionCredit>;
  pageInfo: PaginatedResultInfo;
};

export enum PaymentMethods {
  Americanexpress = 'AMERICANEXPRESS',
  Bitcoin = 'BITCOIN',
  Mastercard = 'MASTERCARD',
  Near = 'NEAR',
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
  Usdt = 'USDT',
  Visa = 'VISA'
}

export type ProductQueryRequest = {
  /** The product id */
  productId: Scalars['ID']['input'];
};

export type ProductsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileQueryRequest = {
  /** The profile is boosted? */
  boosted?: InputMaybe<Scalars['Boolean']['input']>;
  /** The business ids */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The profile category (business) */
  category?: InputMaybe<Array<Scalars['BusinessCategory']['input']>>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The emails for the profile */
  emails?: InputMaybe<Array<Scalars['Email']['input']>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The enduser total ansr earned */
  numberOfAnsrEarned?: InputMaybe<Scalars['Float']['input']>;
  /** The enduser total rewards earned */
  numberOfRewardsEarned?: InputMaybe<Scalars['Float']['input']>;
  /** The enduser total successful invites */
  numberOfSuccessInvites?: InputMaybe<Scalars['Float']['input']>;
  /** The published surveys number */
  numberOfSurveys?: InputMaybe<Scalars['Int']['input']>;
  /** The enduser completed surveys number */
  numberOfSurveysCompleted?: InputMaybe<Scalars['Int']['input']>;
  /** The near addresses */
  ownedBy?: InputMaybe<Array<Scalars['NearAddress']['input']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** Sorting asc / desc */
  sorting?: InputMaybe<Scalars['String']['input']>;
  /** The profile status */
  status?: InputMaybe<Array<AccountStatus>>;
  /** The profile type */
  type?: InputMaybe<AccountType>;
  /** The profile type */
  verified?: InputMaybe<Scalars['String']['input']>;
  /** The profile visibility/membership */
  visibility?: InputMaybe<Array<Visibility>>;
};

export type PurchaseHistory = {
  __typename?: 'PurchaseHistory';
  mediaId?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['ID']['output']>;
};

export type PurchaseHistoryPerUserRequest = {
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  allMediaBoughtAndSoldAnalytics?: Maybe<Array<Maybe<MediaBoughtAndSold>>>;
  anonymousUser?: Maybe<AnonymousUser>;
  challenge: AuthChallengeResult;
  checkTransaction?: Maybe<TransactionCredit>;
  dataBusiness?: Maybe<DataBusiness>;
  dataUser?: Maybe<DataUser>;
  embedSurveyResults: PaginatedEmbedSurveyResultResult;
  fillingQueue: PaginatedFillingQueueResult;
  goodsOwnedPerUserAnalytics?: Maybe<Array<Maybe<GoodsOwnedMedia>>>;
  /** Leaderboards for surveys */
  leaderboardEntries: LeaderboardEntriesResult;
  marketplaceOrder?: Maybe<MarketplaceOrder>;
  /** Get all marketplace orders */
  marketplaceOrders: PaginatedMarketplaceOrdersResult;
  mediaSoldByCompanyOrUserAnalytics?: Maybe<Array<Maybe<MediaSold>>>;
  methodsPromotions?: Maybe<Array<Maybe<SurveyMethod>>>;
  /** Get all NFT galleries for a profile */
  nftGalleries: PaginatedNftGalleryResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nftUserGalleries: PaginatedNftGalleryResult;
  nfts: NftsResult;
  pageviews: Array<Pageview>;
  ping: Scalars['String']['output'];
  product?: Maybe<MarketplaceProduct>;
  /** Get all products and medias available in the marketplace */
  products: PaginatedProductsResult;
  purchaseHistoryPerUserAnalytics?: Maybe<Array<Maybe<PurchaseHistory>>>;
  saleHistoryPerBusinessAnalytics?: Maybe<SaleHistory>;
  search: SearchResult;
  subscriptionHistory?: Maybe<Array<Maybe<UserSubscription>>>;
  subscriptionLevel?: Maybe<UserSubscription>;
  survey?: Maybe<Survey>;
  /** Statistics and analytics for surveys */
  surveyAnalytics: ChartDataLabels;
  surveyGating: SurveyGating;
  surveyReferrals: PaginatedSurveyReferralResult;
  surveyResults: PaginatedSurveyResultResult;
  surveyReward?: Maybe<SurveyReward>;
  surveyRewardErc721?: Maybe<SurveyReward>;
  surveys: PaginatedSurveyResult;
  topBusiness: ChartDataLabels;
  user?: Maybe<User>;
  userContract?: Maybe<UserContract>;
  userContracts: PaginatedUserContractResult;
  userNfts: NftsResult;
  userRefferals: PaginatedUserRefferalResult;
  userTransactions: PaginatedUserTransactionResult;
  userWallet?: Maybe<Wallet>;
  userbyIssuer?: Maybe<User>;
  userbyWalletIssuer?: Maybe<User>;
  users: PaginatedUserResult;
  usersAdmin: PaginatedUserResult;
  verify: Scalars['Boolean']['output'];
};

export type QueryAnonymousUserArgs = {
  request: AnonymousUserQueryRequest;
};

export type QueryChallengeArgs = {
  request: ChallengeRequest;
};

export type QueryCheckTransactionArgs = {
  request: TransactionHashRequest;
};

export type QueryDataUserArgs = {
  request?: InputMaybe<CategoriesRequest>;
};

export type QueryEmbedSurveyResultsArgs = {
  request: EmbedSurveyResultQueryRequest;
};

export type QueryFillingQueueArgs = {
  request: FillingQueueQueryRequest;
};

export type QueryLeaderboardEntriesArgs = {
  request: LeaderboardEntriesRequest;
};

export type QueryMarketplaceOrderArgs = {
  request: MarketplaceOrderQueryRequest;
};

export type QueryMarketplaceOrdersArgs = {
  request: MarketplaceOrdersQueryRequest;
};

export type QueryMediaSoldByCompanyOrUserAnalyticsArgs = {
  request: MediaBoughtAndSoldRequest;
};

export type QueryNftGalleriesArgs = {
  request: NftGalleriesQueryRequest;
};

export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};

export type QueryNftUserGalleriesArgs = {
  request: NftGalleriesQueryRequest;
};

export type QueryNftsArgs = {
  request: NftsRequest;
};

export type QueryProductArgs = {
  request: ProductQueryRequest;
};

export type QueryProductsArgs = {
  request: ProductsQueryRequest;
};

export type QueryPurchaseHistoryPerUserAnalyticsArgs = {
  request: PurchaseHistoryPerUserRequest;
};

export type QuerySaleHistoryPerBusinessAnalyticsArgs = {
  request: SaleHistoryPerBusinessRequest;
};

export type QuerySearchArgs = {
  request: SearchQueryRequest;
};

export type QuerySubscriptionHistoryArgs = {
  request?: InputMaybe<SubscriptionHistoryRequest>;
};

export type QuerySubscriptionLevelArgs = {
  request?: InputMaybe<SubscriptionLevelRequest>;
};

export type QuerySurveyArgs = {
  request: SingleSurveyQueryRequest;
};

export type QuerySurveyAnalyticsArgs = {
  request: SurveyAnalyticsRequest;
};

export type QuerySurveyGatingArgs = {
  request: SurveyGatingQueryRequest;
};

export type QuerySurveyReferralsArgs = {
  request: SurveyReferralQueryRequest;
};

export type QuerySurveyResultsArgs = {
  request: SurveyResultQueryRequest;
};

export type QuerySurveyRewardArgs = {
  request: SurveyRewardQueryRequest;
};

export type QuerySurveyRewardErc721Args = {
  request: SurveyRewardQueryRequest;
};

export type QuerySurveysArgs = {
  request: SurveyQueryRequest;
};

export type QueryTopBusinessArgs = {
  request: TopBusinessRequest;
};

export type QueryUserArgs = {
  request: SingleProfileQueryRequest;
};

export type QueryUserContractArgs = {
  request: UserContractQueryRequest;
};

export type QueryUserContractsArgs = {
  request: UserContractsQueryRequest;
};

export type QueryUserNftsArgs = {
  request: NftsRequest;
};

export type QueryUserRefferalsArgs = {
  request: UserRefferalQueryRequest;
};

export type QueryUserTransactionsArgs = {
  request: UserTransactionQueryRequest;
};

export type QueryUserWalletArgs = {
  request: UserWalletQueryRequest;
};

export type QueryUserbyIssuerArgs = {
  request: IssuerProfileQueryRequest;
};

export type QueryUserbyWalletIssuerArgs = {
  request: Iden3IssuerProfileQueryRequest;
};

export type QueryUsersArgs = {
  request: ProfileQueryRequest;
};

export type QueryUsersAdminArgs = {
  request: ProfileQueryRequest;
};

export type QueryVerifyArgs = {
  request: VerifyRequest;
};

export type Question = {
  __typename?: 'Question';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  surveyId: Scalars['SurveyId']['output'];
};

export type RadiogroupElement = {
  __typename?: 'RadiogroupElement';
  choices?: Maybe<Array<SurveyElementItemValueType>>;
  correctAnswer?: Maybe<Scalars['String']['output']>;
  isRequired: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: SurveyElementType;
};

export type RankTopCompletions = {
  __typename?: 'RankTopCompletions';
  completions?: Maybe<Scalars['Int']['output']>;
  surveyId?: Maybe<Scalars['ID']['output']>;
};

export type RankingElement = {
  __typename?: 'RankingElement';
  choices?: Maybe<Array<SurveyElementItemValueType>>;
  correctAnswer?: Maybe<Scalars['String']['output']>;
  isRequired: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: SurveyElementType;
};

export type Rating = {
  __typename?: 'Rating';
  item_id?: Maybe<Scalars['Int']['output']>;
  profileId: Scalars['ProfileId']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
};

export type RatingElement = {
  __typename?: 'RatingElement';
  correctAnswer?: Maybe<Scalars['String']['output']>;
  isRequired: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  rateMax?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: SurveyElementType;
};

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt']['input'];
};

export type RefundMarketplaceOrderRequest = {
  orderId: Scalars['ID']['input'];
};

export type RegistryUserPrizeRequest = {
  profileId: Scalars['ProfileId']['input'];
  resultsId: Scalars['ID']['input'];
  rewardId: Scalars['ID']['input'];
  surveyId: Scalars['SurveyId']['input'];
};

export type Reward = {
  __typename?: 'Reward';
  createdAt: Scalars['DateTime']['output'];
  mediaId?: Maybe<Scalars['ID']['output']>;
  profileId: Scalars['ProfileId']['output'];
  resultId?: Maybe<Scalars['ID']['output']>;
  rewardId: Scalars['ID']['output'];
  rewardType: Scalars['String']['output'];
  surveyId?: Maybe<Scalars['SurveyId']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SaleHistory = {
  __typename?: 'SaleHistory';
  items?: Maybe<Array<Maybe<SaleItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SaleHistoryPerBusinessRequest = {
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
};

export type SaleItem = {
  __typename?: 'SaleItem';
  buyerId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderAmount?: Maybe<Scalars['Float']['output']>;
  orderStatus?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  sellerId?: Maybe<Scalars['Int']['output']>;
};

export type ScoreSurveyResultRequest = {
  credibilityScore?: InputMaybe<Scalars['CredibilityScore']['input']>;
  resultsId: Scalars['ID']['input'];
  score?: InputMaybe<Scalars['Int']['input']>;
};

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The search term */
  query: Scalars['Search']['input'];
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Businesses = 'BUSINESSES',
  Endusers = 'ENDUSERS',
  Marketplace = 'MARKETPLACE',
  Nfts = 'NFTS',
  Surveys = 'SURVEYS',
  Tutorials = 'TUTORIALS'
}

export type SearchResult =
  | BusinessSearchResult
  | EnduserSearchResult
  | MarketplaceSearchResult
  | NftSearchResult
  | SurveySearchResult
  | TutorialSearchResult;

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The email you signed the signature with */
  email: Scalars['Email']['input'];
  /** The signature */
  signature: Scalars['Signature']['input'];
};

export type SingleProfileQueryRequest = {
  /** The profile did */
  did?: InputMaybe<Scalars['Did']['input']>;
  /** The email for the profile */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};

export type SingleSurveyQueryRequest = {
  /** The survey creator */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** The survey id */
  surveyId: Scalars['SurveyId']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  nftDataUpdated?: Maybe<Array<Maybe<Nep171>>>;
};

export type SubscriptionHistoryRequest = {
  profileId: Scalars['ProfileId']['input'];
};

export type SubscriptionLevelRequest = {
  profileId: Scalars['ProfileId']['input'];
};

export type Survey = {
  __typename?: 'Survey';
  campaignType: SurveyCampaignType;
  cidHash?: Maybe<Scalars['Cid']['output']>;
  claimId?: Maybe<Scalars['ClaimId']['output']>;
  completeText?: Maybe<Scalars['String']['output']>;
  completedHtml?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fillingStatus?: Maybe<Scalars['String']['output']>;
  firstPageIsStarted?: Maybe<Scalars['Boolean']['output']>;
  funded?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mediaClaimed?: Maybe<Scalars['Boolean']['output']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']['output']>;
  pageNextText?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Array<SurveyPage>>;
  privateKey?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  results?: Maybe<Array<Maybe<SurveyResult>>>;
  resultsId?: Maybe<Scalars['ID']['output']>;
  rewardClaimed?: Maybe<Scalars['Boolean']['output']>;
  rewardClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  rewardId?: Maybe<Scalars['ID']['output']>;
  rewardType?: Maybe<Scalars['String']['output']>;
  rewards?: Maybe<Array<Maybe<SurveyReward>>>;
  showPrevButton?: Maybe<Scalars['Boolean']['output']>;
  showPreviewBeforeComplete?: Maybe<Scalars['String']['output']>;
  showQuestionNumbers?: Maybe<Scalars['String']['output']>;
  startSurveyText?: Maybe<Scalars['String']['output']>;
  surveyId: Scalars['SurveyId']['output'];
  surveyStatus: SurveyStatus;
  surveyType: SurveyType;
  tags?: Maybe<Array<Maybe<Scalars['Tag']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  whiteList?: Maybe<Array<Maybe<Scalars['Email']['output']>>>;
};

export type SurveyAnalyticsRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
};

export enum SurveyCampaignType {
  Qualitative = 'QUALITATIVE',
  Quantitative = 'QUANTITATIVE'
}

/** The input for creating a new Survey */
export type SurveyCreateRequest = {
  /** The survey campaign type */
  campaignType?: InputMaybe<SurveyCampaignType>;
  /** The description of the Survey */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The Survey logo */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The Pages in the survey */
  pages: Array<SurveyPageInput>;
  /** The creator profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The survey status */
  status: SurveyStatus;
  /** The title of the Survey */
  title?: InputMaybe<Scalars['String']['input']>;
  /** The survey type */
  type: SurveyType;
};

/** The input for deleting survey */
export type SurveyDeleteRequest = {
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** The Survey id */
  surveyId: Scalars['SurveyId']['input'];
};

export type SurveyElement =
  | BooleanElement
  | CommentElement
  | RadiogroupElement
  | RankingElement
  | RatingElement
  | TextElement;

export type SurveyElementInput = {
  choices?: InputMaybe<Array<TextValueInput>>;
  correctAnswer?: InputMaybe<Scalars['String']['input']>;
  isRequired: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  points?: InputMaybe<Scalars['Int']['input']>;
  rateMax?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type: SurveyElementType;
};

export type SurveyElementItemValueType = TextValueType | ValueType;

export enum SurveyElementType {
  Boolean = 'BOOLEAN',
  Checkbox = 'CHECKBOX',
  Comment = 'COMMENT',
  Dropdown = 'DROPDOWN',
  File = 'FILE',
  Html = 'HTML',
  Image = 'IMAGE',
  Imagepicker = 'IMAGEPICKER',
  Input = 'INPUT',
  Matrixdropdown = 'MATRIXDROPDOWN',
  Panel = 'PANEL',
  Paneldynamic = 'PANELDYNAMIC',
  Radiogroup = 'RADIOGROUP',
  Ranking = 'RANKING',
  Rating = 'RATING',
  Signaturepad = 'SIGNATUREPAD',
  Tagbox = 'TAGBOX',
  Text = 'TEXT'
}

export type SurveyGating = {
  __typename?: 'SurveyGating';
  createdAt: Scalars['DateTime']['output'];
  gateId: Scalars['ID']['output'];
  profileId?: Maybe<Scalars['Int']['output']>;
  requirements: Scalars['AccessGating']['output'];
  surveyId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SurveyGatingQueryRequest = {
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** The Survey id */
  surveyId: Scalars['SurveyId']['input'];
};

export type SurveyMethod = {
  __typename?: 'SurveyMethod';
  effectiveness: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SurveyPage = {
  __typename?: 'SurveyPage';
  elements?: Maybe<Array<SurveyElement>>;
  name: Scalars['String']['output'];
  pages?: Maybe<Array<SurveyPage>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SurveyPageInput = {
  elements?: InputMaybe<Array<SurveyElementInput>>;
  name: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyQueryRequest = {
  /** The creators ids */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The survey ids to resume */
  fillingQueueIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The endusers ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The survey status */
  status?: InputMaybe<Array<SurveyStatus>>;
  /** The survey title */
  title?: InputMaybe<Scalars['String']['input']>;
  /** The survey type */
  type?: InputMaybe<Array<SurveyType>>;
};

export type SurveyReferral = {
  __typename?: 'SurveyReferral';
  /** @joined existing user profile status */
  accountStatus?: Maybe<AccountStatus>;
  /** @joined existing user avatar */
  avatar?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** @joined existing user diplay name */
  displayName?: Maybe<Scalars['String']['output']>;
  /** @joined existing user email */
  email?: Maybe<Scalars['Email']['output']>;
  invitedAt?: Maybe<Scalars['DateTime']['output']>;
  invitedEmail: Scalars['Email']['output'];
  invitedId?: Maybe<Scalars['ProfileId']['output']>;
  invitedStatus: Scalars['String']['output'];
  profileId: Scalars['ProfileId']['output'];
  referralId: Scalars['ID']['output'];
  referralStatus: Scalars['String']['output'];
  surveyId?: Maybe<Scalars['SurveyId']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SurveyReferralQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** invited email addresses */
  emailAddresses?: InputMaybe<Array<Scalars['Email']['input']>>;
  inviteStatus?: InputMaybe<Scalars['String']['input']>;
  /** The invited ids */
  invitedIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The sender ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  referralStatus?: InputMaybe<Scalars['String']['input']>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
};

export type SurveyResult = {
  __typename?: 'SurveyResult';
  chainId?: Maybe<Scalars['ChainId']['output']>;
  cidHash?: Maybe<Scalars['Cid']['output']>;
  claimId?: Maybe<Scalars['ClaimId']['output']>;
  createdAt: Scalars['DateTime']['output'];
  credibilityScore?: Maybe<Scalars['CredibilityScore']['output']>;
  mediaClaimed?: Maybe<Scalars['Boolean']['output']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']['output']>;
  result: Scalars['SurveyData']['output'];
  resultsId: Scalars['ID']['output'];
  rewardClaimed?: Maybe<Scalars['Boolean']['output']>;
  rewardClaimedAt?: Maybe<Scalars['DateTime']['output']>;
  rewardId?: Maybe<Scalars['ID']['output']>;
  rewardType?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  survey?: Maybe<Survey>;
  user?: Maybe<User>;
};

export type SurveyResultQueryRequest = {
  /** The result creation date */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The creators ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The results ids */
  resultsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
};

export type SurveyReward = {
  __typename?: 'SurveyReward';
  chainId?: Maybe<Scalars['ChainId']['output']>;
  createdAt: Scalars['DateTime']['output'];
  mediaId?: Maybe<Scalars['ID']['output']>;
  mediaPrize?: Maybe<Nft>;
  profileId: Scalars['ProfileId']['output'];
  resultsId?: Maybe<Scalars['ID']['output']>;
  rewardId: Scalars['ID']['output'];
  rewardType: Scalars['String']['output'];
  surveyId: Scalars['SurveyId']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SurveyRewardQueryRequest = {
  /** The survey id */
  surveyId: Scalars['SurveyId']['input'];
};

/** Survey search results */
export type SurveySearchResult = {
  __typename?: 'SurveySearchResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export enum SurveyStatus {
  Drafted = 'DRAFTED',
  Published = 'PUBLISHED'
}

export enum SurveyType {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Tutorial = 'TUTORIAL'
}

/** The input for updating Survey Information */
export type SurveyUpdateInfoRequest = {
  /** The survey campaign type */
  campaignType?: InputMaybe<SurveyCampaignType>;
  /** The description of the Survey */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The survey is paid */
  funded?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Survey logo */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The Pages in the survey */
  pages?: InputMaybe<Array<SurveyPageInput>>;
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** The survey status */
  status?: InputMaybe<SurveyStatus>;
  /** The Survey id */
  surveyId: Scalars['SurveyId']['input'];
  /** The Survey tag/category */
  tags?: InputMaybe<Array<InputMaybe<Scalars['Tag']['input']>>>;
  /** The title of the Survey */
  title?: InputMaybe<Scalars['String']['input']>;
  /** The survey type */
  type?: InputMaybe<SurveyType>;
  /** The survey whitelist */
  whiteList?: InputMaybe<Array<InputMaybe<Scalars['Email']['input']>>>;
};

export type SyncMediaProductsRequest = {
  contractAddress?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type SyncNftGalleryRequest = {
  contractAddress?: InputMaybe<Scalars['ContractAddress']['input']>;
  profileId: Scalars['ProfileId']['input'];
};

export type SyncPageviewSourcesRequest = {
  time: Scalars['Int']['input'];
};

export type TextElement = {
  __typename?: 'TextElement';
  correctAnswer?: Maybe<Scalars['String']['output']>;
  isRequired: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: SurveyElementType;
};

export type TextValueInput = {
  text: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TextValueType = {
  __typename?: 'TextValueType';
  text: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TopBusinessRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
};

export type TransactionCredit = {
  __typename?: 'TransactionCredit';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  orderId?: Maybe<Scalars['ID']['output']>;
  receiver_id?: Maybe<Scalars['ProfileId']['output']>;
  survey?: Maybe<Survey>;
  surveyResult?: Maybe<SurveyResult>;
  transactionHash?: Maybe<Scalars['TxHash']['output']>;
  transactionId: Scalars['ID']['output'];
  transactionSource?: Maybe<Scalars['String']['output']>;
  transactionStatus: TransactionStatus;
  transactionType: TransactionType;
  user?: Maybe<User>;
};

export type TransactionCreditRequest = {
  amount: Scalars['Int']['input'];
  hash?: InputMaybe<Scalars['TxHash']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
  profileId: Scalars['ProfileId']['input'];
  resultsId?: InputMaybe<Scalars['ID']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status: TransactionStatus;
  surveyId?: InputMaybe<Scalars['SurveyId']['input']>;
  type: TransactionType;
};

export type TransactionDebitRequest = {
  amount: Scalars['Int']['input'];
  hash?: InputMaybe<Scalars['TxHash']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
  profileId: Scalars['ProfileId']['input'];
  resultsId?: InputMaybe<Scalars['ID']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status: TransactionStatus;
  surveyId?: InputMaybe<Scalars['SurveyId']['input']>;
  type: TransactionType;
};

/** The check transaction hash request */
export type TransactionHashRequest = {
  /** The transactionHash */
  transactionHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export enum TransactionStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING'
}

export enum TransactionType {
  Credit = 'CREDIT',
  Debit = 'DEBIT'
}

/** Tutorial search results */
export type TutorialSearchResult = {
  __typename?: 'TutorialSearchResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type UpdateAnonymousUserRequest = {
  fingerprint: Scalars['String']['input'];
  profileId: Scalars['Int']['input'];
};

export type UpdateEmbedSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  cidHash?: InputMaybe<Scalars['Cid']['input']>;
  embedResultsId: Scalars['ID']['input'];
  mediaClaimed?: InputMaybe<Scalars['Boolean']['input']>;
  mediaClaimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  mediaClaimedFrom?: InputMaybe<Scalars['NearAddress']['input']>;
  result?: InputMaybe<Scalars['SurveyData']['input']>;
  rewardClaimed?: InputMaybe<Scalars['Boolean']['input']>;
  rewardClaimedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateFillingQueueRequest = {
  claimId?: InputMaybe<Scalars['String']['input']>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fillingId: Scalars['ID']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UpdateMarketplaceOrderRequest = {
  metadata?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  orderStatus: Scalars['String']['input'];
};

export type UpdateProductRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['ID']['input'];
  productStatus?: InputMaybe<Scalars['String']['input']>;
  productType?: InputMaybe<Scalars['String']['input']>;
  sellerId?: InputMaybe<Scalars['ProfileId']['input']>;
  whiteList?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileRequest = {
  /** The user account type */
  accountStatus?: InputMaybe<AccountStatus>;
  /** The user account type */
  accountType?: InputMaybe<AccountType>;
  /** The user age */
  age?: InputMaybe<Scalars['Int']['input']>;
  /** The user profile image */
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** The business user name */
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** The business category */
  category?: InputMaybe<Scalars['BusinessCategory']['input']>;
  /** The user display name */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** The user email */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The user first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The user gender */
  gender?: InputMaybe<Scalars['String']['input']>;
  /** The user Iden3 DID */
  iden3issuer?: InputMaybe<Scalars['Did']['input']>;
  /** The enduser interests */
  interests?: InputMaybe<Array<Scalars['BusinessCategory']['input']>>;
  /** The user DID */
  issuer?: InputMaybe<Scalars['Did']['input']>;
  kycAttemptId?: InputMaybe<Scalars['String']['input']>;
  /** User last login */
  lastLoginAt?: InputMaybe<Scalars['UnixTimestamp']['input']>;
  /** The user last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** The user location */
  location?: InputMaybe<Scalars['String']['input']>;
  /** The user id */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** The user verification status */
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  /** The user membership type */
  visibility?: InputMaybe<Visibility>;
};

export type UpdateSurveyGatingRequest = {
  gateId: Scalars['ID']['input'];
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  requirements: Scalars['AccessGating']['input'];
  /** The Survey id */
  surveyId: Scalars['SurveyId']['input'];
};

export type UpdateSurveyReferralRequest = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitedAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitedEmail?: InputMaybe<Scalars['Email']['input']>;
  invitedId?: InputMaybe<Scalars['ProfileId']['input']>;
  invitedStatus?: InputMaybe<Scalars['String']['input']>;
  referralId: Scalars['ID']['input'];
  referralStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  cidHash?: InputMaybe<Scalars['Cid']['input']>;
  mediaClaimed?: InputMaybe<Scalars['Boolean']['input']>;
  mediaClaimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  mediaClaimedFrom?: InputMaybe<Scalars['NearAddress']['input']>;
  result?: InputMaybe<Scalars['SurveyData']['input']>;
  resultsId: Scalars['ID']['input'];
  rewardClaimed?: InputMaybe<Scalars['Boolean']['input']>;
  rewardClaimedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateSurveyRewardRequest = {
  chainId?: InputMaybe<Scalars['ChainId']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  resultsId?: InputMaybe<Scalars['ID']['input']>;
  rewardId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateTransactionCreditRequest = {
  amount: Scalars['Int']['input'];
  status: TransactionStatus;
  transactionId: Scalars['ID']['input'];
};

export type UpdateUserBoostRequest = {
  boostId: Scalars['ID']['input'];
  boostStatus: Scalars['String']['input'];
  endAt: Scalars['DateTime']['input'];
  /** The user profile ID */
  profileId: Scalars['ProfileId']['input'];
};

export type UpdateUserMembershipRequest = {
  endAt: Scalars['DateTime']['input'];
  membershipId: Scalars['ID']['input'];
  membershipStatus: Scalars['String']['input'];
  /** The user profile ID */
  profileId: Scalars['ProfileId']['input'];
};

export type UpdateUserRefferalRequest = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitedAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitedEmail?: InputMaybe<Scalars['Email']['input']>;
  invitedId?: InputMaybe<Scalars['ProfileId']['input']>;
  invitedStatus?: InputMaybe<Scalars['String']['input']>;
  refferalId: Scalars['ID']['input'];
  refferalStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWalletRequest = {
  auroraAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  avaxAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  baseAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  bitfinityAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  bobaAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  bscAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  credit?: InputMaybe<Scalars['Int']['input']>;
  cronosAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  ethereumAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  filecoinAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  hederaAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  icpAddress?: InputMaybe<Scalars['String']['input']>;
  moonbeamAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  nearAddress?: InputMaybe<Scalars['NearAddress']['input']>;
  opbnbAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  polkadotAddress?: InputMaybe<Scalars['String']['input']>;
  polygonAddress?: InputMaybe<Scalars['EvmAddress']['input']>;
  profileId: Scalars['ProfileId']['input'];
  recipient?: InputMaybe<Scalars['NearAddress']['input']>;
  solanaAddress?: InputMaybe<Scalars['String']['input']>;
  stellarAddress?: InputMaybe<Scalars['String']['input']>;
  stripeAccountId?: InputMaybe<Scalars['StripeAccountId']['input']>;
  tonAddress?: InputMaybe<Scalars['String']['input']>;
  walletId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  accountStatus: AccountStatus;
  accountType: AccountType;
  age?: Maybe<Scalars['Int']['output']>;
  apiKey?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['Url']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  boosted?: Maybe<Scalars['Boolean']['output']>;
  businessName?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['BusinessCategory']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  elegibleSurveys?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Email']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  iden3issuer?: Maybe<Scalars['String']['output']>;
  interests?: Maybe<Array<Maybe<Scalars['BusinessCategory']['output']>>>;
  inviter?: Maybe<Scalars['ProfileId']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  kycAttemptId?: Maybe<Scalars['String']['output']>;
  lastLoginAt?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  medias?: Maybe<Array<Maybe<Media>>>;
  ownedMedias?: Maybe<Array<Maybe<Media>>>;
  paymentMethod?: Maybe<PaymentMethods>;
  pinCode?: Maybe<Scalars['Int']['output']>;
  profileId: Scalars['ProfileId']['output'];
  publishedSurveys?: Maybe<Scalars['Int']['output']>;
  referrals?: Maybe<Array<Maybe<Scalars['ProfileId']['output']>>>;
  surveys?: Maybe<Array<Maybe<Survey>>>;
  surveysTaken?: Maybe<Array<Maybe<Survey>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
  visibility: Visibility;
  wallet?: Maybe<Wallet>;
};

export type UserBanUnban = {
  __typename?: 'UserBanUnban';
  banunbanId: Scalars['ID']['output'];
  banunbanStatus: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  profileId: Scalars['ProfileId']['output'];
};

export type UserBoost = {
  __typename?: 'UserBoost';
  boostId: Scalars['ID']['output'];
  boostStatus: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  endAt: Scalars['DateTime']['output'];
  profileId: Scalars['ProfileId']['output'];
  startAt: Scalars['DateTime']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserCompletionFrequency = {
  __typename?: 'UserCompletionFrequency';
  frequencyAverage?: Maybe<Scalars['Float']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

export type UserContract = {
  __typename?: 'UserContract';
  contractAddress?: Maybe<Scalars['ContractAddress']['output']>;
  contractId: Scalars['Int']['output'];
  contractName?: Maybe<Scalars['String']['output']>;
  contractType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  funcCall?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  output?: Maybe<Scalars['String']['output']>;
  ownerAddress?: Maybe<Scalars['String']['output']>;
  profileId: Scalars['Int']['output'];
  surveyId?: Maybe<Scalars['Int']['output']>;
};

export type UserContractQueryRequest = {
  network?: InputMaybe<Scalars['String']['input']>;
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
};

export type UserContractsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
};

export type UserMembership = {
  __typename?: 'UserMembership';
  createdAt: Scalars['DateTime']['output'];
  endAt: Scalars['DateTime']['output'];
  membershipId: Scalars['ID']['output'];
  membershipStatus: Scalars['String']['output'];
  profileId: Scalars['ProfileId']['output'];
  startAt: Scalars['DateTime']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMostCompletedSurveys = {
  __typename?: 'UserMostCompletedSurveys';
  numberOfSurveys?: Maybe<Scalars['Int']['output']>;
  profileId: Scalars['ProfileId']['output'];
};

export type UserPrize = {
  __typename?: 'UserPrize';
  chainId?: Maybe<Scalars['ChainId']['output']>;
  createdAt: Scalars['String']['output'];
  prizeId: Scalars['ID']['output'];
  profileId: Scalars['ProfileId']['output'];
  resultId: Scalars['ID']['output'];
  rewardId: Scalars['ID']['output'];
  surveyId: Scalars['SurveyId']['output'];
};

export type UserRefferal = {
  __typename?: 'UserRefferal';
  /** @joined existing user profile status */
  accountStatus?: Maybe<AccountStatus>;
  /** @joined existing user avatar */
  avatar?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** @joined existing user diplay name */
  displayName?: Maybe<Scalars['String']['output']>;
  /** @joined existing user email */
  email?: Maybe<Scalars['Email']['output']>;
  invitedAt?: Maybe<Scalars['DateTime']['output']>;
  invitedEmail: Scalars['Email']['output'];
  invitedId?: Maybe<Scalars['ProfileId']['output']>;
  invitedStatus: Scalars['String']['output'];
  profileId: Scalars['ProfileId']['output'];
  refferalId: Scalars['ID']['output'];
  refferalStatus: Scalars['String']['output'];
  surveyId?: Maybe<Scalars['SurveyId']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserRefferalQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** invited email addresses */
  emailAddresses?: InputMaybe<Array<Scalars['Email']['input']>>;
  inviteStatus?: InputMaybe<Scalars['String']['input']>;
  /** The invited ids */
  invitedIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The sender ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  referralStatus?: InputMaybe<Scalars['String']['input']>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  endDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  subscriptionLevel: Scalars['String']['output'];
};

export type UserTransactionQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The user DID */
  did?: InputMaybe<Scalars['Did']['input']>;
  hash?: InputMaybe<Scalars['TxHash']['input']>;
  isBalance?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The sender ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The transaction credit status */
  status?: InputMaybe<TransactionStatus>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']['input']>>;
  /** The transaction credit type */
  type?: InputMaybe<TransactionType>;
};

export type UserVerification = {
  __typename?: 'UserVerification';
  createdAt: Scalars['DateTime']['output'];
  profileId: Scalars['ProfileId']['output'];
  verificationId: Scalars['ID']['output'];
  verificationStatus: Scalars['String']['output'];
};

export type UserWalletQueryRequest = {
  did?: InputMaybe<Scalars['Did']['input']>;
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};

export type ValueType = {
  __typename?: 'ValueType';
  value: Scalars['String']['output'];
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt']['input'];
};

export type VerifyUserRequest = {
  /** The user profile ID */
  profileId: Scalars['ProfileId']['input'];
};

export enum Visibility {
  Basic = 'BASIC',
  Premium = 'PREMIUM'
}

export type Wallet = {
  __typename?: 'Wallet';
  auroraAddress?: Maybe<Scalars['EvmAddress']['output']>;
  avaxAddress?: Maybe<Scalars['EvmAddress']['output']>;
  baseAddress?: Maybe<Scalars['EvmAddress']['output']>;
  bitfinityAddress?: Maybe<Scalars['EvmAddress']['output']>;
  bobaAddress?: Maybe<Scalars['EvmAddress']['output']>;
  bscAddress?: Maybe<Scalars['EvmAddress']['output']>;
  createdAt: Scalars['DateTime']['output'];
  credit: Scalars['Float']['output'];
  cronosAddress?: Maybe<Scalars['EvmAddress']['output']>;
  ethereumAddress?: Maybe<Scalars['EvmAddress']['output']>;
  filecoinAddress?: Maybe<Scalars['EvmAddress']['output']>;
  hederaAddress?: Maybe<Scalars['EvmAddress']['output']>;
  icpAddress?: Maybe<Scalars['String']['output']>;
  moonbeamAddress?: Maybe<Scalars['EvmAddress']['output']>;
  nearAddress?: Maybe<Scalars['NearAddress']['output']>;
  opbnbAddress?: Maybe<Scalars['EvmAddress']['output']>;
  polkadotAddress?: Maybe<Scalars['String']['output']>;
  polygonAddress?: Maybe<Scalars['EvmAddress']['output']>;
  recipient?: Maybe<Scalars['Email']['output']>;
  solanaAddress?: Maybe<Scalars['String']['output']>;
  stellarAddress?: Maybe<Scalars['String']['output']>;
  stripeAccountId?: Maybe<Scalars['StripeAccountId']['output']>;
  tonAddress?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  walletId: Scalars['ID']['output'];
};

export type AnonymousUserFieldsFragment = {
  __typename?: 'AnonymousUser';
  anonId: string;
  profileId?: number | null;
  fingerprint: string;
  createdAt: any;
  updatedAt?: any | null;
};

export type ChartDataLabelsFieldsFragment = {
  __typename?: 'ChartDataLabels';
  labels?: Array<string> | null;
  data?: Array<number> | null;
  totalSurveys?: number | null;
  totalCompletions?: number | null;
  totalBusiness?: number | null;
  avgCompletionTime?: number | null;
  totalPageviews?: number | null;
  rankingCompletions?: Array<{
    __typename?: 'RankTopCompletions';
    surveyId?: string | null;
    completions?: number | null;
  } | null> | null;
};

export type DataUserFieldsFragment = {
  __typename?: 'DataUser';
  userMostCompletedSurveys?: Array<{
    __typename?: 'UserMostCompletedSurveys';
    profileId: any;
    numberOfSurveys?: number | null;
  } | null> | null;
  mostEarnedCashRewards?: Array<{
    __typename?: 'MostEarnedCashRewards';
    profileId: any;
    mostCashViaStripe?: number | null;
  } | null> | null;
  mostEarnedCryptocurrencyRewards?: {
    __typename?: 'MostEarnedCryptocurrencyRewards';
    nearRewards?: Array<{
      __typename?: 'CryptoReward';
      profileId: any;
      amountCrypto?: number | null;
      amountUsd?: number | null;
    } | null> | null;
    polkadotRewards?: Array<{
      __typename?: 'CryptoReward';
      profileId: any;
      amountCrypto?: number | null;
      amountUsd?: number | null;
    } | null> | null;
    polygonRewards?: Array<{
      __typename?: 'CryptoReward';
      profileId: any;
      amountCrypto?: number | null;
      amountUsd?: number | null;
    } | null> | null;
    totalCryptoInCash?: Array<{
      __typename?: 'AllCryptoRewardInUSD';
      profileId: any;
      amountUsd?: number | null;
    } | null> | null;
  } | null;
  mostDollarsSpentNFTMarketplace?: Array<{
    __typename?: 'MostDollarsSpentNFTMarketplace';
    profileId: any;
    realDollarsSpent?: number | null;
  } | null> | null;
  mostCryptocurrencySpentNFTMarketplace?: {
    __typename?: 'MostCryptocurrencySpentNFTMarketplace';
    mostSpentNear?: Array<{
      __typename?: 'CryptoReward';
      profileId: any;
      amountCrypto?: number | null;
      amountUsd?: number | null;
    } | null> | null;
    mostSpentPolkadot?: Array<{
      __typename?: 'CryptoReward';
      profileId: any;
      amountCrypto?: number | null;
      amountUsd?: number | null;
    } | null> | null;
    mostSpentPolygon?: Array<{
      __typename?: 'CryptoReward';
      profileId: any;
      amountCrypto?: number | null;
      amountUsd?: number | null;
    } | null> | null;
  } | null;
  mostInvitedUsers?: Array<{
    __typename?: 'MostInvitedUsers';
    profileId: any;
    usersInvited?: number | null;
  } | null> | null;
  mostCompletedSurveysInSpecificCategory?: Array<{
    __typename?: 'MostCompletedSurveysInSpecificCategory';
    profileId: any;
    categoryName?: string | null;
    surveysCompleted?: number | null;
  } | null> | null;
  highestAverageSurveyCompletionRate?: {
    __typename?: 'HighestAverageSurveyCompletionRate';
    highestAverageSurveyCompletion?: Array<{
      __typename?: 'AverageSurveyCompletionRatesByUser';
      profileId?: any | null;
      percentageCompletionAverage?: number | null;
    } | null> | null;
  } | null;
  mostConsistentSurveyCompletionFrequency?: {
    __typename?: 'MostConsistentSurveyCompletionFrequency';
    daily?: Array<{
      __typename?: 'UserCompletionFrequency';
      profileId: any;
      frequencyAverage?: number | null;
    } | null> | null;
    weekly?: Array<{
      __typename?: 'UserCompletionFrequency';
      profileId: any;
      frequencyAverage?: number | null;
    } | null> | null;
    monthly?: Array<{
      __typename?: 'UserCompletionFrequency';
      profileId: any;
      frequencyAverage?: number | null;
    } | null> | null;
    yearly?: Array<{
      __typename?: 'UserCompletionFrequency';
      profileId: any;
      frequencyAverage?: number | null;
    } | null> | null;
  } | null;
  highestNumberOfConsecutiveDaysWithSurveyCompletions?: Array<{
    __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions';
    profileId: any;
    longestDailyStreak?: number | null;
  } | null> | null;
  mostActiveParticipationInSpecificTypesOfSurveys?: {
    __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys';
    multipleChoiceSurveysRankings?: Array<{
      __typename?: 'MultipleChoiceSurveys';
      profileId: any;
      multipleChoiceSurveys?: number | null;
    } | null> | null;
    openEndedSurveysRankings?: Array<{
      __typename?: 'OpenEndedSurveys';
      profileId: any;
      openEndedSurveys?: number | null;
    } | null> | null;
  } | null;
  mostReferralsConvertedIntoActiveSurveyParticipants?: Array<{
    __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants';
    profileId: any;
    referralsSent?: number | null;
    referredParticipantCount?: number | null;
  } | null> | null;
  mostEngagementWithCommunityFeatures?: Array<{
    __typename?: 'MostEngagementWithCommunityFeatures';
    profileId: any;
    totalPosts?: number | null;
  } | null> | null;
  mostCreativeAndUniqueSurveyResponses?: {
    __typename?: 'MostCreativeAndUniqueSurveyResponses';
    surveyResponseRating?: Array<{
      __typename?: 'Rating';
      profileId: any;
      item_id?: number | null;
      rating?: number | null;
    } | null> | null;
    mediaRating?: Array<{
      __typename?: 'Rating';
      profileId: any;
      item_id?: number | null;
      rating?: number | null;
    } | null> | null;
  } | null;
};

export type EmbedSurveyResultFieldsFragment = {
  __typename?: 'EmbedSurveyResult';
  embedResultsId: string;
  result: any;
  fingerprint: string;
  claimId?: any | null;
  rewardId?: string | null;
  rewardType?: string | null;
  rewardClaimed?: boolean | null;
  rewardClaimedAt?: any | null;
  mediaClaimed?: boolean | null;
  mediaClaimedAt?: any | null;
  chainId?: any | null;
  createdAt: any;
  survey?: {
    __typename?: 'Survey';
    surveyId: any;
    title?: string | null;
    description?: string | null;
    logo?: string | null;
    surveyType: SurveyType;
    surveyStatus: SurveyStatus;
    funded?: boolean | null;
  } | null;
};

export type FillingQueueFieldsFragment = {
  __typename?: 'FillingQueue';
  fillingId: string;
  fillingType: FillingType;
  fillingStatus: FillingStatus;
  claimId?: string | null;
  metadata?: any | null;
  createdAt: string;
  updatedAt?: string | null;
  completedAt?: string | null;
  user?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
  survey?: {
    __typename?: 'Survey';
    surveyId: any;
    title?: string | null;
    description?: string | null;
    logo?: string | null;
    surveyType: SurveyType;
    surveyStatus: SurveyStatus;
    campaignType: SurveyCampaignType;
    fillingStatus?: string | null;
    rewardId?: string | null;
    rewardType?: string | null;
    cidHash?: any | null;
    tags?: Array<any | null> | null;
    claimId?: any | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    resultsId?: string | null;
    whiteList?: Array<any | null> | null;
    funded?: boolean | null;
    showQuestionNumbers?: string | null;
    pageNextText?: string | null;
    completeText?: string | null;
    showPrevButton?: boolean | null;
    firstPageIsStarted?: boolean | null;
    startSurveyText?: string | null;
    completedHtml?: string | null;
    showPreviewBeforeComplete?: string | null;
    privateKey?: string | null;
    publicKey?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    publishedAt?: any | null;
    pages?: Array<{
      __typename?: 'SurveyPage';
      name: string;
      title?: string | null;
      elements?: Array<
        | {
            __typename?: 'BooleanElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'CommentElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'RadiogroupElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RankingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RatingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            rateMax?: number | null;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'TextElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
      > | null;
    }> | null;
    results?: Array<{
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null> | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  } | null;
};

export type LeaderboardEntryFieldsFragment = {
  __typename?: 'LeaderboardEntry';
  leaderboardEntryId: number;
  leaderboardId: number;
  profileId: number;
  issuer?: string | null;
  iden3issuer?: string | null;
  avatar?: string | null;
  points?: number | null;
  rank?: number | null;
  createdAt?: any | null;
};

export type MarketplaceOrderFieldsFragment = {
  __typename?: 'MarketplaceOrder';
  orderId: string;
  productId: number;
  orderStatus: string;
  orderType: string;
  paymentType: string;
  orderAmount: number;
  metadata?: string | null;
  mediaClaimed?: boolean | null;
  mediaClaimedAt?: any | null;
  mediaClaimedFrom?: any | null;
  chainId?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  user?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
};

type NftFields_Erc721_Fragment = {
  __typename?: 'Erc721';
  nftId: any;
  contractName?: string | null;
  contractAddress: any;
  symbol: string;
  tokenId?: string | null;
  name: string;
  description: string;
  contentUri: string;
  chainId: any;
  collectionName: string;
  ercType: string;
  owners?: Array<{
    __typename?: 'Owner';
    amount: number;
    address: any;
    profileId?: any | null;
  }> | null;
  originalContent?: {
    __typename?: 'NFTContent';
    uri?: string | null;
    metaType?: string | null;
    animatedUrl?: string | null;
  } | null;
};

type NftFields_Nep171_Fragment = {
  __typename?: 'Nep171';
  nftId: any;
  seriesId: number;
  price?: number | null;
  royalty?: number | null;
  creatorId?: any | null;
  sellerId?: any | null;
  ownerId?: any | null;
  productId?: number | null;
  productType?: string | null;
  productStatus?: string | null;
  orderId?: string | null;
  orderStatus?: string | null;
  surveyId?: any | null;
  resultsId?: string | null;
  evmContractAddress?: any | null;
  chainId: any;
  mediaClaimed?: boolean | null;
  mediaClaimedAt?: any | null;
  mediaClaimedFrom?: any | null;
  metadata: {
    __typename?: 'Metadata';
    title: string;
    description: string;
    media: string;
    mediaHash?: string | null;
    copies?: number | null;
    issuedAt?: any | null;
    expiresAt?: any | null;
    startsAt?: any | null;
    updatedAt?: any | null;
    extra?: string | null;
    reference?: string | null;
    referenceHash?: string | null;
  };
};

export type NftFieldsFragment =
  | NftFields_Erc721_Fragment
  | NftFields_Nep171_Fragment;

export type NftGalleryFieldsFragment = {
  __typename?: 'NftGallery';
  nftGalleryId: any;
  name: string;
  profileId: any;
  chainId?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  items?: Array<
    | {
        __typename?: 'Erc721';
        nftId: any;
        contractName?: string | null;
        contractAddress: any;
        symbol: string;
        tokenId?: string | null;
        name: string;
        description: string;
        contentUri: string;
        chainId: any;
        collectionName: string;
        ercType: string;
        owners?: Array<{
          __typename?: 'Owner';
          amount: number;
          address: any;
          profileId?: any | null;
        }> | null;
        originalContent?: {
          __typename?: 'NFTContent';
          uri?: string | null;
          metaType?: string | null;
          animatedUrl?: string | null;
        } | null;
      }
    | {
        __typename?: 'Nep171';
        nftId: any;
        seriesId: number;
        price?: number | null;
        royalty?: number | null;
        creatorId?: any | null;
        sellerId?: any | null;
        ownerId?: any | null;
        productId?: number | null;
        productType?: string | null;
        productStatus?: string | null;
        orderId?: string | null;
        orderStatus?: string | null;
        surveyId?: any | null;
        resultsId?: string | null;
        evmContractAddress?: any | null;
        chainId: any;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        mediaClaimedFrom?: any | null;
        metadata: {
          __typename?: 'Metadata';
          title: string;
          description: string;
          media: string;
          mediaHash?: string | null;
          copies?: number | null;
          issuedAt?: any | null;
          expiresAt?: any | null;
          startsAt?: any | null;
          updatedAt?: any | null;
          extra?: string | null;
          reference?: string | null;
          referenceHash?: string | null;
        };
      }
  > | null;
};

export type NftImageFieldsFragment = {
  __typename?: 'NftImage';
  nftImageId: string;
  contractAddress: any;
  tokenId: string;
  uri: any;
  chainId: any;
  verified: boolean;
  createdAt: any;
};

export type ProductFieldsFragment = {
  __typename?: 'MarketplaceProduct';
  productId: string;
  name: string;
  description: string;
  image?: string | null;
  productType: string;
  price?: number | null;
  productStatus: string;
  duration?: number | null;
  mediaId?: string | null;
  metadata?: string | null;
  whiteList?: string | null;
  sellerId?: any | null;
  ownerId?: string | null;
  chainId?: any | null;
  createdAt: any;
  updatedAt?: any | null;
};

export type QuestionFieldsFragment = {
  __typename?: 'Question';
  surveyId: any;
  description: string;
  createdAt: any;
};

type SurveyElementFields_BooleanElement_Fragment = {
  __typename?: 'BooleanElement';
  name: string;
  title?: string | null;
  type: SurveyElementType;
  points?: number | null;
  isRequired: boolean;
  correctAnswer?: string | null;
};

type SurveyElementFields_CommentElement_Fragment = {
  __typename?: 'CommentElement';
  name: string;
  title?: string | null;
  type: SurveyElementType;
  points?: number | null;
  isRequired: boolean;
  correctAnswer?: string | null;
};

type SurveyElementFields_RadiogroupElement_Fragment = {
  __typename?: 'RadiogroupElement';
  name: string;
  title?: string | null;
  type: SurveyElementType;
  points?: number | null;
  isRequired: boolean;
  correctAnswer?: string | null;
  choices?: Array<
    | { __typename?: 'TextValueType'; text: string; value: string }
    | { __typename?: 'ValueType'; value: string }
  > | null;
};

type SurveyElementFields_RankingElement_Fragment = {
  __typename?: 'RankingElement';
  name: string;
  title?: string | null;
  type: SurveyElementType;
  points?: number | null;
  isRequired: boolean;
  correctAnswer?: string | null;
  choices?: Array<
    | { __typename?: 'TextValueType'; text: string; value: string }
    | { __typename?: 'ValueType'; value: string }
  > | null;
};

type SurveyElementFields_RatingElement_Fragment = {
  __typename?: 'RatingElement';
  name: string;
  title?: string | null;
  type: SurveyElementType;
  rateMax?: number | null;
  points?: number | null;
  isRequired: boolean;
  correctAnswer?: string | null;
};

type SurveyElementFields_TextElement_Fragment = {
  __typename?: 'TextElement';
  name: string;
  title?: string | null;
  type: SurveyElementType;
  points?: number | null;
  isRequired: boolean;
  correctAnswer?: string | null;
};

export type SurveyElementFieldsFragment =
  | SurveyElementFields_BooleanElement_Fragment
  | SurveyElementFields_CommentElement_Fragment
  | SurveyElementFields_RadiogroupElement_Fragment
  | SurveyElementFields_RankingElement_Fragment
  | SurveyElementFields_RatingElement_Fragment
  | SurveyElementFields_TextElement_Fragment;

type SurveyElementItemValueTypeFields_TextValueType_Fragment = {
  __typename?: 'TextValueType';
  text: string;
  value: string;
};

type SurveyElementItemValueTypeFields_ValueType_Fragment = {
  __typename?: 'ValueType';
  value: string;
};

export type SurveyElementItemValueTypeFieldsFragment =
  | SurveyElementItemValueTypeFields_TextValueType_Fragment
  | SurveyElementItemValueTypeFields_ValueType_Fragment;

export type SurveyFieldsFragment = {
  __typename?: 'Survey';
  surveyId: any;
  title?: string | null;
  description?: string | null;
  logo?: string | null;
  surveyType: SurveyType;
  surveyStatus: SurveyStatus;
  campaignType: SurveyCampaignType;
  fillingStatus?: string | null;
  rewardId?: string | null;
  rewardType?: string | null;
  cidHash?: any | null;
  tags?: Array<any | null> | null;
  claimId?: any | null;
  rewardClaimed?: boolean | null;
  rewardClaimedAt?: any | null;
  mediaClaimed?: boolean | null;
  mediaClaimedAt?: any | null;
  mediaClaimedFrom?: any | null;
  resultsId?: string | null;
  whiteList?: Array<any | null> | null;
  funded?: boolean | null;
  showQuestionNumbers?: string | null;
  pageNextText?: string | null;
  completeText?: string | null;
  showPrevButton?: boolean | null;
  firstPageIsStarted?: boolean | null;
  startSurveyText?: string | null;
  completedHtml?: string | null;
  showPreviewBeforeComplete?: string | null;
  privateKey?: string | null;
  publicKey?: string | null;
  createdAt: any;
  updatedAt?: any | null;
  publishedAt?: any | null;
  pages?: Array<{
    __typename?: 'SurveyPage';
    name: string;
    title?: string | null;
    elements?: Array<
      | {
          __typename?: 'BooleanElement';
          name: string;
          title?: string | null;
          type: SurveyElementType;
          points?: number | null;
          isRequired: boolean;
          correctAnswer?: string | null;
        }
      | {
          __typename?: 'CommentElement';
          name: string;
          title?: string | null;
          type: SurveyElementType;
          points?: number | null;
          isRequired: boolean;
          correctAnswer?: string | null;
        }
      | {
          __typename?: 'RadiogroupElement';
          name: string;
          title?: string | null;
          type: SurveyElementType;
          points?: number | null;
          isRequired: boolean;
          correctAnswer?: string | null;
          choices?: Array<
            | { __typename?: 'TextValueType'; text: string; value: string }
            | { __typename?: 'ValueType'; value: string }
          > | null;
        }
      | {
          __typename?: 'RankingElement';
          name: string;
          title?: string | null;
          type: SurveyElementType;
          points?: number | null;
          isRequired: boolean;
          correctAnswer?: string | null;
          choices?: Array<
            | { __typename?: 'TextValueType'; text: string; value: string }
            | { __typename?: 'ValueType'; value: string }
          > | null;
        }
      | {
          __typename?: 'RatingElement';
          name: string;
          title?: string | null;
          type: SurveyElementType;
          rateMax?: number | null;
          points?: number | null;
          isRequired: boolean;
          correctAnswer?: string | null;
        }
      | {
          __typename?: 'TextElement';
          name: string;
          title?: string | null;
          type: SurveyElementType;
          points?: number | null;
          isRequired: boolean;
          correctAnswer?: string | null;
        }
    > | null;
  }> | null;
  results?: Array<{
    __typename?: 'SurveyResult';
    resultsId: string;
    result: any;
    claimId?: any | null;
    rewardId?: string | null;
    rewardType?: string | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    chainId?: any | null;
    score?: number | null;
    credibilityScore?: any | null;
    createdAt: any;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      resultsId?: string | null;
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      funded?: boolean | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
      }> | null;
    } | null;
  } | null> | null;
  user?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type SurveyGatingFieldsFragment = {
  __typename?: 'SurveyGating';
  gateId: string;
  surveyId: number;
  profileId?: number | null;
  requirements: any;
  createdAt: any;
  updatedAt?: any | null;
};

export type SurveyPageFieldsFragment = {
  __typename?: 'SurveyPage';
  name: string;
  title?: string | null;
  elements?: Array<
    | {
        __typename?: 'BooleanElement';
        name: string;
        title?: string | null;
        type: SurveyElementType;
        points?: number | null;
        isRequired: boolean;
        correctAnswer?: string | null;
      }
    | {
        __typename?: 'CommentElement';
        name: string;
        title?: string | null;
        type: SurveyElementType;
        points?: number | null;
        isRequired: boolean;
        correctAnswer?: string | null;
      }
    | {
        __typename?: 'RadiogroupElement';
        name: string;
        title?: string | null;
        type: SurveyElementType;
        points?: number | null;
        isRequired: boolean;
        correctAnswer?: string | null;
        choices?: Array<
          | { __typename?: 'TextValueType'; text: string; value: string }
          | { __typename?: 'ValueType'; value: string }
        > | null;
      }
    | {
        __typename?: 'RankingElement';
        name: string;
        title?: string | null;
        type: SurveyElementType;
        points?: number | null;
        isRequired: boolean;
        correctAnswer?: string | null;
        choices?: Array<
          | { __typename?: 'TextValueType'; text: string; value: string }
          | { __typename?: 'ValueType'; value: string }
        > | null;
      }
    | {
        __typename?: 'RatingElement';
        name: string;
        title?: string | null;
        type: SurveyElementType;
        rateMax?: number | null;
        points?: number | null;
        isRequired: boolean;
        correctAnswer?: string | null;
      }
    | {
        __typename?: 'TextElement';
        name: string;
        title?: string | null;
        type: SurveyElementType;
        points?: number | null;
        isRequired: boolean;
        correctAnswer?: string | null;
      }
  > | null;
};

export type SurveyReferralFieldsFragment = {
  __typename?: 'SurveyReferral';
  referralId: string;
  surveyId?: any | null;
  profileId: any;
  invitedEmail: any;
  invitedStatus: string;
  invitedId?: any | null;
  referralStatus: string;
  accountStatus?: AccountStatus | null;
  displayName?: string | null;
  email?: any | null;
  avatar?: string | null;
  createdAt: any;
  updatedAt?: any | null;
  invitedAt?: any | null;
  completedAt?: any | null;
};

export type SurveyResultFieldsFragment = {
  __typename?: 'SurveyResult';
  resultsId: string;
  result: any;
  claimId?: any | null;
  rewardId?: string | null;
  rewardType?: string | null;
  rewardClaimed?: boolean | null;
  rewardClaimedAt?: any | null;
  mediaClaimed?: boolean | null;
  mediaClaimedAt?: any | null;
  chainId?: any | null;
  score?: number | null;
  credibilityScore?: any | null;
  createdAt: any;
  user?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
  survey?: {
    __typename?: 'Survey';
    resultsId?: string | null;
    surveyId: any;
    title?: string | null;
    description?: string | null;
    logo?: string | null;
    surveyType: SurveyType;
    surveyStatus: SurveyStatus;
    funded?: boolean | null;
    pages?: Array<{
      __typename?: 'SurveyPage';
      name: string;
      title?: string | null;
    }> | null;
  } | null;
};

export type SurveyRewardFieldsFragment = {
  __typename?: 'SurveyReward';
  rewardId: string;
  rewardType: string;
  mediaId?: string | null;
  surveyId: any;
  profileId: any;
  resultsId?: string | null;
  chainId?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  mediaPrize?:
    | {
        __typename?: 'Erc721';
        nftId: any;
        contractName?: string | null;
        contractAddress: any;
        symbol: string;
        tokenId?: string | null;
        name: string;
        description: string;
        contentUri: string;
        chainId: any;
        collectionName: string;
        ercType: string;
        owners?: Array<{
          __typename?: 'Owner';
          amount: number;
          address: any;
          profileId?: any | null;
        }> | null;
        originalContent?: {
          __typename?: 'NFTContent';
          uri?: string | null;
          metaType?: string | null;
          animatedUrl?: string | null;
        } | null;
      }
    | {
        __typename?: 'Nep171';
        nftId: any;
        seriesId: number;
        price?: number | null;
        royalty?: number | null;
        creatorId?: any | null;
        sellerId?: any | null;
        ownerId?: any | null;
        productId?: number | null;
        productType?: string | null;
        productStatus?: string | null;
        orderId?: string | null;
        orderStatus?: string | null;
        surveyId?: any | null;
        resultsId?: string | null;
        evmContractAddress?: any | null;
        chainId: any;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        mediaClaimedFrom?: any | null;
        metadata: {
          __typename?: 'Metadata';
          title: string;
          description: string;
          media: string;
          mediaHash?: string | null;
          copies?: number | null;
          issuedAt?: any | null;
          expiresAt?: any | null;
          startsAt?: any | null;
          updatedAt?: any | null;
          extra?: string | null;
          reference?: string | null;
          referenceHash?: string | null;
        };
      }
    | null;
};

export type TransactionCreditFieldsFragment = {
  __typename?: 'TransactionCredit';
  transactionId: string;
  orderId?: string | null;
  amount: number;
  transactionHash?: any | null;
  transactionType: TransactionType;
  transactionStatus: TransactionStatus;
  transactionSource?: string | null;
  createdAt: string;
  user?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
  survey?: {
    __typename?: 'Survey';
    surveyId: any;
    title?: string | null;
    description?: string | null;
    logo?: string | null;
    surveyType: SurveyType;
    surveyStatus: SurveyStatus;
    campaignType: SurveyCampaignType;
    fillingStatus?: string | null;
    rewardId?: string | null;
    rewardType?: string | null;
    cidHash?: any | null;
    tags?: Array<any | null> | null;
    claimId?: any | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    resultsId?: string | null;
    whiteList?: Array<any | null> | null;
    funded?: boolean | null;
    showQuestionNumbers?: string | null;
    pageNextText?: string | null;
    completeText?: string | null;
    showPrevButton?: boolean | null;
    firstPageIsStarted?: boolean | null;
    startSurveyText?: string | null;
    completedHtml?: string | null;
    showPreviewBeforeComplete?: string | null;
    privateKey?: string | null;
    publicKey?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    publishedAt?: any | null;
    pages?: Array<{
      __typename?: 'SurveyPage';
      name: string;
      title?: string | null;
      elements?: Array<
        | {
            __typename?: 'BooleanElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'CommentElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'RadiogroupElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RankingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RatingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            rateMax?: number | null;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'TextElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
      > | null;
    }> | null;
    results?: Array<{
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null> | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  } | null;
  surveyResult?: {
    __typename?: 'SurveyResult';
    resultsId: string;
    result: any;
    claimId?: any | null;
    rewardId?: string | null;
    rewardType?: string | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    chainId?: any | null;
    score?: number | null;
    credibilityScore?: any | null;
    createdAt: any;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      resultsId?: string | null;
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      funded?: boolean | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
      }> | null;
    } | null;
  } | null;
};

export type UserBoostFieldsFragment = {
  __typename?: 'UserBoost';
  boostId: string;
  profileId: any;
  startAt: any;
  endAt: any;
  boostStatus: string;
  createdAt: any;
  updatedAt?: any | null;
};

export type UserContractFieldsFragment = {
  __typename?: 'UserContract';
  contractId: number;
  profileId: number;
  surveyId?: number | null;
  network?: string | null;
  contractType?: string | null;
  contractName?: string | null;
  contractAddress?: any | null;
  ownerAddress?: string | null;
  funcCall?: string | null;
  input?: string | null;
  output?: string | null;
  createdAt: any;
};

export type UserFieldsFragment = {
  __typename?: 'User';
  profileId: any;
  firstName?: string | null;
  lastName?: string | null;
  businessName?: string | null;
  displayName?: string | null;
  bio?: string | null;
  location?: string | null;
  age?: number | null;
  gender?: string | null;
  email?: any | null;
  avatar?: any | null;
  category?: any | null;
  interests?: Array<any | null> | null;
  accountType: AccountType;
  accountStatus: AccountStatus;
  inviter?: any | null;
  verified?: boolean | null;
  boosted?: boolean | null;
  visibility: Visibility;
  issuer?: string | null;
  iden3issuer?: string | null;
  elegibleSurveys?: number | null;
  publishedSurveys?: number | null;
  apiKey?: string | null;
  kycAttemptId?: string | null;
  createdAt?: any | null;
  lastLoginAt?: any | null;
  wallet?: {
    __typename?: 'Wallet';
    walletId: string;
    recipient?: any | null;
    credit: number;
    nearAddress?: any | null;
    avaxAddress?: any | null;
    auroraAddress?: any | null;
    polygonAddress?: any | null;
    moonbeamAddress?: any | null;
    ethereumAddress?: any | null;
    tonAddress?: string | null;
    cronosAddress?: any | null;
    bobaAddress?: any | null;
    bscAddress?: any | null;
    opbnbAddress?: any | null;
    filecoinAddress?: any | null;
    baseAddress?: any | null;
    hederaAddress?: any | null;
    stellarAddress?: string | null;
    solanaAddress?: string | null;
    polkadotAddress?: string | null;
    icpAddress?: string | null;
    bitfinityAddress?: any | null;
    stripeAccountId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
  } | null;
};

export type UserMembershipFieldsFragment = {
  __typename?: 'UserMembership';
  membershipId: string;
  profileId: any;
  startAt: any;
  endAt: any;
  membershipStatus: string;
  createdAt: any;
  updatedAt?: any | null;
};

export type UserPrizeFieldsFragment = {
  __typename?: 'UserPrize';
  prizeId: string;
  rewardId: string;
  surveyId: any;
  resultId: string;
  profileId: any;
  chainId?: any | null;
  createdAt: string;
};

export type UserRefferalFieldsFragment = {
  __typename?: 'UserRefferal';
  refferalId: string;
  surveyId?: any | null;
  profileId: any;
  invitedEmail: any;
  invitedStatus: string;
  invitedId?: any | null;
  refferalStatus: string;
  accountStatus?: AccountStatus | null;
  displayName?: string | null;
  email?: any | null;
  avatar?: string | null;
  createdAt: any;
  updatedAt?: any | null;
  invitedAt?: any | null;
  completedAt?: any | null;
};

export type WalletFieldsFragment = {
  __typename?: 'Wallet';
  walletId: string;
  credit: number;
  recipient?: any | null;
  nearAddress?: any | null;
  avaxAddress?: any | null;
  auroraAddress?: any | null;
  polygonAddress?: any | null;
  moonbeamAddress?: any | null;
  ethereumAddress?: any | null;
  tonAddress?: string | null;
  cronosAddress?: any | null;
  bobaAddress?: any | null;
  bscAddress?: any | null;
  opbnbAddress?: any | null;
  filecoinAddress?: any | null;
  baseAddress?: any | null;
  hederaAddress?: any | null;
  stellarAddress?: string | null;
  solanaAddress?: string | null;
  polkadotAddress?: string | null;
  icpAddress?: string | null;
  bitfinityAddress?: any | null;
  stripeAccountId?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  user?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;

export type AuthenticateMutation = {
  __typename?: 'Mutation';
  authenticate: {
    __typename?: 'AuthenticationResult';
    accessToken: any;
    refreshToken: any;
  };
};

export type BanUnbanUserMutationVariables = Exact<{
  request: BanUnbanUserRequest;
}>;

export type BanUnbanUserMutation = {
  __typename?: 'Mutation';
  banUnbanUser: {
    __typename: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  };
};

export type ClaimMarketplaceOrderMediaMutationVariables = Exact<{
  request: ClaimMarketplaceOrderMediaRequest;
}>;

export type ClaimMarketplaceOrderMediaMutation = {
  __typename?: 'Mutation';
  claimMarketplaceOrderMedia: {
    __typename: 'MarketplaceOrder';
    orderId: string;
    productId: number;
    orderStatus: string;
    orderType: string;
    paymentType: string;
    orderAmount: number;
    metadata?: string | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type ClaimSurveyMediaMutationVariables = Exact<{
  request: ClaimSurveyMediaRequest;
}>;

export type ClaimSurveyMediaMutation = {
  __typename?: 'Mutation';
  claimSurveyMedia: {
    __typename: 'SurveyReward';
    rewardId: string;
    rewardType: string;
    mediaId?: string | null;
    surveyId: any;
    profileId: any;
    resultsId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    mediaPrize?:
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
      | null;
  };
};

export type ClaimSurveyRewardMutationVariables = Exact<{
  request: ClaimSurveyRewardRequest;
}>;

export type ClaimSurveyRewardMutation = {
  __typename?: 'Mutation';
  claimSurveyReward: {
    __typename: 'SurveyReward';
    rewardId: string;
    rewardType: string;
    mediaId?: string | null;
    surveyId: any;
    profileId: any;
    resultsId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    mediaPrize?:
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
      | null;
  };
};

export type CreateAnonymousUserMutationVariables = Exact<{
  request: CreateAnonymousUserRequest;
}>;

export type CreateAnonymousUserMutation = {
  __typename?: 'Mutation';
  createAnonymousUser: {
    __typename: 'AnonymousUser';
    anonId: string;
    profileId?: number | null;
    fingerprint: string;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type CreateEmbedSurveyResultMutationVariables = Exact<{
  request: CreateEmbedSurveyResultRequest;
}>;

export type CreateEmbedSurveyResultMutation = {
  __typename?: 'Mutation';
  createEmbedSurveyResult: {
    __typename: 'EmbedSurveyResult';
    embedResultsId: string;
    result: any;
    fingerprint: string;
    claimId?: any | null;
    rewardId?: string | null;
    rewardType?: string | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    chainId?: any | null;
    createdAt: any;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      funded?: boolean | null;
    } | null;
  };
};

export type CreateErc721NftGalleryMutationVariables = Exact<{
  request: NftGalleryCreateRequest;
}>;

export type CreateErc721NftGalleryMutation = {
  __typename?: 'Mutation';
  createErc721NftGallery: any;
};

export type CreateFillingQueueMutationVariables = Exact<{
  request: CreateFillingQueueRequest;
}>;

export type CreateFillingQueueMutation = {
  __typename?: 'Mutation';
  createFillingQueue: {
    __typename: 'FillingQueue';
    fillingId: string;
    fillingType: FillingType;
    fillingStatus: FillingStatus;
    claimId?: string | null;
    metadata?: any | null;
    createdAt: string;
    updatedAt?: string | null;
    completedAt?: string | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      campaignType: SurveyCampaignType;
      fillingStatus?: string | null;
      rewardId?: string | null;
      rewardType?: string | null;
      cidHash?: any | null;
      tags?: Array<any | null> | null;
      claimId?: any | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      resultsId?: string | null;
      whiteList?: Array<any | null> | null;
      funded?: boolean | null;
      showQuestionNumbers?: string | null;
      pageNextText?: string | null;
      completeText?: string | null;
      showPrevButton?: boolean | null;
      firstPageIsStarted?: boolean | null;
      startSurveyText?: string | null;
      completedHtml?: string | null;
      showPreviewBeforeComplete?: string | null;
      privateKey?: string | null;
      publicKey?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      publishedAt?: any | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
        elements?: Array<
          | {
              __typename?: 'BooleanElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'CommentElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'RadiogroupElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RankingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RatingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              rateMax?: number | null;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'TextElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
        > | null;
      }> | null;
      results?: Array<{
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null> | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    } | null;
  };
};

export type CreateMarketplaceOrderMutationVariables = Exact<{
  request: CreateMarketplaceOrderRequest;
}>;

export type CreateMarketplaceOrderMutation = {
  __typename?: 'Mutation';
  createMarketplaceOrder: {
    __typename: 'MarketplaceOrder';
    orderId: string;
    productId: number;
    orderStatus: string;
    orderType: string;
    paymentType: string;
    orderAmount: number;
    metadata?: string | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type CreateNftGalleryMutationVariables = Exact<{
  request: NftGalleryCreateRequest;
}>;

export type CreateNftGalleryMutation = {
  __typename?: 'Mutation';
  createNftGallery: any;
};

export type CreateProductMutationVariables = Exact<{
  request: CreateProductRequest;
}>;

export type CreateProductMutation = {
  __typename?: 'Mutation';
  createProduct: {
    __typename: 'MarketplaceProduct';
    productId: string;
    name: string;
    description: string;
    image?: string | null;
    productType: string;
    price?: number | null;
    productStatus: string;
    duration?: number | null;
    mediaId?: string | null;
    metadata?: string | null;
    whiteList?: string | null;
    sellerId?: any | null;
    ownerId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type CreateProfileMutationVariables = Exact<{
  request: CreateProfileRequest;
}>;

export type CreateProfileMutation = {
  __typename?: 'Mutation';
  createProfile: {
    __typename: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  };
};

export type CreateSurveyMutationVariables = Exact<{
  request: SurveyCreateRequest;
}>;

export type CreateSurveyMutation = {
  __typename?: 'Mutation';
  createSurvey: {
    __typename: 'Survey';
    surveyId: any;
    title?: string | null;
    description?: string | null;
    logo?: string | null;
    surveyType: SurveyType;
    surveyStatus: SurveyStatus;
    campaignType: SurveyCampaignType;
    fillingStatus?: string | null;
    rewardId?: string | null;
    rewardType?: string | null;
    cidHash?: any | null;
    tags?: Array<any | null> | null;
    claimId?: any | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    resultsId?: string | null;
    whiteList?: Array<any | null> | null;
    funded?: boolean | null;
    showQuestionNumbers?: string | null;
    pageNextText?: string | null;
    completeText?: string | null;
    showPrevButton?: boolean | null;
    firstPageIsStarted?: boolean | null;
    startSurveyText?: string | null;
    completedHtml?: string | null;
    showPreviewBeforeComplete?: string | null;
    privateKey?: string | null;
    publicKey?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    publishedAt?: any | null;
    pages?: Array<{
      __typename?: 'SurveyPage';
      name: string;
      title?: string | null;
      elements?: Array<
        | {
            __typename?: 'BooleanElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'CommentElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'RadiogroupElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RankingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RatingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            rateMax?: number | null;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'TextElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
      > | null;
    }> | null;
    results?: Array<{
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null> | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type CreateSurveyGatingMutationVariables = Exact<{
  request: CreateSurveyGatingRequest;
}>;

export type CreateSurveyGatingMutation = {
  __typename?: 'Mutation';
  createSurveyGating: {
    __typename: 'SurveyGating';
    gateId: string;
    surveyId: number;
    profileId?: number | null;
    requirements: any;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type CreateSurveyReferralMutationVariables = Exact<{
  request: CreateSurveyReferralRequest;
}>;

export type CreateSurveyReferralMutation = {
  __typename?: 'Mutation';
  createSurveyReferral: {
    __typename: 'SurveyReferral';
    referralId: string;
    surveyId?: any | null;
    profileId: any;
    invitedEmail: any;
    invitedStatus: string;
    invitedId?: any | null;
    referralStatus: string;
    accountStatus?: AccountStatus | null;
    displayName?: string | null;
    email?: any | null;
    avatar?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    invitedAt?: any | null;
    completedAt?: any | null;
  };
};

export type CreateSurveyResultMutationVariables = Exact<{
  request: CreateSurveyResultRequest;
}>;

export type CreateSurveyResultMutation = {
  __typename?: 'Mutation';
  createSurveyResult: {
    __typename: 'SurveyResult';
    resultsId: string;
    result: any;
    claimId?: any | null;
    rewardId?: string | null;
    rewardType?: string | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    chainId?: any | null;
    score?: number | null;
    credibilityScore?: any | null;
    createdAt: any;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      resultsId?: string | null;
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      funded?: boolean | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
      }> | null;
    } | null;
  };
};

export type CreateSurveyRewardMutationVariables = Exact<{
  request: CreateSurveyRewardRequest;
}>;

export type CreateSurveyRewardMutation = {
  __typename?: 'Mutation';
  createSurveyReward: {
    __typename: 'SurveyReward';
    rewardId: string;
    rewardType: string;
    mediaId?: string | null;
    surveyId: any;
    profileId: any;
    resultsId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    mediaPrize?:
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
      | null;
  };
};

export type CreateTransactionCreditMutationVariables = Exact<{
  request: TransactionCreditRequest;
}>;

export type CreateTransactionCreditMutation = {
  __typename?: 'Mutation';
  createTransactionCredit: {
    __typename: 'TransactionCredit';
    transactionId: string;
    orderId?: string | null;
    amount: number;
    transactionHash?: any | null;
    transactionType: TransactionType;
    transactionStatus: TransactionStatus;
    transactionSource?: string | null;
    createdAt: string;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      campaignType: SurveyCampaignType;
      fillingStatus?: string | null;
      rewardId?: string | null;
      rewardType?: string | null;
      cidHash?: any | null;
      tags?: Array<any | null> | null;
      claimId?: any | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      resultsId?: string | null;
      whiteList?: Array<any | null> | null;
      funded?: boolean | null;
      showQuestionNumbers?: string | null;
      pageNextText?: string | null;
      completeText?: string | null;
      showPrevButton?: boolean | null;
      firstPageIsStarted?: boolean | null;
      startSurveyText?: string | null;
      completedHtml?: string | null;
      showPreviewBeforeComplete?: string | null;
      privateKey?: string | null;
      publicKey?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      publishedAt?: any | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
        elements?: Array<
          | {
              __typename?: 'BooleanElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'CommentElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'RadiogroupElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RankingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RatingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              rateMax?: number | null;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'TextElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
        > | null;
      }> | null;
      results?: Array<{
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null> | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    } | null;
    surveyResult?: {
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null;
  };
};

export type CreateTransactionDebitMutationVariables = Exact<{
  request: TransactionDebitRequest;
}>;

export type CreateTransactionDebitMutation = {
  __typename?: 'Mutation';
  createTransactionDebit: {
    __typename: 'TransactionCredit';
    transactionId: string;
    orderId?: string | null;
    amount: number;
    transactionHash?: any | null;
    transactionType: TransactionType;
    transactionStatus: TransactionStatus;
    transactionSource?: string | null;
    createdAt: string;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      campaignType: SurveyCampaignType;
      fillingStatus?: string | null;
      rewardId?: string | null;
      rewardType?: string | null;
      cidHash?: any | null;
      tags?: Array<any | null> | null;
      claimId?: any | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      resultsId?: string | null;
      whiteList?: Array<any | null> | null;
      funded?: boolean | null;
      showQuestionNumbers?: string | null;
      pageNextText?: string | null;
      completeText?: string | null;
      showPrevButton?: boolean | null;
      firstPageIsStarted?: boolean | null;
      startSurveyText?: string | null;
      completedHtml?: string | null;
      showPreviewBeforeComplete?: string | null;
      privateKey?: string | null;
      publicKey?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      publishedAt?: any | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
        elements?: Array<
          | {
              __typename?: 'BooleanElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'CommentElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'RadiogroupElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RankingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RatingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              rateMax?: number | null;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'TextElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
        > | null;
      }> | null;
      results?: Array<{
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null> | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    } | null;
    surveyResult?: {
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null;
  };
};

export type CreateUserBoostMutationVariables = Exact<{
  request: CreateUserBoostRequest;
}>;

export type CreateUserBoostMutation = {
  __typename?: 'Mutation';
  createUserBoost: {
    __typename: 'UserBoost';
    boostId: string;
    profileId: any;
    startAt: any;
    endAt: any;
    boostStatus: string;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type CreateUserContractMutationVariables = Exact<{
  request: CreateUserContractRequest;
}>;

export type CreateUserContractMutation = {
  __typename?: 'Mutation';
  createUserContract: {
    __typename: 'UserContract';
    contractId: number;
    profileId: number;
    surveyId?: number | null;
    network?: string | null;
    contractType?: string | null;
    contractName?: string | null;
    contractAddress?: any | null;
    ownerAddress?: string | null;
    funcCall?: string | null;
    input?: string | null;
    output?: string | null;
    createdAt: any;
  };
};

export type CreateUserMembershipMutationVariables = Exact<{
  request: CreateUserMembershipRequest;
}>;

export type CreateUserMembershipMutation = {
  __typename?: 'Mutation';
  createUserMembership: {
    __typename: 'UserMembership';
    membershipId: string;
    profileId: any;
    startAt: any;
    endAt: any;
    membershipStatus: string;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type CreateUserRefferalMutationVariables = Exact<{
  request: CreateUserRefferalRequest;
}>;

export type CreateUserRefferalMutation = {
  __typename?: 'Mutation';
  createUserRefferal: {
    __typename: 'UserRefferal';
    refferalId: string;
    surveyId?: any | null;
    profileId: any;
    invitedEmail: any;
    invitedStatus: string;
    invitedId?: any | null;
    refferalStatus: string;
    accountStatus?: AccountStatus | null;
    displayName?: string | null;
    email?: any | null;
    avatar?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    invitedAt?: any | null;
    completedAt?: any | null;
  };
};

export type CreateWalletMutationVariables = Exact<{
  request: CreateWalletRequest;
}>;

export type CreateWalletMutation = {
  __typename?: 'Mutation';
  createWallet: {
    __typename: 'Wallet';
    walletId: string;
    credit: number;
    recipient?: any | null;
    nearAddress?: any | null;
    avaxAddress?: any | null;
    auroraAddress?: any | null;
    polygonAddress?: any | null;
    moonbeamAddress?: any | null;
    ethereumAddress?: any | null;
    tonAddress?: string | null;
    cronosAddress?: any | null;
    bobaAddress?: any | null;
    bscAddress?: any | null;
    opbnbAddress?: any | null;
    filecoinAddress?: any | null;
    baseAddress?: any | null;
    hederaAddress?: any | null;
    stellarAddress?: string | null;
    solanaAddress?: string | null;
    polkadotAddress?: string | null;
    icpAddress?: string | null;
    bitfinityAddress?: any | null;
    stripeAccountId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type DeleteFillingQueueMutationVariables = Exact<{
  request: DeleteFillingQueueRequest;
}>;

export type DeleteFillingQueueMutation = {
  __typename?: 'Mutation';
  deleteFillingQueue?: any | null;
};

export type DeleteProductMutationVariables = Exact<{
  request: DeleteProductRequest;
}>;

export type DeleteProductMutation = {
  __typename?: 'Mutation';
  deleteProduct?: any | null;
};

export type DeleteSurveyMutationVariables = Exact<{
  request: SurveyDeleteRequest;
}>;

export type DeleteSurveyMutation = {
  __typename?: 'Mutation';
  deleteSurvey?: any | null;
};

export type DeleteSurveyResultMutationVariables = Exact<{
  request: DeleteSurveyResultRequest;
}>;

export type DeleteSurveyResultMutation = {
  __typename?: 'Mutation';
  deleteSurveyResult?: any | null;
};

export type DeleteTransactionCreditMutationVariables = Exact<{
  request: DeleteTransactionCreditRequest;
}>;

export type DeleteTransactionCreditMutation = {
  __typename?: 'Mutation';
  deleteTransactionCredit?: any | null;
};

export type DeleteWalletMutationVariables = Exact<{
  request: DeleteWalletRequest;
}>;

export type DeleteWalletMutation = {
  __typename?: 'Mutation';
  deleteWallet: boolean;
};

export type InviteUserMutationVariables = Exact<{
  request: InviteUserRequest;
}>;

export type InviteUserMutation = {
  __typename?: 'Mutation';
  inviteUser: {
    __typename: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  };
};

export type RefreshMutationVariables = Exact<{
  request: RefreshRequest;
}>;

export type RefreshMutation = {
  __typename?: 'Mutation';
  refresh: {
    __typename?: 'AuthenticationResult';
    accessToken: any;
    refreshToken: any;
  };
};

export type RefundMarketplaceOrderMutationVariables = Exact<{
  request: RefundMarketplaceOrderRequest;
}>;

export type RefundMarketplaceOrderMutation = {
  __typename?: 'Mutation';
  refundMarketplaceOrder: {
    __typename: 'MarketplaceOrder';
    orderId: string;
    productId: number;
    orderStatus: string;
    orderType: string;
    paymentType: string;
    orderAmount: number;
    metadata?: string | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type RegistryUserPrizeMutationVariables = Exact<{
  request: RegistryUserPrizeRequest;
}>;

export type RegistryUserPrizeMutation = {
  __typename?: 'Mutation';
  registryUserPrize: {
    __typename: 'UserPrize';
    prizeId: string;
    rewardId: string;
    surveyId: any;
    resultId: string;
    profileId: any;
    chainId?: any | null;
    createdAt: string;
  };
};

export type ScoreSurveyResultMutationVariables = Exact<{
  request: ScoreSurveyResultRequest;
}>;

export type ScoreSurveyResultMutation = {
  __typename?: 'Mutation';
  scoreSurveyResult: {
    __typename: 'SurveyResult';
    resultsId: string;
    result: any;
    claimId?: any | null;
    rewardId?: string | null;
    rewardType?: string | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    chainId?: any | null;
    score?: number | null;
    credibilityScore?: any | null;
    createdAt: any;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      resultsId?: string | null;
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      funded?: boolean | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
      }> | null;
    } | null;
  };
};

export type SyncMediaProductsMutationVariables = Exact<{
  request: SyncMediaProductsRequest;
}>;

export type SyncMediaProductsMutation = {
  __typename?: 'Mutation';
  syncMediaProducts?: any | null;
};

export type SyncNftGalleryMutationVariables = Exact<{
  request: SyncNftGalleryRequest;
}>;

export type SyncNftGalleryMutation = {
  __typename?: 'Mutation';
  syncNftGallery?: any | null;
};

export type SyncPageviewSourcesMutationVariables = Exact<{
  request: SyncPageviewSourcesRequest;
}>;

export type SyncPageviewSourcesMutation = {
  __typename?: 'Mutation';
  syncPageviewSources?: any | null;
};

export type UpdateAnonymousUserMutationVariables = Exact<{
  request: UpdateAnonymousUserRequest;
}>;

export type UpdateAnonymousUserMutation = {
  __typename?: 'Mutation';
  updateAnonymousUser: {
    __typename: 'AnonymousUser';
    anonId: string;
    profileId?: number | null;
    fingerprint: string;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type UpdateEmbedSurveyResultMutationVariables = Exact<{
  request: UpdateEmbedSurveyResultRequest;
}>;

export type UpdateEmbedSurveyResultMutation = {
  __typename?: 'Mutation';
  updateEmbedSurveyResult: {
    __typename: 'EmbedSurveyResult';
    embedResultsId: string;
    result: any;
    fingerprint: string;
    claimId?: any | null;
    rewardId?: string | null;
    rewardType?: string | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    chainId?: any | null;
    createdAt: any;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      funded?: boolean | null;
    } | null;
  };
};

export type UpdateFillingQueueMutationVariables = Exact<{
  request: UpdateFillingQueueRequest;
}>;

export type UpdateFillingQueueMutation = {
  __typename?: 'Mutation';
  updateFillingQueue: {
    __typename: 'FillingQueue';
    fillingId: string;
    fillingType: FillingType;
    fillingStatus: FillingStatus;
    claimId?: string | null;
    metadata?: any | null;
    createdAt: string;
    updatedAt?: string | null;
    completedAt?: string | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      campaignType: SurveyCampaignType;
      fillingStatus?: string | null;
      rewardId?: string | null;
      rewardType?: string | null;
      cidHash?: any | null;
      tags?: Array<any | null> | null;
      claimId?: any | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      resultsId?: string | null;
      whiteList?: Array<any | null> | null;
      funded?: boolean | null;
      showQuestionNumbers?: string | null;
      pageNextText?: string | null;
      completeText?: string | null;
      showPrevButton?: boolean | null;
      firstPageIsStarted?: boolean | null;
      startSurveyText?: string | null;
      completedHtml?: string | null;
      showPreviewBeforeComplete?: string | null;
      privateKey?: string | null;
      publicKey?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      publishedAt?: any | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
        elements?: Array<
          | {
              __typename?: 'BooleanElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'CommentElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'RadiogroupElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RankingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RatingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              rateMax?: number | null;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'TextElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
        > | null;
      }> | null;
      results?: Array<{
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null> | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    } | null;
  };
};

export type UpdateMarketplaceOrderMutationVariables = Exact<{
  request: UpdateMarketplaceOrderRequest;
}>;

export type UpdateMarketplaceOrderMutation = {
  __typename?: 'Mutation';
  updateMarketplaceOrder: {
    __typename: 'MarketplaceOrder';
    orderId: string;
    productId: number;
    orderStatus: string;
    orderType: string;
    paymentType: string;
    orderAmount: number;
    metadata?: string | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type UpdateProductMutationVariables = Exact<{
  request: UpdateProductRequest;
}>;

export type UpdateProductMutation = {
  __typename?: 'Mutation';
  updateProduct: {
    __typename: 'MarketplaceProduct';
    productId: string;
    name: string;
    description: string;
    image?: string | null;
    productType: string;
    price?: number | null;
    productStatus: string;
    duration?: number | null;
    mediaId?: string | null;
    metadata?: string | null;
    whiteList?: string | null;
    sellerId?: any | null;
    ownerId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type UpdateProfileMutationVariables = Exact<{
  request: UpdateProfileRequest;
}>;

export type UpdateProfileMutation = {
  __typename?: 'Mutation';
  updateProfile: {
    __typename: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  };
};

export type UpdateSurveyMutationVariables = Exact<{
  request: SurveyUpdateInfoRequest;
}>;

export type UpdateSurveyMutation = {
  __typename?: 'Mutation';
  updateSurvey: {
    __typename: 'Survey';
    surveyId: any;
    title?: string | null;
    description?: string | null;
    logo?: string | null;
    surveyType: SurveyType;
    surveyStatus: SurveyStatus;
    campaignType: SurveyCampaignType;
    fillingStatus?: string | null;
    rewardId?: string | null;
    rewardType?: string | null;
    cidHash?: any | null;
    tags?: Array<any | null> | null;
    claimId?: any | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    resultsId?: string | null;
    whiteList?: Array<any | null> | null;
    funded?: boolean | null;
    showQuestionNumbers?: string | null;
    pageNextText?: string | null;
    completeText?: string | null;
    showPrevButton?: boolean | null;
    firstPageIsStarted?: boolean | null;
    startSurveyText?: string | null;
    completedHtml?: string | null;
    showPreviewBeforeComplete?: string | null;
    privateKey?: string | null;
    publicKey?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    publishedAt?: any | null;
    pages?: Array<{
      __typename?: 'SurveyPage';
      name: string;
      title?: string | null;
      elements?: Array<
        | {
            __typename?: 'BooleanElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'CommentElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'RadiogroupElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RankingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RatingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            rateMax?: number | null;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'TextElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
      > | null;
    }> | null;
    results?: Array<{
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null> | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type UpdateSurveyGatingMutationVariables = Exact<{
  request: UpdateSurveyGatingRequest;
}>;

export type UpdateSurveyGatingMutation = {
  __typename?: 'Mutation';
  updateSurveyGating: {
    __typename: 'SurveyGating';
    gateId: string;
    surveyId: number;
    profileId?: number | null;
    requirements: any;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type UpdateSurveyReferralMutationVariables = Exact<{
  request: UpdateSurveyReferralRequest;
}>;

export type UpdateSurveyReferralMutation = {
  __typename?: 'Mutation';
  updateSurveyReferral: {
    __typename: 'SurveyReferral';
    referralId: string;
    surveyId?: any | null;
    profileId: any;
    invitedEmail: any;
    invitedStatus: string;
    invitedId?: any | null;
    referralStatus: string;
    accountStatus?: AccountStatus | null;
    displayName?: string | null;
    email?: any | null;
    avatar?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    invitedAt?: any | null;
    completedAt?: any | null;
  };
};

export type UpdateSurveyResultMutationVariables = Exact<{
  request: UpdateSurveyResultRequest;
}>;

export type UpdateSurveyResultMutation = {
  __typename?: 'Mutation';
  updateSurveyResult: {
    __typename: 'SurveyResult';
    resultsId: string;
    result: any;
    claimId?: any | null;
    rewardId?: string | null;
    rewardType?: string | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    chainId?: any | null;
    score?: number | null;
    credibilityScore?: any | null;
    createdAt: any;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      resultsId?: string | null;
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      funded?: boolean | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
      }> | null;
    } | null;
  };
};

export type UpdateSurveyRewardMutationVariables = Exact<{
  request: UpdateSurveyRewardRequest;
}>;

export type UpdateSurveyRewardMutation = {
  __typename?: 'Mutation';
  updateSurveyReward: {
    __typename: 'SurveyReward';
    rewardId: string;
    rewardType: string;
    mediaId?: string | null;
    surveyId: any;
    profileId: any;
    resultsId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    mediaPrize?:
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
      | null;
  };
};

export type UpdateTransactionCreditMutationVariables = Exact<{
  request: UpdateTransactionCreditRequest;
}>;

export type UpdateTransactionCreditMutation = {
  __typename?: 'Mutation';
  updateTransactionCredit: {
    __typename: 'TransactionCredit';
    transactionId: string;
    orderId?: string | null;
    amount: number;
    transactionHash?: any | null;
    transactionType: TransactionType;
    transactionStatus: TransactionStatus;
    transactionSource?: string | null;
    createdAt: string;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      campaignType: SurveyCampaignType;
      fillingStatus?: string | null;
      rewardId?: string | null;
      rewardType?: string | null;
      cidHash?: any | null;
      tags?: Array<any | null> | null;
      claimId?: any | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      resultsId?: string | null;
      whiteList?: Array<any | null> | null;
      funded?: boolean | null;
      showQuestionNumbers?: string | null;
      pageNextText?: string | null;
      completeText?: string | null;
      showPrevButton?: boolean | null;
      firstPageIsStarted?: boolean | null;
      startSurveyText?: string | null;
      completedHtml?: string | null;
      showPreviewBeforeComplete?: string | null;
      privateKey?: string | null;
      publicKey?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      publishedAt?: any | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
        elements?: Array<
          | {
              __typename?: 'BooleanElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'CommentElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'RadiogroupElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RankingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RatingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              rateMax?: number | null;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'TextElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
        > | null;
      }> | null;
      results?: Array<{
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null> | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    } | null;
    surveyResult?: {
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null;
  };
};

export type UpdateUserBoostMutationVariables = Exact<{
  request: UpdateUserBoostRequest;
}>;

export type UpdateUserBoostMutation = {
  __typename?: 'Mutation';
  updateUserBoost: {
    __typename: 'UserBoost';
    boostId: string;
    profileId: any;
    startAt: any;
    endAt: any;
    boostStatus: string;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type UpdateUserMembershipMutationVariables = Exact<{
  request: UpdateUserMembershipRequest;
}>;

export type UpdateUserMembershipMutation = {
  __typename?: 'Mutation';
  updateUserMembership: {
    __typename: 'UserMembership';
    membershipId: string;
    profileId: any;
    startAt: any;
    endAt: any;
    membershipStatus: string;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type UpdateUserRefferalMutationVariables = Exact<{
  request: UpdateUserRefferalRequest;
}>;

export type UpdateUserRefferalMutation = {
  __typename?: 'Mutation';
  updateUserRefferal: {
    __typename: 'UserRefferal';
    refferalId: string;
    surveyId?: any | null;
    profileId: any;
    invitedEmail: any;
    invitedStatus: string;
    invitedId?: any | null;
    refferalStatus: string;
    accountStatus?: AccountStatus | null;
    displayName?: string | null;
    email?: any | null;
    avatar?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    invitedAt?: any | null;
    completedAt?: any | null;
  };
};

export type UpdateWalletMutationVariables = Exact<{
  request: UpdateWalletRequest;
}>;

export type UpdateWalletMutation = {
  __typename?: 'Mutation';
  updateWallet: {
    __typename: 'Wallet';
    walletId: string;
    credit: number;
    recipient?: any | null;
    nearAddress?: any | null;
    avaxAddress?: any | null;
    auroraAddress?: any | null;
    polygonAddress?: any | null;
    moonbeamAddress?: any | null;
    ethereumAddress?: any | null;
    tonAddress?: string | null;
    cronosAddress?: any | null;
    bobaAddress?: any | null;
    bscAddress?: any | null;
    opbnbAddress?: any | null;
    filecoinAddress?: any | null;
    baseAddress?: any | null;
    hederaAddress?: any | null;
    stellarAddress?: string | null;
    solanaAddress?: string | null;
    polkadotAddress?: string | null;
    icpAddress?: string | null;
    bitfinityAddress?: any | null;
    stripeAccountId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  };
};

export type VerifyUserMutationVariables = Exact<{
  request: VerifyUserRequest;
}>;

export type VerifyUserMutation = {
  __typename?: 'Mutation';
  verifyUser: {
    __typename: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  };
};

export type AnonymousUserQueryVariables = Exact<{
  request: AnonymousUserQueryRequest;
}>;

export type AnonymousUserQuery = {
  __typename?: 'Query';
  anonymousUser?: {
    __typename?: 'AnonymousUser';
    anonId: string;
    profileId?: number | null;
    fingerprint: string;
    createdAt: any;
    updatedAt?: any | null;
  } | null;
};

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;

export type ChallengeQuery = {
  __typename?: 'Query';
  challenge: { __typename?: 'AuthChallengeResult'; text: string };
};

export type CheckTransactionQueryVariables = Exact<{
  request: TransactionHashRequest;
}>;

export type CheckTransactionQuery = {
  __typename?: 'Query';
  checkTransaction?: {
    __typename?: 'TransactionCredit';
    transactionId: string;
    orderId?: string | null;
    amount: number;
    transactionHash?: any | null;
    transactionType: TransactionType;
    transactionStatus: TransactionStatus;
    transactionSource?: string | null;
    createdAt: string;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
    survey?: {
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      campaignType: SurveyCampaignType;
      fillingStatus?: string | null;
      rewardId?: string | null;
      rewardType?: string | null;
      cidHash?: any | null;
      tags?: Array<any | null> | null;
      claimId?: any | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      resultsId?: string | null;
      whiteList?: Array<any | null> | null;
      funded?: boolean | null;
      showQuestionNumbers?: string | null;
      pageNextText?: string | null;
      completeText?: string | null;
      showPrevButton?: boolean | null;
      firstPageIsStarted?: boolean | null;
      startSurveyText?: string | null;
      completedHtml?: string | null;
      showPreviewBeforeComplete?: string | null;
      privateKey?: string | null;
      publicKey?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      publishedAt?: any | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
        elements?: Array<
          | {
              __typename?: 'BooleanElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'CommentElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'RadiogroupElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RankingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RatingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              rateMax?: number | null;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'TextElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
        > | null;
      }> | null;
      results?: Array<{
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null> | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    } | null;
    surveyResult?: {
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null;
  } | null;
};

export type DataUserRequestQueryVariables = Exact<{
  request?: InputMaybe<CategoriesRequest>;
}>;

export type DataUserRequestQuery = {
  __typename?: 'Query';
  dataUser?: {
    __typename?: 'DataUser';
    userMostCompletedSurveys?: Array<{
      __typename?: 'UserMostCompletedSurveys';
      profileId: any;
      numberOfSurveys?: number | null;
    } | null> | null;
    mostEarnedCashRewards?: Array<{
      __typename?: 'MostEarnedCashRewards';
      profileId: any;
      mostCashViaStripe?: number | null;
    } | null> | null;
    mostEarnedCryptocurrencyRewards?: {
      __typename?: 'MostEarnedCryptocurrencyRewards';
      nearRewards?: Array<{
        __typename?: 'CryptoReward';
        profileId: any;
        amountCrypto?: number | null;
        amountUsd?: number | null;
      } | null> | null;
      polkadotRewards?: Array<{
        __typename?: 'CryptoReward';
        profileId: any;
        amountCrypto?: number | null;
        amountUsd?: number | null;
      } | null> | null;
      polygonRewards?: Array<{
        __typename?: 'CryptoReward';
        profileId: any;
        amountCrypto?: number | null;
        amountUsd?: number | null;
      } | null> | null;
      totalCryptoInCash?: Array<{
        __typename?: 'AllCryptoRewardInUSD';
        profileId: any;
        amountUsd?: number | null;
      } | null> | null;
    } | null;
    mostDollarsSpentNFTMarketplace?: Array<{
      __typename?: 'MostDollarsSpentNFTMarketplace';
      profileId: any;
      realDollarsSpent?: number | null;
    } | null> | null;
    mostCryptocurrencySpentNFTMarketplace?: {
      __typename?: 'MostCryptocurrencySpentNFTMarketplace';
      mostSpentNear?: Array<{
        __typename?: 'CryptoReward';
        profileId: any;
        amountCrypto?: number | null;
        amountUsd?: number | null;
      } | null> | null;
      mostSpentPolkadot?: Array<{
        __typename?: 'CryptoReward';
        profileId: any;
        amountCrypto?: number | null;
        amountUsd?: number | null;
      } | null> | null;
      mostSpentPolygon?: Array<{
        __typename?: 'CryptoReward';
        profileId: any;
        amountCrypto?: number | null;
        amountUsd?: number | null;
      } | null> | null;
    } | null;
    mostInvitedUsers?: Array<{
      __typename?: 'MostInvitedUsers';
      profileId: any;
      usersInvited?: number | null;
    } | null> | null;
    mostCompletedSurveysInSpecificCategory?: Array<{
      __typename?: 'MostCompletedSurveysInSpecificCategory';
      profileId: any;
      categoryName?: string | null;
      surveysCompleted?: number | null;
    } | null> | null;
    highestAverageSurveyCompletionRate?: {
      __typename?: 'HighestAverageSurveyCompletionRate';
      highestAverageSurveyCompletion?: Array<{
        __typename?: 'AverageSurveyCompletionRatesByUser';
        profileId?: any | null;
        percentageCompletionAverage?: number | null;
      } | null> | null;
    } | null;
    mostConsistentSurveyCompletionFrequency?: {
      __typename?: 'MostConsistentSurveyCompletionFrequency';
      daily?: Array<{
        __typename?: 'UserCompletionFrequency';
        profileId: any;
        frequencyAverage?: number | null;
      } | null> | null;
      weekly?: Array<{
        __typename?: 'UserCompletionFrequency';
        profileId: any;
        frequencyAverage?: number | null;
      } | null> | null;
      monthly?: Array<{
        __typename?: 'UserCompletionFrequency';
        profileId: any;
        frequencyAverage?: number | null;
      } | null> | null;
      yearly?: Array<{
        __typename?: 'UserCompletionFrequency';
        profileId: any;
        frequencyAverage?: number | null;
      } | null> | null;
    } | null;
    highestNumberOfConsecutiveDaysWithSurveyCompletions?: Array<{
      __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions';
      profileId: any;
      longestDailyStreak?: number | null;
    } | null> | null;
    mostActiveParticipationInSpecificTypesOfSurveys?: {
      __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys';
      multipleChoiceSurveysRankings?: Array<{
        __typename?: 'MultipleChoiceSurveys';
        profileId: any;
        multipleChoiceSurveys?: number | null;
      } | null> | null;
      openEndedSurveysRankings?: Array<{
        __typename?: 'OpenEndedSurveys';
        profileId: any;
        openEndedSurveys?: number | null;
      } | null> | null;
    } | null;
    mostReferralsConvertedIntoActiveSurveyParticipants?: Array<{
      __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants';
      profileId: any;
      referralsSent?: number | null;
      referredParticipantCount?: number | null;
    } | null> | null;
    mostEngagementWithCommunityFeatures?: Array<{
      __typename?: 'MostEngagementWithCommunityFeatures';
      profileId: any;
      totalPosts?: number | null;
    } | null> | null;
    mostCreativeAndUniqueSurveyResponses?: {
      __typename?: 'MostCreativeAndUniqueSurveyResponses';
      surveyResponseRating?: Array<{
        __typename?: 'Rating';
        profileId: any;
        item_id?: number | null;
        rating?: number | null;
      } | null> | null;
      mediaRating?: Array<{
        __typename?: 'Rating';
        profileId: any;
        item_id?: number | null;
        rating?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export type EmbedSurveyResultsQueryVariables = Exact<{
  request: EmbedSurveyResultQueryRequest;
}>;

export type EmbedSurveyResultsQuery = {
  __typename?: 'Query';
  embedSurveyResults: {
    __typename?: 'PaginatedEmbedSurveyResultResult';
    items: Array<{
      __typename?: 'EmbedSurveyResult';
      embedResultsId: string;
      result: any;
      fingerprint: string;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      createdAt: any;
      survey?: {
        __typename?: 'Survey';
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
      } | null;
    }>;
  };
};

export type FillingQueueQueryVariables = Exact<{
  request: FillingQueueQueryRequest;
}>;

export type FillingQueueQuery = {
  __typename?: 'Query';
  fillingQueue: {
    __typename?: 'PaginatedFillingQueueResult';
    items: Array<{
      __typename?: 'FillingQueue';
      fillingId: string;
      fillingType: FillingType;
      fillingStatus: FillingStatus;
      claimId?: string | null;
      metadata?: any | null;
      createdAt: string;
      updatedAt?: string | null;
      completedAt?: string | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        campaignType: SurveyCampaignType;
        fillingStatus?: string | null;
        rewardId?: string | null;
        rewardType?: string | null;
        cidHash?: any | null;
        tags?: Array<any | null> | null;
        claimId?: any | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        mediaClaimedFrom?: any | null;
        resultsId?: string | null;
        whiteList?: Array<any | null> | null;
        funded?: boolean | null;
        showQuestionNumbers?: string | null;
        pageNextText?: string | null;
        completeText?: string | null;
        showPrevButton?: boolean | null;
        firstPageIsStarted?: boolean | null;
        startSurveyText?: string | null;
        completedHtml?: string | null;
        showPreviewBeforeComplete?: string | null;
        privateKey?: string | null;
        publicKey?: string | null;
        createdAt: any;
        updatedAt?: any | null;
        publishedAt?: any | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
          elements?: Array<
            | {
                __typename?: 'BooleanElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
            | {
                __typename?: 'CommentElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
            | {
                __typename?: 'RadiogroupElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
                choices?: Array<
                  | {
                      __typename?: 'TextValueType';
                      text: string;
                      value: string;
                    }
                  | { __typename?: 'ValueType'; value: string }
                > | null;
              }
            | {
                __typename?: 'RankingElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
                choices?: Array<
                  | {
                      __typename?: 'TextValueType';
                      text: string;
                      value: string;
                    }
                  | { __typename?: 'ValueType'; value: string }
                > | null;
              }
            | {
                __typename?: 'RatingElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                rateMax?: number | null;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
            | {
                __typename?: 'TextElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
          > | null;
        }> | null;
        results?: Array<{
          __typename?: 'SurveyResult';
          resultsId: string;
          result: any;
          claimId?: any | null;
          rewardId?: string | null;
          rewardType?: string | null;
          rewardClaimed?: boolean | null;
          rewardClaimedAt?: any | null;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          chainId?: any | null;
          score?: number | null;
          credibilityScore?: any | null;
          createdAt: any;
          user?: {
            __typename?: 'User';
            profileId: any;
            firstName?: string | null;
            lastName?: string | null;
            businessName?: string | null;
            displayName?: string | null;
            bio?: string | null;
            location?: string | null;
            age?: number | null;
            gender?: string | null;
            email?: any | null;
            avatar?: any | null;
            category?: any | null;
            interests?: Array<any | null> | null;
            accountType: AccountType;
            accountStatus: AccountStatus;
            inviter?: any | null;
            verified?: boolean | null;
            boosted?: boolean | null;
            visibility: Visibility;
            issuer?: string | null;
            iden3issuer?: string | null;
            elegibleSurveys?: number | null;
            publishedSurveys?: number | null;
            apiKey?: string | null;
            kycAttemptId?: string | null;
            createdAt?: any | null;
            lastLoginAt?: any | null;
            wallet?: {
              __typename?: 'Wallet';
              walletId: string;
              recipient?: any | null;
              credit: number;
              nearAddress?: any | null;
              avaxAddress?: any | null;
              auroraAddress?: any | null;
              polygonAddress?: any | null;
              moonbeamAddress?: any | null;
              ethereumAddress?: any | null;
              tonAddress?: string | null;
              cronosAddress?: any | null;
              bobaAddress?: any | null;
              bscAddress?: any | null;
              opbnbAddress?: any | null;
              filecoinAddress?: any | null;
              baseAddress?: any | null;
              hederaAddress?: any | null;
              stellarAddress?: string | null;
              solanaAddress?: string | null;
              polkadotAddress?: string | null;
              icpAddress?: string | null;
              bitfinityAddress?: any | null;
              stripeAccountId?: any | null;
              createdAt: any;
              updatedAt?: any | null;
            } | null;
          } | null;
          survey?: {
            __typename?: 'Survey';
            resultsId?: string | null;
            surveyId: any;
            title?: string | null;
            description?: string | null;
            logo?: string | null;
            surveyType: SurveyType;
            surveyStatus: SurveyStatus;
            funded?: boolean | null;
            pages?: Array<{
              __typename?: 'SurveyPage';
              name: string;
              title?: string | null;
            }> | null;
          } | null;
        } | null> | null;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
      } | null;
    }>;
  };
};

export type LeaderboardEntriesQueryVariables = Exact<{
  request: LeaderboardEntriesRequest;
}>;

export type LeaderboardEntriesQuery = {
  __typename?: 'Query';
  leaderboardEntries: {
    __typename?: 'LeaderboardEntriesResult';
    items?: Array<{
      __typename?: 'LeaderboardEntry';
      leaderboardEntryId: number;
      leaderboardId: number;
      profileId: number;
      issuer?: string | null;
      iden3issuer?: string | null;
      avatar?: string | null;
      points?: number | null;
      rank?: number | null;
      createdAt?: any | null;
    }> | null;
  };
};

export type MarketplaceOrderQueryVariables = Exact<{
  request: MarketplaceOrderQueryRequest;
}>;

export type MarketplaceOrderQuery = {
  __typename?: 'Query';
  marketplaceOrder?: {
    __typename?: 'MarketplaceOrder';
    orderId: string;
    productId: number;
    orderStatus: string;
    orderType: string;
    paymentType: string;
    orderAmount: number;
    metadata?: string | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  } | null;
};

export type MarketplaceOrdersQueryVariables = Exact<{
  request: MarketplaceOrdersQueryRequest;
}>;

export type MarketplaceOrdersQuery = {
  __typename?: 'Query';
  marketplaceOrders: {
    __typename?: 'PaginatedMarketplaceOrdersResult';
    items: Array<{
      __typename?: 'MarketplaceOrder';
      orderId: string;
      productId: number;
      orderStatus: string;
      orderType: string;
      paymentType: string;
      orderAmount: number;
      metadata?: string | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      chainId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    }>;
  };
};

export type MethodsPromotionQueryVariables = Exact<{ [key: string]: never }>;

export type MethodsPromotionQuery = {
  __typename?: 'Query';
  methodsPromotions?: Array<{
    __typename?: 'SurveyMethod';
    name: string;
    totalCount?: number | null;
    effectiveness: number;
  } | null> | null;
};

export type NftGalleriesQueryVariables = Exact<{
  request: NftGalleriesQueryRequest;
}>;

export type NftGalleriesQuery = {
  __typename?: 'Query';
  nftGalleries: {
    __typename?: 'PaginatedNftGalleryResult';
    items: Array<{
      __typename?: 'NftGallery';
      nftGalleryId: any;
      name: string;
      profileId: any;
      chainId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      items?: Array<
        | {
            __typename?: 'Erc721';
            nftId: any;
            contractName?: string | null;
            contractAddress: any;
            symbol: string;
            tokenId?: string | null;
            name: string;
            description: string;
            contentUri: string;
            chainId: any;
            collectionName: string;
            ercType: string;
            owners?: Array<{
              __typename?: 'Owner';
              amount: number;
              address: any;
              profileId?: any | null;
            }> | null;
            originalContent?: {
              __typename?: 'NFTContent';
              uri?: string | null;
              metaType?: string | null;
              animatedUrl?: string | null;
            } | null;
          }
        | {
            __typename?: 'Nep171';
            nftId: any;
            seriesId: number;
            price?: number | null;
            royalty?: number | null;
            creatorId?: any | null;
            sellerId?: any | null;
            ownerId?: any | null;
            productId?: number | null;
            productType?: string | null;
            productStatus?: string | null;
            orderId?: string | null;
            orderStatus?: string | null;
            surveyId?: any | null;
            resultsId?: string | null;
            evmContractAddress?: any | null;
            chainId: any;
            mediaClaimed?: boolean | null;
            mediaClaimedAt?: any | null;
            mediaClaimedFrom?: any | null;
            metadata: {
              __typename?: 'Metadata';
              title: string;
              description: string;
              media: string;
              mediaHash?: string | null;
              copies?: number | null;
              issuedAt?: any | null;
              expiresAt?: any | null;
              startsAt?: any | null;
              updatedAt?: any | null;
              extra?: string | null;
              reference?: string | null;
              referenceHash?: string | null;
            };
          }
      > | null;
    }>;
  };
};

export type NftUserGalleriesQueryVariables = Exact<{
  request: NftGalleriesQueryRequest;
}>;

export type NftUserGalleriesQuery = {
  __typename?: 'Query';
  nftUserGalleries: {
    __typename?: 'PaginatedNftGalleryResult';
    items: Array<{
      __typename?: 'NftGallery';
      nftGalleryId: any;
      name: string;
      profileId: any;
      chainId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      items?: Array<
        | {
            __typename?: 'Erc721';
            nftId: any;
            contractName?: string | null;
            contractAddress: any;
            symbol: string;
            tokenId?: string | null;
            name: string;
            description: string;
            contentUri: string;
            chainId: any;
            collectionName: string;
            ercType: string;
            owners?: Array<{
              __typename?: 'Owner';
              amount: number;
              address: any;
              profileId?: any | null;
            }> | null;
            originalContent?: {
              __typename?: 'NFTContent';
              uri?: string | null;
              metaType?: string | null;
              animatedUrl?: string | null;
            } | null;
          }
        | {
            __typename?: 'Nep171';
            nftId: any;
            seriesId: number;
            price?: number | null;
            royalty?: number | null;
            creatorId?: any | null;
            sellerId?: any | null;
            ownerId?: any | null;
            productId?: number | null;
            productType?: string | null;
            productStatus?: string | null;
            orderId?: string | null;
            orderStatus?: string | null;
            surveyId?: any | null;
            resultsId?: string | null;
            evmContractAddress?: any | null;
            chainId: any;
            mediaClaimed?: boolean | null;
            mediaClaimedAt?: any | null;
            mediaClaimedFrom?: any | null;
            metadata: {
              __typename?: 'Metadata';
              title: string;
              description: string;
              media: string;
              mediaHash?: string | null;
              copies?: number | null;
              issuedAt?: any | null;
              expiresAt?: any | null;
              startsAt?: any | null;
              updatedAt?: any | null;
              extra?: string | null;
              reference?: string | null;
              referenceHash?: string | null;
            };
          }
      > | null;
    }>;
    pageInfo: {
      __typename?: 'PaginatedResultInfo';
      totalCount?: number | null;
      next?: any | null;
    };
  };
};

export type NftsQueryVariables = Exact<{
  request: NftsRequest;
}>;

export type NftsQuery = {
  __typename?: 'Query';
  nfts: {
    __typename?: 'NftsResult';
    items: Array<
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
    >;
    pageInfo: {
      __typename?: 'PaginatedResultInfo';
      totalCount?: number | null;
      next?: any | null;
    };
  };
};

export type ProductQueryVariables = Exact<{
  request: ProductQueryRequest;
}>;

export type ProductQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'MarketplaceProduct';
    productId: string;
    name: string;
    description: string;
    image?: string | null;
    productType: string;
    price?: number | null;
    productStatus: string;
    duration?: number | null;
    mediaId?: string | null;
    metadata?: string | null;
    whiteList?: string | null;
    sellerId?: any | null;
    ownerId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
  } | null;
};

export type ProductsQueryVariables = Exact<{
  request: ProductsQueryRequest;
}>;

export type ProductsQuery = {
  __typename?: 'Query';
  products: {
    __typename?: 'PaginatedProductsResult';
    items: Array<{
      __typename?: 'MarketplaceProduct';
      productId: string;
      name: string;
      description: string;
      image?: string | null;
      productType: string;
      price?: number | null;
      productStatus: string;
      duration?: number | null;
      mediaId?: string | null;
      metadata?: string | null;
      whiteList?: string | null;
      sellerId?: any | null;
      ownerId?: string | null;
      chainId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    }>;
    pageInfo: {
      __typename?: 'PaginatedResultInfo';
      totalCount?: number | null;
      next?: any | null;
    };
  };
};

export type SearchBusinessQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;

export type SearchBusinessQuery = {
  __typename?: 'Query';
  search:
    | {
        __typename?: 'BusinessSearchResult';
        items: Array<{
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        }>;
        pageInfo: {
          __typename?: 'PaginatedResultInfo';
          totalCount?: number | null;
          next?: any | null;
        };
      }
    | { __typename?: 'EnduserSearchResult' }
    | { __typename?: 'MarketplaceSearchResult' }
    | { __typename?: 'NftSearchResult' }
    | { __typename?: 'SurveySearchResult' }
    | { __typename?: 'TutorialSearchResult' };
};

export type SearchEndusersQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;

export type SearchEndusersQuery = {
  __typename?: 'Query';
  search:
    | { __typename?: 'BusinessSearchResult' }
    | {
        __typename?: 'EnduserSearchResult';
        items: Array<{
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        }>;
        pageInfo: {
          __typename?: 'PaginatedResultInfo';
          totalCount?: number | null;
          next?: any | null;
        };
      }
    | { __typename?: 'MarketplaceSearchResult' }
    | { __typename?: 'NftSearchResult' }
    | { __typename?: 'SurveySearchResult' }
    | { __typename?: 'TutorialSearchResult' };
};

export type SearchMarketplaceQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;

export type SearchMarketplaceQuery = {
  __typename?: 'Query';
  search:
    | { __typename?: 'BusinessSearchResult' }
    | { __typename?: 'EnduserSearchResult' }
    | {
        __typename?: 'MarketplaceSearchResult';
        items: Array<{
          __typename?: 'MarketplaceProduct';
          productId: string;
          name: string;
          description: string;
          image?: string | null;
          productType: string;
          price?: number | null;
          productStatus: string;
          duration?: number | null;
          mediaId?: string | null;
          metadata?: string | null;
          whiteList?: string | null;
          sellerId?: any | null;
          ownerId?: string | null;
          chainId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        }>;
        pageInfo?: {
          __typename?: 'PaginatedResultInfo';
          next?: any | null;
        } | null;
      }
    | { __typename?: 'NftSearchResult' }
    | { __typename?: 'SurveySearchResult' }
    | { __typename?: 'TutorialSearchResult' };
};

export type SearchNftsQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;

export type SearchNftsQuery = {
  __typename?: 'Query';
  search:
    | { __typename?: 'BusinessSearchResult' }
    | { __typename?: 'EnduserSearchResult' }
    | { __typename?: 'MarketplaceSearchResult' }
    | {
        __typename?: 'NftSearchResult';
        items: Array<
          | {
              __typename?: 'Erc721';
              nftId: any;
              contractName?: string | null;
              contractAddress: any;
              symbol: string;
              tokenId?: string | null;
              name: string;
              description: string;
              contentUri: string;
              chainId: any;
              collectionName: string;
              ercType: string;
              owners?: Array<{
                __typename?: 'Owner';
                amount: number;
                address: any;
                profileId?: any | null;
              }> | null;
              originalContent?: {
                __typename?: 'NFTContent';
                uri?: string | null;
                metaType?: string | null;
                animatedUrl?: string | null;
              } | null;
            }
          | {
              __typename?: 'Nep171';
              nftId: any;
              seriesId: number;
              price?: number | null;
              royalty?: number | null;
              creatorId?: any | null;
              sellerId?: any | null;
              ownerId?: any | null;
              productId?: number | null;
              productType?: string | null;
              productStatus?: string | null;
              orderId?: string | null;
              orderStatus?: string | null;
              surveyId?: any | null;
              resultsId?: string | null;
              evmContractAddress?: any | null;
              chainId: any;
              mediaClaimed?: boolean | null;
              mediaClaimedAt?: any | null;
              mediaClaimedFrom?: any | null;
              metadata: {
                __typename?: 'Metadata';
                title: string;
                description: string;
                media: string;
                mediaHash?: string | null;
                copies?: number | null;
                issuedAt?: any | null;
                expiresAt?: any | null;
                startsAt?: any | null;
                updatedAt?: any | null;
                extra?: string | null;
                reference?: string | null;
                referenceHash?: string | null;
              };
            }
        >;
        pageInfo?: {
          __typename?: 'PaginatedResultInfo';
          next?: any | null;
        } | null;
      }
    | { __typename?: 'SurveySearchResult' }
    | { __typename?: 'TutorialSearchResult' };
};

export type SearchSurveysQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;

export type SearchSurveysQuery = {
  __typename?: 'Query';
  search:
    | { __typename?: 'BusinessSearchResult' }
    | { __typename?: 'EnduserSearchResult' }
    | { __typename?: 'MarketplaceSearchResult' }
    | { __typename?: 'NftSearchResult' }
    | {
        __typename?: 'SurveySearchResult';
        items: Array<{
          __typename?: 'Survey';
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          campaignType: SurveyCampaignType;
          fillingStatus?: string | null;
          rewardId?: string | null;
          rewardType?: string | null;
          cidHash?: any | null;
          tags?: Array<any | null> | null;
          claimId?: any | null;
          rewardClaimed?: boolean | null;
          rewardClaimedAt?: any | null;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          resultsId?: string | null;
          whiteList?: Array<any | null> | null;
          funded?: boolean | null;
          showQuestionNumbers?: string | null;
          pageNextText?: string | null;
          completeText?: string | null;
          showPrevButton?: boolean | null;
          firstPageIsStarted?: boolean | null;
          startSurveyText?: string | null;
          completedHtml?: string | null;
          showPreviewBeforeComplete?: string | null;
          privateKey?: string | null;
          publicKey?: string | null;
          createdAt: any;
          updatedAt?: any | null;
          publishedAt?: any | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
            elements?: Array<
              | {
                  __typename?: 'BooleanElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
              | {
                  __typename?: 'CommentElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
              | {
                  __typename?: 'RadiogroupElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                  choices?: Array<
                    | {
                        __typename?: 'TextValueType';
                        text: string;
                        value: string;
                      }
                    | { __typename?: 'ValueType'; value: string }
                  > | null;
                }
              | {
                  __typename?: 'RankingElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                  choices?: Array<
                    | {
                        __typename?: 'TextValueType';
                        text: string;
                        value: string;
                      }
                    | { __typename?: 'ValueType'; value: string }
                  > | null;
                }
              | {
                  __typename?: 'RatingElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  rateMax?: number | null;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
              | {
                  __typename?: 'TextElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
            > | null;
          }> | null;
          results?: Array<{
            __typename?: 'SurveyResult';
            resultsId: string;
            result: any;
            claimId?: any | null;
            rewardId?: string | null;
            rewardType?: string | null;
            rewardClaimed?: boolean | null;
            rewardClaimedAt?: any | null;
            mediaClaimed?: boolean | null;
            mediaClaimedAt?: any | null;
            chainId?: any | null;
            score?: number | null;
            credibilityScore?: any | null;
            createdAt: any;
            user?: {
              __typename?: 'User';
              profileId: any;
              firstName?: string | null;
              lastName?: string | null;
              businessName?: string | null;
              displayName?: string | null;
              bio?: string | null;
              location?: string | null;
              age?: number | null;
              gender?: string | null;
              email?: any | null;
              avatar?: any | null;
              category?: any | null;
              interests?: Array<any | null> | null;
              accountType: AccountType;
              accountStatus: AccountStatus;
              inviter?: any | null;
              verified?: boolean | null;
              boosted?: boolean | null;
              visibility: Visibility;
              issuer?: string | null;
              iden3issuer?: string | null;
              elegibleSurveys?: number | null;
              publishedSurveys?: number | null;
              apiKey?: string | null;
              kycAttemptId?: string | null;
              createdAt?: any | null;
              lastLoginAt?: any | null;
              wallet?: {
                __typename?: 'Wallet';
                walletId: string;
                recipient?: any | null;
                credit: number;
                nearAddress?: any | null;
                avaxAddress?: any | null;
                auroraAddress?: any | null;
                polygonAddress?: any | null;
                moonbeamAddress?: any | null;
                ethereumAddress?: any | null;
                tonAddress?: string | null;
                cronosAddress?: any | null;
                bobaAddress?: any | null;
                bscAddress?: any | null;
                opbnbAddress?: any | null;
                filecoinAddress?: any | null;
                baseAddress?: any | null;
                hederaAddress?: any | null;
                stellarAddress?: string | null;
                solanaAddress?: string | null;
                polkadotAddress?: string | null;
                icpAddress?: string | null;
                bitfinityAddress?: any | null;
                stripeAccountId?: any | null;
                createdAt: any;
                updatedAt?: any | null;
              } | null;
            } | null;
            survey?: {
              __typename?: 'Survey';
              resultsId?: string | null;
              surveyId: any;
              title?: string | null;
              description?: string | null;
              logo?: string | null;
              surveyType: SurveyType;
              surveyStatus: SurveyStatus;
              funded?: boolean | null;
              pages?: Array<{
                __typename?: 'SurveyPage';
                name: string;
                title?: string | null;
              }> | null;
            } | null;
          } | null> | null;
          user?: {
            __typename?: 'User';
            profileId: any;
            firstName?: string | null;
            lastName?: string | null;
            businessName?: string | null;
            displayName?: string | null;
            bio?: string | null;
            location?: string | null;
            age?: number | null;
            gender?: string | null;
            email?: any | null;
            avatar?: any | null;
            category?: any | null;
            interests?: Array<any | null> | null;
            accountType: AccountType;
            accountStatus: AccountStatus;
            inviter?: any | null;
            verified?: boolean | null;
            boosted?: boolean | null;
            visibility: Visibility;
            issuer?: string | null;
            iden3issuer?: string | null;
            elegibleSurveys?: number | null;
            publishedSurveys?: number | null;
            apiKey?: string | null;
            kycAttemptId?: string | null;
            createdAt?: any | null;
            lastLoginAt?: any | null;
            wallet?: {
              __typename?: 'Wallet';
              walletId: string;
              recipient?: any | null;
              credit: number;
              nearAddress?: any | null;
              avaxAddress?: any | null;
              auroraAddress?: any | null;
              polygonAddress?: any | null;
              moonbeamAddress?: any | null;
              ethereumAddress?: any | null;
              tonAddress?: string | null;
              cronosAddress?: any | null;
              bobaAddress?: any | null;
              bscAddress?: any | null;
              opbnbAddress?: any | null;
              filecoinAddress?: any | null;
              baseAddress?: any | null;
              hederaAddress?: any | null;
              stellarAddress?: string | null;
              solanaAddress?: string | null;
              polkadotAddress?: string | null;
              icpAddress?: string | null;
              bitfinityAddress?: any | null;
              stripeAccountId?: any | null;
              createdAt: any;
              updatedAt?: any | null;
            } | null;
          } | null;
        }>;
        pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null };
      }
    | { __typename?: 'TutorialSearchResult' };
};

export type SearchTutorialsQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;

export type SearchTutorialsQuery = {
  __typename?: 'Query';
  search:
    | { __typename?: 'BusinessSearchResult' }
    | { __typename?: 'EnduserSearchResult' }
    | { __typename?: 'MarketplaceSearchResult' }
    | { __typename?: 'NftSearchResult' }
    | { __typename?: 'SurveySearchResult' }
    | {
        __typename?: 'TutorialSearchResult';
        items: Array<{
          __typename?: 'Survey';
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          campaignType: SurveyCampaignType;
          fillingStatus?: string | null;
          rewardId?: string | null;
          rewardType?: string | null;
          cidHash?: any | null;
          tags?: Array<any | null> | null;
          claimId?: any | null;
          rewardClaimed?: boolean | null;
          rewardClaimedAt?: any | null;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          resultsId?: string | null;
          whiteList?: Array<any | null> | null;
          funded?: boolean | null;
          showQuestionNumbers?: string | null;
          pageNextText?: string | null;
          completeText?: string | null;
          showPrevButton?: boolean | null;
          firstPageIsStarted?: boolean | null;
          startSurveyText?: string | null;
          completedHtml?: string | null;
          showPreviewBeforeComplete?: string | null;
          privateKey?: string | null;
          publicKey?: string | null;
          createdAt: any;
          updatedAt?: any | null;
          publishedAt?: any | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
            elements?: Array<
              | {
                  __typename?: 'BooleanElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
              | {
                  __typename?: 'CommentElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
              | {
                  __typename?: 'RadiogroupElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                  choices?: Array<
                    | {
                        __typename?: 'TextValueType';
                        text: string;
                        value: string;
                      }
                    | { __typename?: 'ValueType'; value: string }
                  > | null;
                }
              | {
                  __typename?: 'RankingElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                  choices?: Array<
                    | {
                        __typename?: 'TextValueType';
                        text: string;
                        value: string;
                      }
                    | { __typename?: 'ValueType'; value: string }
                  > | null;
                }
              | {
                  __typename?: 'RatingElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  rateMax?: number | null;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
              | {
                  __typename?: 'TextElement';
                  name: string;
                  title?: string | null;
                  type: SurveyElementType;
                  points?: number | null;
                  isRequired: boolean;
                  correctAnswer?: string | null;
                }
            > | null;
          }> | null;
          results?: Array<{
            __typename?: 'SurveyResult';
            resultsId: string;
            result: any;
            claimId?: any | null;
            rewardId?: string | null;
            rewardType?: string | null;
            rewardClaimed?: boolean | null;
            rewardClaimedAt?: any | null;
            mediaClaimed?: boolean | null;
            mediaClaimedAt?: any | null;
            chainId?: any | null;
            score?: number | null;
            credibilityScore?: any | null;
            createdAt: any;
            user?: {
              __typename?: 'User';
              profileId: any;
              firstName?: string | null;
              lastName?: string | null;
              businessName?: string | null;
              displayName?: string | null;
              bio?: string | null;
              location?: string | null;
              age?: number | null;
              gender?: string | null;
              email?: any | null;
              avatar?: any | null;
              category?: any | null;
              interests?: Array<any | null> | null;
              accountType: AccountType;
              accountStatus: AccountStatus;
              inviter?: any | null;
              verified?: boolean | null;
              boosted?: boolean | null;
              visibility: Visibility;
              issuer?: string | null;
              iden3issuer?: string | null;
              elegibleSurveys?: number | null;
              publishedSurveys?: number | null;
              apiKey?: string | null;
              kycAttemptId?: string | null;
              createdAt?: any | null;
              lastLoginAt?: any | null;
              wallet?: {
                __typename?: 'Wallet';
                walletId: string;
                recipient?: any | null;
                credit: number;
                nearAddress?: any | null;
                avaxAddress?: any | null;
                auroraAddress?: any | null;
                polygonAddress?: any | null;
                moonbeamAddress?: any | null;
                ethereumAddress?: any | null;
                tonAddress?: string | null;
                cronosAddress?: any | null;
                bobaAddress?: any | null;
                bscAddress?: any | null;
                opbnbAddress?: any | null;
                filecoinAddress?: any | null;
                baseAddress?: any | null;
                hederaAddress?: any | null;
                stellarAddress?: string | null;
                solanaAddress?: string | null;
                polkadotAddress?: string | null;
                icpAddress?: string | null;
                bitfinityAddress?: any | null;
                stripeAccountId?: any | null;
                createdAt: any;
                updatedAt?: any | null;
              } | null;
            } | null;
            survey?: {
              __typename?: 'Survey';
              resultsId?: string | null;
              surveyId: any;
              title?: string | null;
              description?: string | null;
              logo?: string | null;
              surveyType: SurveyType;
              surveyStatus: SurveyStatus;
              funded?: boolean | null;
              pages?: Array<{
                __typename?: 'SurveyPage';
                name: string;
                title?: string | null;
              }> | null;
            } | null;
          } | null> | null;
          user?: {
            __typename?: 'User';
            profileId: any;
            firstName?: string | null;
            lastName?: string | null;
            businessName?: string | null;
            displayName?: string | null;
            bio?: string | null;
            location?: string | null;
            age?: number | null;
            gender?: string | null;
            email?: any | null;
            avatar?: any | null;
            category?: any | null;
            interests?: Array<any | null> | null;
            accountType: AccountType;
            accountStatus: AccountStatus;
            inviter?: any | null;
            verified?: boolean | null;
            boosted?: boolean | null;
            visibility: Visibility;
            issuer?: string | null;
            iden3issuer?: string | null;
            elegibleSurveys?: number | null;
            publishedSurveys?: number | null;
            apiKey?: string | null;
            kycAttemptId?: string | null;
            createdAt?: any | null;
            lastLoginAt?: any | null;
            wallet?: {
              __typename?: 'Wallet';
              walletId: string;
              recipient?: any | null;
              credit: number;
              nearAddress?: any | null;
              avaxAddress?: any | null;
              auroraAddress?: any | null;
              polygonAddress?: any | null;
              moonbeamAddress?: any | null;
              ethereumAddress?: any | null;
              tonAddress?: string | null;
              cronosAddress?: any | null;
              bobaAddress?: any | null;
              bscAddress?: any | null;
              opbnbAddress?: any | null;
              filecoinAddress?: any | null;
              baseAddress?: any | null;
              hederaAddress?: any | null;
              stellarAddress?: string | null;
              solanaAddress?: string | null;
              polkadotAddress?: string | null;
              icpAddress?: string | null;
              bitfinityAddress?: any | null;
              stripeAccountId?: any | null;
              createdAt: any;
              updatedAt?: any | null;
            } | null;
          } | null;
        }>;
        pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null };
      };
};

export type SubscriptionHistoryQueryVariables = Exact<{
  request: SubscriptionHistoryRequest;
}>;

export type SubscriptionHistoryQuery = {
  __typename?: 'Query';
  subscriptionHistory?: Array<{
    __typename?: 'UserSubscription';
    id?: string | null;
    subscriptionLevel: string;
    startDate?: string | null;
    endDate?: string | null;
  } | null> | null;
};

export type SubscriptionLevelQueryVariables = Exact<{
  request: SubscriptionLevelRequest;
}>;

export type SubscriptionLevelQuery = {
  __typename?: 'Query';
  subscriptionLevel?: {
    __typename?: 'UserSubscription';
    id?: string | null;
    subscriptionLevel: string;
  } | null;
};

export type SurveyQueryVariables = Exact<{
  request: SingleSurveyQueryRequest;
}>;

export type SurveyQuery = {
  __typename?: 'Query';
  survey?: {
    __typename?: 'Survey';
    surveyId: any;
    title?: string | null;
    description?: string | null;
    logo?: string | null;
    surveyType: SurveyType;
    surveyStatus: SurveyStatus;
    campaignType: SurveyCampaignType;
    fillingStatus?: string | null;
    rewardId?: string | null;
    rewardType?: string | null;
    cidHash?: any | null;
    tags?: Array<any | null> | null;
    claimId?: any | null;
    rewardClaimed?: boolean | null;
    rewardClaimedAt?: any | null;
    mediaClaimed?: boolean | null;
    mediaClaimedAt?: any | null;
    mediaClaimedFrom?: any | null;
    resultsId?: string | null;
    whiteList?: Array<any | null> | null;
    funded?: boolean | null;
    showQuestionNumbers?: string | null;
    pageNextText?: string | null;
    completeText?: string | null;
    showPrevButton?: boolean | null;
    firstPageIsStarted?: boolean | null;
    startSurveyText?: string | null;
    completedHtml?: string | null;
    showPreviewBeforeComplete?: string | null;
    privateKey?: string | null;
    publicKey?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    publishedAt?: any | null;
    pages?: Array<{
      __typename?: 'SurveyPage';
      name: string;
      title?: string | null;
      elements?: Array<
        | {
            __typename?: 'BooleanElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'CommentElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'RadiogroupElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RankingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
            choices?: Array<
              | { __typename?: 'TextValueType'; text: string; value: string }
              | { __typename?: 'ValueType'; value: string }
            > | null;
          }
        | {
            __typename?: 'RatingElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            rateMax?: number | null;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
        | {
            __typename?: 'TextElement';
            name: string;
            title?: string | null;
            type: SurveyElementType;
            points?: number | null;
            isRequired: boolean;
            correctAnswer?: string | null;
          }
      > | null;
    }> | null;
    results?: Array<{
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    } | null> | null;
    user?: {
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    } | null;
  } | null;
};

export type SurveyAnalyticsQueryVariables = Exact<{
  request: SurveyAnalyticsRequest;
}>;

export type SurveyAnalyticsQuery = {
  __typename?: 'Query';
  surveyAnalytics: {
    __typename?: 'ChartDataLabels';
    labels?: Array<string> | null;
    data?: Array<number> | null;
    totalSurveys?: number | null;
    totalCompletions?: number | null;
    totalBusiness?: number | null;
    avgCompletionTime?: number | null;
    totalPageviews?: number | null;
    rankingCompletions?: Array<{
      __typename?: 'RankTopCompletions';
      surveyId?: string | null;
      completions?: number | null;
    } | null> | null;
  };
};

export type SurveyGatingQueryVariables = Exact<{
  request: SurveyGatingQueryRequest;
}>;

export type SurveyGatingQuery = {
  __typename?: 'Query';
  surveyGating: {
    __typename?: 'SurveyGating';
    gateId: string;
    surveyId: number;
    profileId?: number | null;
    requirements: any;
    createdAt: any;
    updatedAt?: any | null;
  };
};

export type SurveyReferralsQueryVariables = Exact<{
  request: SurveyReferralQueryRequest;
}>;

export type SurveyReferralsQuery = {
  __typename?: 'Query';
  surveyReferrals: {
    __typename?: 'PaginatedSurveyReferralResult';
    items: Array<{
      __typename?: 'SurveyReferral';
      referralId: string;
      surveyId?: any | null;
      profileId: any;
      invitedEmail: any;
      invitedStatus: string;
      invitedId?: any | null;
      referralStatus: string;
      accountStatus?: AccountStatus | null;
      displayName?: string | null;
      email?: any | null;
      avatar?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      invitedAt?: any | null;
      completedAt?: any | null;
    }>;
  };
};

export type SurveyResultsQueryVariables = Exact<{
  request: SurveyResultQueryRequest;
}>;

export type SurveyResultsQuery = {
  __typename?: 'Query';
  surveyResults: {
    __typename?: 'PaginatedSurveyResultResult';
    items: Array<{
      __typename?: 'SurveyResult';
      resultsId: string;
      result: any;
      claimId?: any | null;
      rewardId?: string | null;
      rewardType?: string | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      chainId?: any | null;
      score?: number | null;
      credibilityScore?: any | null;
      createdAt: any;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        resultsId?: string | null;
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        funded?: boolean | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
        }> | null;
      } | null;
    }>;
  };
};

export type SurveyRewardQueryVariables = Exact<{
  request: SurveyRewardQueryRequest;
}>;

export type SurveyRewardQuery = {
  __typename?: 'Query';
  surveyReward?: {
    __typename?: 'SurveyReward';
    rewardId: string;
    rewardType: string;
    mediaId?: string | null;
    surveyId: any;
    profileId: any;
    resultsId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    mediaPrize?:
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
      | null;
  } | null;
};

export type SurveyRewardErc721QueryVariables = Exact<{
  request: SurveyRewardQueryRequest;
}>;

export type SurveyRewardErc721Query = {
  __typename?: 'Query';
  surveyRewardErc721?: {
    __typename?: 'SurveyReward';
    rewardId: string;
    rewardType: string;
    mediaId?: string | null;
    surveyId: any;
    profileId: any;
    resultsId?: string | null;
    chainId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    mediaPrize?:
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
      | null;
  } | null;
};

export type SurveysQueryVariables = Exact<{
  request: SurveyQueryRequest;
}>;

export type SurveysQuery = {
  __typename?: 'Query';
  surveys: {
    __typename?: 'PaginatedSurveyResult';
    items: Array<{
      __typename?: 'Survey';
      surveyId: any;
      title?: string | null;
      description?: string | null;
      logo?: string | null;
      surveyType: SurveyType;
      surveyStatus: SurveyStatus;
      campaignType: SurveyCampaignType;
      fillingStatus?: string | null;
      rewardId?: string | null;
      rewardType?: string | null;
      cidHash?: any | null;
      tags?: Array<any | null> | null;
      claimId?: any | null;
      rewardClaimed?: boolean | null;
      rewardClaimedAt?: any | null;
      mediaClaimed?: boolean | null;
      mediaClaimedAt?: any | null;
      mediaClaimedFrom?: any | null;
      resultsId?: string | null;
      whiteList?: Array<any | null> | null;
      funded?: boolean | null;
      showQuestionNumbers?: string | null;
      pageNextText?: string | null;
      completeText?: string | null;
      showPrevButton?: boolean | null;
      firstPageIsStarted?: boolean | null;
      startSurveyText?: string | null;
      completedHtml?: string | null;
      showPreviewBeforeComplete?: string | null;
      privateKey?: string | null;
      publicKey?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      publishedAt?: any | null;
      pages?: Array<{
        __typename?: 'SurveyPage';
        name: string;
        title?: string | null;
        elements?: Array<
          | {
              __typename?: 'BooleanElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'CommentElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'RadiogroupElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RankingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
              choices?: Array<
                | { __typename?: 'TextValueType'; text: string; value: string }
                | { __typename?: 'ValueType'; value: string }
              > | null;
            }
          | {
              __typename?: 'RatingElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              rateMax?: number | null;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
          | {
              __typename?: 'TextElement';
              name: string;
              title?: string | null;
              type: SurveyElementType;
              points?: number | null;
              isRequired: boolean;
              correctAnswer?: string | null;
            }
        > | null;
      }> | null;
      results?: Array<{
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null> | null;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PaginatedResultInfo';
      totalCount?: number | null;
      next?: any | null;
    };
  };
};

export type TopBusinessQueryVariables = Exact<{
  request: TopBusinessRequest;
}>;

export type TopBusinessQuery = {
  __typename?: 'Query';
  topBusiness: {
    __typename?: 'ChartDataLabels';
    labels?: Array<string> | null;
    data?: Array<number> | null;
    totalSurveys?: number | null;
    totalCompletions?: number | null;
    totalBusiness?: number | null;
    avgCompletionTime?: number | null;
    totalPageviews?: number | null;
    rankingCompletions?: Array<{
      __typename?: 'RankTopCompletions';
      surveyId?: string | null;
      completions?: number | null;
    } | null> | null;
  };
};

export type UserQueryVariables = Exact<{
  request: SingleProfileQueryRequest;
}>;

export type UserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type UserByIssuerQueryVariables = Exact<{
  request: IssuerProfileQueryRequest;
}>;

export type UserByIssuerQuery = {
  __typename?: 'Query';
  userbyIssuer?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type UserByWalletIssuerQueryVariables = Exact<{
  request: Iden3IssuerProfileQueryRequest;
}>;

export type UserByWalletIssuerQuery = {
  __typename?: 'Query';
  userbyWalletIssuer?: {
    __typename?: 'User';
    profileId: any;
    firstName?: string | null;
    lastName?: string | null;
    businessName?: string | null;
    displayName?: string | null;
    bio?: string | null;
    location?: string | null;
    age?: number | null;
    gender?: string | null;
    email?: any | null;
    avatar?: any | null;
    category?: any | null;
    interests?: Array<any | null> | null;
    accountType: AccountType;
    accountStatus: AccountStatus;
    inviter?: any | null;
    verified?: boolean | null;
    boosted?: boolean | null;
    visibility: Visibility;
    issuer?: string | null;
    iden3issuer?: string | null;
    elegibleSurveys?: number | null;
    publishedSurveys?: number | null;
    apiKey?: string | null;
    kycAttemptId?: string | null;
    createdAt?: any | null;
    lastLoginAt?: any | null;
    wallet?: {
      __typename?: 'Wallet';
      walletId: string;
      recipient?: any | null;
      credit: number;
      nearAddress?: any | null;
      avaxAddress?: any | null;
      auroraAddress?: any | null;
      polygonAddress?: any | null;
      moonbeamAddress?: any | null;
      ethereumAddress?: any | null;
      tonAddress?: string | null;
      cronosAddress?: any | null;
      bobaAddress?: any | null;
      bscAddress?: any | null;
      opbnbAddress?: any | null;
      filecoinAddress?: any | null;
      baseAddress?: any | null;
      hederaAddress?: any | null;
      stellarAddress?: string | null;
      solanaAddress?: string | null;
      polkadotAddress?: string | null;
      icpAddress?: string | null;
      bitfinityAddress?: any | null;
      stripeAccountId?: any | null;
      createdAt: any;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type UserContractQueryVariables = Exact<{
  request: UserContractQueryRequest;
}>;

export type UserContractQuery = {
  __typename?: 'Query';
  userContract?: {
    __typename?: 'UserContract';
    contractId: number;
    profileId: number;
    surveyId?: number | null;
    network?: string | null;
    contractType?: string | null;
    contractName?: string | null;
    contractAddress?: any | null;
    ownerAddress?: string | null;
    funcCall?: string | null;
    input?: string | null;
    output?: string | null;
    createdAt: any;
  } | null;
};

export type UserContractsQueryVariables = Exact<{
  request: UserContractsQueryRequest;
}>;

export type UserContractsQuery = {
  __typename?: 'Query';
  userContracts: {
    __typename?: 'PaginatedUserContractResult';
    items: Array<{
      __typename?: 'UserContract';
      contractId: number;
      profileId: number;
      surveyId?: number | null;
      network?: string | null;
      contractType?: string | null;
      contractName?: string | null;
      contractAddress?: any | null;
      ownerAddress?: string | null;
      funcCall?: string | null;
      input?: string | null;
      output?: string | null;
      createdAt: any;
    }>;
  };
};

export type UserNftsQueryVariables = Exact<{
  request: NftsRequest;
}>;

export type UserNftsQuery = {
  __typename?: 'Query';
  userNfts: {
    __typename?: 'NftsResult';
    items: Array<
      | {
          __typename?: 'Erc721';
          nftId: any;
          contractName?: string | null;
          contractAddress: any;
          symbol: string;
          tokenId?: string | null;
          name: string;
          description: string;
          contentUri: string;
          chainId: any;
          collectionName: string;
          ercType: string;
          owners?: Array<{
            __typename?: 'Owner';
            amount: number;
            address: any;
            profileId?: any | null;
          }> | null;
          originalContent?: {
            __typename?: 'NFTContent';
            uri?: string | null;
            metaType?: string | null;
            animatedUrl?: string | null;
          } | null;
        }
      | {
          __typename?: 'Nep171';
          nftId: any;
          seriesId: number;
          price?: number | null;
          royalty?: number | null;
          creatorId?: any | null;
          sellerId?: any | null;
          ownerId?: any | null;
          productId?: number | null;
          productType?: string | null;
          productStatus?: string | null;
          orderId?: string | null;
          orderStatus?: string | null;
          surveyId?: any | null;
          resultsId?: string | null;
          evmContractAddress?: any | null;
          chainId: any;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          mediaClaimedFrom?: any | null;
          metadata: {
            __typename?: 'Metadata';
            title: string;
            description: string;
            media: string;
            mediaHash?: string | null;
            copies?: number | null;
            issuedAt?: any | null;
            expiresAt?: any | null;
            startsAt?: any | null;
            updatedAt?: any | null;
            extra?: string | null;
            reference?: string | null;
            referenceHash?: string | null;
          };
        }
    >;
  };
};

export type UserRefferalsQueryVariables = Exact<{
  request: UserRefferalQueryRequest;
}>;

export type UserRefferalsQuery = {
  __typename?: 'Query';
  userRefferals: {
    __typename?: 'PaginatedUserRefferalResult';
    items: Array<{
      __typename?: 'UserRefferal';
      refferalId: string;
      surveyId?: any | null;
      profileId: any;
      invitedEmail: any;
      invitedStatus: string;
      invitedId?: any | null;
      refferalStatus: string;
      accountStatus?: AccountStatus | null;
      displayName?: string | null;
      email?: any | null;
      avatar?: string | null;
      createdAt: any;
      updatedAt?: any | null;
      invitedAt?: any | null;
      completedAt?: any | null;
    }>;
  };
};

export type UserTransactionsQueryVariables = Exact<{
  request: UserTransactionQueryRequest;
}>;

export type UserTransactionsQuery = {
  __typename?: 'Query';
  userTransactions: {
    __typename?: 'PaginatedUserTransactionResult';
    items: Array<{
      __typename?: 'TransactionCredit';
      transactionId: string;
      orderId?: string | null;
      amount: number;
      transactionHash?: any | null;
      transactionType: TransactionType;
      transactionStatus: TransactionStatus;
      transactionSource?: string | null;
      createdAt: string;
      user?: {
        __typename?: 'User';
        profileId: any;
        firstName?: string | null;
        lastName?: string | null;
        businessName?: string | null;
        displayName?: string | null;
        bio?: string | null;
        location?: string | null;
        age?: number | null;
        gender?: string | null;
        email?: any | null;
        avatar?: any | null;
        category?: any | null;
        interests?: Array<any | null> | null;
        accountType: AccountType;
        accountStatus: AccountStatus;
        inviter?: any | null;
        verified?: boolean | null;
        boosted?: boolean | null;
        visibility: Visibility;
        issuer?: string | null;
        iden3issuer?: string | null;
        elegibleSurveys?: number | null;
        publishedSurveys?: number | null;
        apiKey?: string | null;
        kycAttemptId?: string | null;
        createdAt?: any | null;
        lastLoginAt?: any | null;
        wallet?: {
          __typename?: 'Wallet';
          walletId: string;
          recipient?: any | null;
          credit: number;
          nearAddress?: any | null;
          avaxAddress?: any | null;
          auroraAddress?: any | null;
          polygonAddress?: any | null;
          moonbeamAddress?: any | null;
          ethereumAddress?: any | null;
          tonAddress?: string | null;
          cronosAddress?: any | null;
          bobaAddress?: any | null;
          bscAddress?: any | null;
          opbnbAddress?: any | null;
          filecoinAddress?: any | null;
          baseAddress?: any | null;
          hederaAddress?: any | null;
          stellarAddress?: string | null;
          solanaAddress?: string | null;
          polkadotAddress?: string | null;
          icpAddress?: string | null;
          bitfinityAddress?: any | null;
          stripeAccountId?: any | null;
          createdAt: any;
          updatedAt?: any | null;
        } | null;
      } | null;
      survey?: {
        __typename?: 'Survey';
        surveyId: any;
        title?: string | null;
        description?: string | null;
        logo?: string | null;
        surveyType: SurveyType;
        surveyStatus: SurveyStatus;
        campaignType: SurveyCampaignType;
        fillingStatus?: string | null;
        rewardId?: string | null;
        rewardType?: string | null;
        cidHash?: any | null;
        tags?: Array<any | null> | null;
        claimId?: any | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        mediaClaimedFrom?: any | null;
        resultsId?: string | null;
        whiteList?: Array<any | null> | null;
        funded?: boolean | null;
        showQuestionNumbers?: string | null;
        pageNextText?: string | null;
        completeText?: string | null;
        showPrevButton?: boolean | null;
        firstPageIsStarted?: boolean | null;
        startSurveyText?: string | null;
        completedHtml?: string | null;
        showPreviewBeforeComplete?: string | null;
        privateKey?: string | null;
        publicKey?: string | null;
        createdAt: any;
        updatedAt?: any | null;
        publishedAt?: any | null;
        pages?: Array<{
          __typename?: 'SurveyPage';
          name: string;
          title?: string | null;
          elements?: Array<
            | {
                __typename?: 'BooleanElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
            | {
                __typename?: 'CommentElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
            | {
                __typename?: 'RadiogroupElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
                choices?: Array<
                  | {
                      __typename?: 'TextValueType';
                      text: string;
                      value: string;
                    }
                  | { __typename?: 'ValueType'; value: string }
                > | null;
              }
            | {
                __typename?: 'RankingElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
                choices?: Array<
                  | {
                      __typename?: 'TextValueType';
                      text: string;
                      value: string;
                    }
                  | { __typename?: 'ValueType'; value: string }
                > | null;
              }
            | {
                __typename?: 'RatingElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                rateMax?: number | null;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
            | {
                __typename?: 'TextElement';
                name: string;
                title?: string | null;
                type: SurveyElementType;
                points?: number | null;
                isRequired: boolean;
                correctAnswer?: string | null;
              }
          > | null;
        }> | null;
        results?: Array<{
          __typename?: 'SurveyResult';
          resultsId: string;
          result: any;
          claimId?: any | null;
          rewardId?: string | null;
          rewardType?: string | null;
          rewardClaimed?: boolean | null;
          rewardClaimedAt?: any | null;
          mediaClaimed?: boolean | null;
          mediaClaimedAt?: any | null;
          chainId?: any | null;
          score?: number | null;
          credibilityScore?: any | null;
          createdAt: any;
          user?: {
            __typename?: 'User';
            profileId: any;
            firstName?: string | null;
            lastName?: string | null;
            businessName?: string | null;
            displayName?: string | null;
            bio?: string | null;
            location?: string | null;
            age?: number | null;
            gender?: string | null;
            email?: any | null;
            avatar?: any | null;
            category?: any | null;
            interests?: Array<any | null> | null;
            accountType: AccountType;
            accountStatus: AccountStatus;
            inviter?: any | null;
            verified?: boolean | null;
            boosted?: boolean | null;
            visibility: Visibility;
            issuer?: string | null;
            iden3issuer?: string | null;
            elegibleSurveys?: number | null;
            publishedSurveys?: number | null;
            apiKey?: string | null;
            kycAttemptId?: string | null;
            createdAt?: any | null;
            lastLoginAt?: any | null;
            wallet?: {
              __typename?: 'Wallet';
              walletId: string;
              recipient?: any | null;
              credit: number;
              nearAddress?: any | null;
              avaxAddress?: any | null;
              auroraAddress?: any | null;
              polygonAddress?: any | null;
              moonbeamAddress?: any | null;
              ethereumAddress?: any | null;
              tonAddress?: string | null;
              cronosAddress?: any | null;
              bobaAddress?: any | null;
              bscAddress?: any | null;
              opbnbAddress?: any | null;
              filecoinAddress?: any | null;
              baseAddress?: any | null;
              hederaAddress?: any | null;
              stellarAddress?: string | null;
              solanaAddress?: string | null;
              polkadotAddress?: string | null;
              icpAddress?: string | null;
              bitfinityAddress?: any | null;
              stripeAccountId?: any | null;
              createdAt: any;
              updatedAt?: any | null;
            } | null;
          } | null;
          survey?: {
            __typename?: 'Survey';
            resultsId?: string | null;
            surveyId: any;
            title?: string | null;
            description?: string | null;
            logo?: string | null;
            surveyType: SurveyType;
            surveyStatus: SurveyStatus;
            funded?: boolean | null;
            pages?: Array<{
              __typename?: 'SurveyPage';
              name: string;
              title?: string | null;
            }> | null;
          } | null;
        } | null> | null;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
      } | null;
      surveyResult?: {
        __typename?: 'SurveyResult';
        resultsId: string;
        result: any;
        claimId?: any | null;
        rewardId?: string | null;
        rewardType?: string | null;
        rewardClaimed?: boolean | null;
        rewardClaimedAt?: any | null;
        mediaClaimed?: boolean | null;
        mediaClaimedAt?: any | null;
        chainId?: any | null;
        score?: number | null;
        credibilityScore?: any | null;
        createdAt: any;
        user?: {
          __typename?: 'User';
          profileId: any;
          firstName?: string | null;
          lastName?: string | null;
          businessName?: string | null;
          displayName?: string | null;
          bio?: string | null;
          location?: string | null;
          age?: number | null;
          gender?: string | null;
          email?: any | null;
          avatar?: any | null;
          category?: any | null;
          interests?: Array<any | null> | null;
          accountType: AccountType;
          accountStatus: AccountStatus;
          inviter?: any | null;
          verified?: boolean | null;
          boosted?: boolean | null;
          visibility: Visibility;
          issuer?: string | null;
          iden3issuer?: string | null;
          elegibleSurveys?: number | null;
          publishedSurveys?: number | null;
          apiKey?: string | null;
          kycAttemptId?: string | null;
          createdAt?: any | null;
          lastLoginAt?: any | null;
          wallet?: {
            __typename?: 'Wallet';
            walletId: string;
            recipient?: any | null;
            credit: number;
            nearAddress?: any | null;
            avaxAddress?: any | null;
            auroraAddress?: any | null;
            polygonAddress?: any | null;
            moonbeamAddress?: any | null;
            ethereumAddress?: any | null;
            tonAddress?: string | null;
            cronosAddress?: any | null;
            bobaAddress?: any | null;
            bscAddress?: any | null;
            opbnbAddress?: any | null;
            filecoinAddress?: any | null;
            baseAddress?: any | null;
            hederaAddress?: any | null;
            stellarAddress?: string | null;
            solanaAddress?: string | null;
            polkadotAddress?: string | null;
            icpAddress?: string | null;
            bitfinityAddress?: any | null;
            stripeAccountId?: any | null;
            createdAt: any;
            updatedAt?: any | null;
          } | null;
        } | null;
        survey?: {
          __typename?: 'Survey';
          resultsId?: string | null;
          surveyId: any;
          title?: string | null;
          description?: string | null;
          logo?: string | null;
          surveyType: SurveyType;
          surveyStatus: SurveyStatus;
          funded?: boolean | null;
          pages?: Array<{
            __typename?: 'SurveyPage';
            name: string;
            title?: string | null;
          }> | null;
        } | null;
      } | null;
    }>;
  };
};

export type UserWalletQueryVariables = Exact<{
  request: UserWalletQueryRequest;
}>;

export type UserWalletQuery = {
  __typename?: 'Query';
  userWallet?: {
    __typename?: 'Wallet';
    walletId: string;
    credit: number;
    recipient?: any | null;
    nearAddress?: any | null;
    auroraAddress?: any | null;
    avaxAddress?: any | null;
    polygonAddress?: any | null;
    moonbeamAddress?: any | null;
    ethereumAddress?: any | null;
    tonAddress?: string | null;
    cronosAddress?: any | null;
    bobaAddress?: any | null;
    bscAddress?: any | null;
    opbnbAddress?: any | null;
    filecoinAddress?: any | null;
    baseAddress?: any | null;
    hederaAddress?: any | null;
    stellarAddress?: string | null;
    solanaAddress?: string | null;
    polkadotAddress?: string | null;
    icpAddress?: string | null;
    bitfinityAddress?: any | null;
    stripeAccountId?: any | null;
    createdAt: any;
    updatedAt?: any | null;
  } | null;
};

export type UsersQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;

export type UsersQuery = {
  __typename?: 'Query';
  users: {
    __typename?: 'PaginatedUserResult';
    items: Array<{
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PaginatedResultInfo';
      totalCount?: number | null;
      next?: any | null;
    };
  };
};

export type UsersAdminQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;

export type UsersAdminQuery = {
  __typename?: 'Query';
  usersAdmin: {
    __typename?: 'PaginatedUserResult';
    items: Array<{
      __typename?: 'User';
      profileId: any;
      firstName?: string | null;
      lastName?: string | null;
      businessName?: string | null;
      displayName?: string | null;
      bio?: string | null;
      location?: string | null;
      age?: number | null;
      gender?: string | null;
      email?: any | null;
      avatar?: any | null;
      category?: any | null;
      interests?: Array<any | null> | null;
      accountType: AccountType;
      accountStatus: AccountStatus;
      inviter?: any | null;
      verified?: boolean | null;
      boosted?: boolean | null;
      visibility: Visibility;
      issuer?: string | null;
      iden3issuer?: string | null;
      elegibleSurveys?: number | null;
      publishedSurveys?: number | null;
      apiKey?: string | null;
      kycAttemptId?: string | null;
      createdAt?: any | null;
      lastLoginAt?: any | null;
      wallet?: {
        __typename?: 'Wallet';
        walletId: string;
        recipient?: any | null;
        credit: number;
        nearAddress?: any | null;
        avaxAddress?: any | null;
        auroraAddress?: any | null;
        polygonAddress?: any | null;
        moonbeamAddress?: any | null;
        ethereumAddress?: any | null;
        tonAddress?: string | null;
        cronosAddress?: any | null;
        bobaAddress?: any | null;
        bscAddress?: any | null;
        opbnbAddress?: any | null;
        filecoinAddress?: any | null;
        baseAddress?: any | null;
        hederaAddress?: any | null;
        stellarAddress?: string | null;
        solanaAddress?: string | null;
        polkadotAddress?: string | null;
        icpAddress?: string | null;
        bitfinityAddress?: any | null;
        stripeAccountId?: any | null;
        createdAt: any;
        updatedAt?: any | null;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PaginatedResultInfo';
      totalCount?: number | null;
      next?: any | null;
    };
  };
};

export type VerifyQueryVariables = Exact<{
  request: VerifyRequest;
}>;

export type VerifyQuery = { __typename?: 'Query'; verify: boolean };

export type PingQueryVariables = Exact<{ [key: string]: never }>;

export type PingQuery = { __typename?: 'Query'; ping: string };

export const AnonymousUserFieldsFragmentDoc = gql`
  fragment AnonymousUserFields on AnonymousUser {
    anonId
    profileId
    fingerprint
    createdAt
    updatedAt
  }
`;
export const ChartDataLabelsFieldsFragmentDoc = gql`
  fragment ChartDataLabelsFields on ChartDataLabels {
    labels
    data
    totalSurveys
    totalCompletions
    totalBusiness
    rankingCompletions {
      surveyId
      completions
    }
    avgCompletionTime
    totalPageviews
  }
`;
export const DataUserFieldsFragmentDoc = gql`
  fragment DataUserFields on DataUser {
    userMostCompletedSurveys {
      profileId
      numberOfSurveys
    }
    mostEarnedCashRewards {
      profileId
      mostCashViaStripe
    }
    mostEarnedCryptocurrencyRewards {
      nearRewards {
        profileId
        amountCrypto
        amountUsd
      }
      polkadotRewards {
        profileId
        amountCrypto
        amountUsd
      }
      polygonRewards {
        profileId
        amountCrypto
        amountUsd
      }
      totalCryptoInCash {
        profileId
        amountUsd
      }
    }
    mostDollarsSpentNFTMarketplace {
      profileId
      realDollarsSpent
    }
    mostCryptocurrencySpentNFTMarketplace {
      mostSpentNear {
        profileId
        amountCrypto
        amountUsd
      }
      mostSpentPolkadot {
        profileId
        amountCrypto
        amountUsd
      }
      mostSpentPolygon {
        profileId
        amountCrypto
        amountUsd
      }
    }
    mostInvitedUsers {
      profileId
      usersInvited
    }
    mostCompletedSurveysInSpecificCategory {
      profileId
      categoryName
      surveysCompleted
    }
    highestAverageSurveyCompletionRate {
      highestAverageSurveyCompletion {
        profileId
        percentageCompletionAverage
      }
    }
    mostConsistentSurveyCompletionFrequency {
      daily {
        profileId
        frequencyAverage
      }
      weekly {
        profileId
        frequencyAverage
      }
      monthly {
        profileId
        frequencyAverage
      }
      yearly {
        profileId
        frequencyAverage
      }
    }
    highestNumberOfConsecutiveDaysWithSurveyCompletions {
      profileId
      longestDailyStreak
    }
    mostActiveParticipationInSpecificTypesOfSurveys {
      multipleChoiceSurveysRankings {
        profileId
        multipleChoiceSurveys
      }
      openEndedSurveysRankings {
        profileId
        openEndedSurveys
      }
    }
    mostReferralsConvertedIntoActiveSurveyParticipants {
      profileId
      referralsSent
      referredParticipantCount
    }
    mostEngagementWithCommunityFeatures {
      profileId
      totalPosts
    }
    mostCreativeAndUniqueSurveyResponses {
      surveyResponseRating {
        profileId
        item_id
        rating
      }
      mediaRating {
        profileId
        item_id
        rating
      }
    }
  }
`;
export const EmbedSurveyResultFieldsFragmentDoc = gql`
  fragment EmbedSurveyResultFields on EmbedSurveyResult {
    embedResultsId
    result
    fingerprint
    survey {
      surveyId
      title
      description
      logo
      surveyType
      surveyStatus
      funded
    }
    claimId
    rewardId
    rewardType
    rewardClaimed
    rewardClaimedAt
    mediaClaimed
    mediaClaimedAt
    chainId
    createdAt
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    profileId
    firstName
    lastName
    businessName
    displayName
    bio
    location
    age
    gender
    email
    avatar
    category
    interests
    accountType
    accountStatus
    wallet {
      walletId
      recipient
      credit
      nearAddress
      avaxAddress
      auroraAddress
      polygonAddress
      moonbeamAddress
      ethereumAddress
      tonAddress
      cronosAddress
      bobaAddress
      bscAddress
      opbnbAddress
      filecoinAddress
      baseAddress
      hederaAddress
      stellarAddress
      solanaAddress
      polkadotAddress
      icpAddress
      bitfinityAddress
      stripeAccountId
      createdAt
      updatedAt
    }
    inviter
    verified
    boosted
    visibility
    issuer
    iden3issuer
    elegibleSurveys
    publishedSurveys
    apiKey
    kycAttemptId
    createdAt
    lastLoginAt
  }
`;
export const SurveyElementItemValueTypeFieldsFragmentDoc = gql`
  fragment SurveyElementItemValueTypeFields on SurveyElementItemValueType {
    ... on TextValueType {
      text
      value
    }
    ... on ValueType {
      value
    }
  }
`;
export const SurveyElementFieldsFragmentDoc = gql`
  fragment SurveyElementFields on SurveyElement {
    ... on TextElement {
      name
      title
      type
      points
      isRequired
      correctAnswer
    }
    ... on CommentElement {
      name
      title
      type
      points
      isRequired
      correctAnswer
    }
    ... on RankingElement {
      name
      title
      type
      points
      choices {
        ...SurveyElementItemValueTypeFields
      }
      isRequired
      correctAnswer
    }
    ... on RadiogroupElement {
      name
      title
      type
      points
      choices {
        ...SurveyElementItemValueTypeFields
      }
      isRequired
      correctAnswer
    }
    ... on RatingElement {
      name
      title
      type
      rateMax
      points
      isRequired
      correctAnswer
    }
    ... on BooleanElement {
      name
      title
      type
      points
      isRequired
      correctAnswer
    }
  }
  ${SurveyElementItemValueTypeFieldsFragmentDoc}
`;
export const SurveyPageFieldsFragmentDoc = gql`
  fragment SurveyPageFields on SurveyPage {
    name
    title
    elements {
      ...SurveyElementFields
    }
  }
  ${SurveyElementFieldsFragmentDoc}
`;
export const SurveyResultFieldsFragmentDoc = gql`
  fragment SurveyResultFields on SurveyResult {
    resultsId
    result
    user {
      ...UserFields
    }
    survey {
      resultsId
      surveyId
      title
      description
      logo
      surveyType
      surveyStatus
      pages {
        name
        title
      }
      funded
    }
    claimId
    rewardId
    rewardType
    rewardClaimed
    rewardClaimedAt
    mediaClaimed
    mediaClaimedAt
    chainId
    score
    credibilityScore
    createdAt
  }
  ${UserFieldsFragmentDoc}
`;
export const SurveyFieldsFragmentDoc = gql`
  fragment SurveyFields on Survey {
    surveyId
    title
    description
    logo
    surveyType
    surveyStatus
    campaignType
    pages {
      ...SurveyPageFields
    }
    results {
      ...SurveyResultFields
    }
    user {
      ...UserFields
    }
    fillingStatus
    rewardId
    rewardType
    cidHash
    tags
    claimId
    rewardClaimed
    rewardClaimedAt
    mediaClaimed
    mediaClaimedAt
    mediaClaimedFrom
    resultsId
    whiteList
    funded
    showQuestionNumbers
    pageNextText
    completeText
    showPrevButton
    firstPageIsStarted
    startSurveyText
    completedHtml
    showPreviewBeforeComplete
    privateKey
    publicKey
    createdAt
    updatedAt
    publishedAt
  }
  ${SurveyPageFieldsFragmentDoc}
  ${SurveyResultFieldsFragmentDoc}
  ${UserFieldsFragmentDoc}
`;
export const FillingQueueFieldsFragmentDoc = gql`
  fragment FillingQueueFields on FillingQueue {
    fillingId
    user {
      ...UserFields
    }
    survey {
      ...SurveyFields
    }
    fillingType
    fillingStatus
    claimId
    metadata
    createdAt
    updatedAt
    completedAt
  }
  ${UserFieldsFragmentDoc}
  ${SurveyFieldsFragmentDoc}
`;
export const LeaderboardEntryFieldsFragmentDoc = gql`
  fragment LeaderboardEntryFields on LeaderboardEntry {
    leaderboardEntryId
    leaderboardId
    profileId
    issuer
    iden3issuer
    avatar
    points
    rank
    createdAt
  }
`;
export const MarketplaceOrderFieldsFragmentDoc = gql`
  fragment MarketplaceOrderFields on MarketplaceOrder {
    orderId
    user {
      ...UserFields
    }
    productId
    orderStatus
    orderType
    paymentType
    orderAmount
    metadata
    mediaClaimed
    mediaClaimedAt
    mediaClaimedFrom
    chainId
    createdAt
    updatedAt
  }
  ${UserFieldsFragmentDoc}
`;
export const NftFieldsFragmentDoc = gql`
  fragment NftFields on NFT {
    ... on Erc721 {
      nftId
      contractName
      contractAddress
      symbol
      tokenId
      owners {
        amount
        address
        profileId
      }
      name
      description
      contentUri
      originalContent {
        uri
        metaType
        animatedUrl
      }
      chainId
      collectionName
      ercType
    }
    ... on Nep171 {
      nftId
      seriesId
      metadata {
        title
        description
        media
        mediaHash
        copies
        issuedAt
        expiresAt
        startsAt
        updatedAt
        extra
        reference
        referenceHash
      }
      price
      royalty
      creatorId
      sellerId
      ownerId
      productId
      productType
      productStatus
      orderId
      orderStatus
      surveyId
      resultsId
      evmContractAddress
      chainId
      mediaClaimed
      mediaClaimedAt
      mediaClaimedFrom
    }
  }
`;
export const NftGalleryFieldsFragmentDoc = gql`
  fragment NftGalleryFields on NftGallery {
    nftGalleryId
    name
    profileId
    items {
      ...NftFields
    }
    chainId
    createdAt
    updatedAt
  }
  ${NftFieldsFragmentDoc}
`;
export const NftImageFieldsFragmentDoc = gql`
  fragment NftImageFields on NftImage {
    nftImageId
    contractAddress
    tokenId
    uri
    chainId
    verified
    createdAt
  }
`;
export const ProductFieldsFragmentDoc = gql`
  fragment ProductFields on MarketplaceProduct {
    productId
    name
    description
    image
    productType
    price
    productStatus
    duration
    mediaId
    metadata
    whiteList
    sellerId
    ownerId
    chainId
    createdAt
    updatedAt
  }
`;
export const QuestionFieldsFragmentDoc = gql`
  fragment QuestionFields on Question {
    surveyId
    description
    createdAt
  }
`;
export const SurveyGatingFieldsFragmentDoc = gql`
  fragment SurveyGatingFields on SurveyGating {
    gateId
    surveyId
    profileId
    requirements
    createdAt
    updatedAt
  }
`;
export const SurveyReferralFieldsFragmentDoc = gql`
  fragment SurveyReferralFields on SurveyReferral {
    referralId
    surveyId
    profileId
    invitedEmail
    invitedStatus
    invitedId
    referralStatus
    accountStatus
    displayName
    email
    avatar
    createdAt
    updatedAt
    invitedAt
    completedAt
  }
`;
export const SurveyRewardFieldsFragmentDoc = gql`
  fragment SurveyRewardFields on SurveyReward {
    rewardId
    rewardType
    mediaId
    mediaPrize {
      ...NftFields
    }
    surveyId
    profileId
    resultsId
    chainId
    createdAt
    updatedAt
  }
  ${NftFieldsFragmentDoc}
`;
export const TransactionCreditFieldsFragmentDoc = gql`
  fragment TransactionCreditFields on TransactionCredit {
    transactionId
    orderId
    user {
      ...UserFields
    }
    survey {
      ...SurveyFields
    }
    surveyResult {
      ...SurveyResultFields
    }
    amount
    transactionHash
    transactionType
    transactionStatus
    transactionSource
    createdAt
  }
  ${UserFieldsFragmentDoc}
  ${SurveyFieldsFragmentDoc}
  ${SurveyResultFieldsFragmentDoc}
`;
export const UserBoostFieldsFragmentDoc = gql`
  fragment UserBoostFields on UserBoost {
    boostId
    profileId
    startAt
    endAt
    boostStatus
    createdAt
    updatedAt
  }
`;
export const UserContractFieldsFragmentDoc = gql`
  fragment UserContractFields on UserContract {
    contractId
    profileId
    surveyId
    network
    contractType
    contractName
    contractAddress
    ownerAddress
    funcCall
    input
    output
    createdAt
  }
`;
export const UserMembershipFieldsFragmentDoc = gql`
  fragment UserMembershipFields on UserMembership {
    membershipId
    profileId
    startAt
    endAt
    membershipStatus
    createdAt
    updatedAt
  }
`;
export const UserPrizeFieldsFragmentDoc = gql`
  fragment UserPrizeFields on UserPrize {
    prizeId
    rewardId
    surveyId
    resultId
    profileId
    chainId
    createdAt
  }
`;
export const UserRefferalFieldsFragmentDoc = gql`
  fragment UserRefferalFields on UserRefferal {
    refferalId
    surveyId
    profileId
    invitedEmail
    invitedStatus
    invitedId
    refferalStatus
    accountStatus
    displayName
    email
    avatar
    createdAt
    updatedAt
    invitedAt
    completedAt
  }
`;
export const WalletFieldsFragmentDoc = gql`
  fragment WalletFields on Wallet {
    walletId
    credit
    user {
      ...UserFields
    }
    recipient
    nearAddress
    avaxAddress
    auroraAddress
    polygonAddress
    moonbeamAddress
    ethereumAddress
    tonAddress
    cronosAddress
    bobaAddress
    bscAddress
    opbnbAddress
    filecoinAddress
    baseAddress
    hederaAddress
    stellarAddress
    solanaAddress
    polkadotAddress
    icpAddress
    bitfinityAddress
    stripeAccountId
    createdAt
    updatedAt
  }
  ${UserFieldsFragmentDoc}
`;
export const AuthenticateDocument = gql`
  mutation Authenticate($request: SignedAuthChallenge!) {
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }
`;
export type AuthenticateMutationFn = Apollo.MutationFunction<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAuthenticateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >(AuthenticateDocument, options);
}
export type AuthenticateMutationHookResult = ReturnType<
  typeof useAuthenticateMutation
>;
export type AuthenticateMutationResult =
  Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;
export const BanUnbanUserDocument = gql`
  mutation BanUnbanUser($request: BanUnbanUserRequest!) {
    banUnbanUser(request: $request) {
      ...UserFields
      __typename
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type BanUnbanUserMutationFn = Apollo.MutationFunction<
  BanUnbanUserMutation,
  BanUnbanUserMutationVariables
>;

/**
 * __useBanUnbanUserMutation__
 *
 * To run a mutation, you first call `useBanUnbanUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBanUnbanUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [banUnbanUserMutation, { data, loading, error }] = useBanUnbanUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useBanUnbanUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BanUnbanUserMutation,
    BanUnbanUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BanUnbanUserMutation,
    BanUnbanUserMutationVariables
  >(BanUnbanUserDocument, options);
}
export type BanUnbanUserMutationHookResult = ReturnType<
  typeof useBanUnbanUserMutation
>;
export type BanUnbanUserMutationResult =
  Apollo.MutationResult<BanUnbanUserMutation>;
export type BanUnbanUserMutationOptions = Apollo.BaseMutationOptions<
  BanUnbanUserMutation,
  BanUnbanUserMutationVariables
>;
export const ClaimMarketplaceOrderMediaDocument = gql`
  mutation ClaimMarketplaceOrderMedia(
    $request: ClaimMarketplaceOrderMediaRequest!
  ) {
    claimMarketplaceOrderMedia(request: $request) {
      ...MarketplaceOrderFields
      __typename
    }
  }
  ${MarketplaceOrderFieldsFragmentDoc}
`;
export type ClaimMarketplaceOrderMediaMutationFn = Apollo.MutationFunction<
  ClaimMarketplaceOrderMediaMutation,
  ClaimMarketplaceOrderMediaMutationVariables
>;

/**
 * __useClaimMarketplaceOrderMediaMutation__
 *
 * To run a mutation, you first call `useClaimMarketplaceOrderMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimMarketplaceOrderMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimMarketplaceOrderMediaMutation, { data, loading, error }] = useClaimMarketplaceOrderMediaMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useClaimMarketplaceOrderMediaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClaimMarketplaceOrderMediaMutation,
    ClaimMarketplaceOrderMediaMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClaimMarketplaceOrderMediaMutation,
    ClaimMarketplaceOrderMediaMutationVariables
  >(ClaimMarketplaceOrderMediaDocument, options);
}
export type ClaimMarketplaceOrderMediaMutationHookResult = ReturnType<
  typeof useClaimMarketplaceOrderMediaMutation
>;
export type ClaimMarketplaceOrderMediaMutationResult =
  Apollo.MutationResult<ClaimMarketplaceOrderMediaMutation>;
export type ClaimMarketplaceOrderMediaMutationOptions =
  Apollo.BaseMutationOptions<
    ClaimMarketplaceOrderMediaMutation,
    ClaimMarketplaceOrderMediaMutationVariables
  >;
export const ClaimSurveyMediaDocument = gql`
  mutation ClaimSurveyMedia($request: ClaimSurveyMediaRequest!) {
    claimSurveyMedia(request: $request) {
      ...SurveyRewardFields
      __typename
    }
  }
  ${SurveyRewardFieldsFragmentDoc}
`;
export type ClaimSurveyMediaMutationFn = Apollo.MutationFunction<
  ClaimSurveyMediaMutation,
  ClaimSurveyMediaMutationVariables
>;

/**
 * __useClaimSurveyMediaMutation__
 *
 * To run a mutation, you first call `useClaimSurveyMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimSurveyMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimSurveyMediaMutation, { data, loading, error }] = useClaimSurveyMediaMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useClaimSurveyMediaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClaimSurveyMediaMutation,
    ClaimSurveyMediaMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClaimSurveyMediaMutation,
    ClaimSurveyMediaMutationVariables
  >(ClaimSurveyMediaDocument, options);
}
export type ClaimSurveyMediaMutationHookResult = ReturnType<
  typeof useClaimSurveyMediaMutation
>;
export type ClaimSurveyMediaMutationResult =
  Apollo.MutationResult<ClaimSurveyMediaMutation>;
export type ClaimSurveyMediaMutationOptions = Apollo.BaseMutationOptions<
  ClaimSurveyMediaMutation,
  ClaimSurveyMediaMutationVariables
>;
export const ClaimSurveyRewardDocument = gql`
  mutation ClaimSurveyReward($request: ClaimSurveyRewardRequest!) {
    claimSurveyReward(request: $request) {
      ...SurveyRewardFields
      __typename
    }
  }
  ${SurveyRewardFieldsFragmentDoc}
`;
export type ClaimSurveyRewardMutationFn = Apollo.MutationFunction<
  ClaimSurveyRewardMutation,
  ClaimSurveyRewardMutationVariables
>;

/**
 * __useClaimSurveyRewardMutation__
 *
 * To run a mutation, you first call `useClaimSurveyRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimSurveyRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimSurveyRewardMutation, { data, loading, error }] = useClaimSurveyRewardMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useClaimSurveyRewardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClaimSurveyRewardMutation,
    ClaimSurveyRewardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClaimSurveyRewardMutation,
    ClaimSurveyRewardMutationVariables
  >(ClaimSurveyRewardDocument, options);
}
export type ClaimSurveyRewardMutationHookResult = ReturnType<
  typeof useClaimSurveyRewardMutation
>;
export type ClaimSurveyRewardMutationResult =
  Apollo.MutationResult<ClaimSurveyRewardMutation>;
export type ClaimSurveyRewardMutationOptions = Apollo.BaseMutationOptions<
  ClaimSurveyRewardMutation,
  ClaimSurveyRewardMutationVariables
>;
export const CreateAnonymousUserDocument = gql`
  mutation CreateAnonymousUser($request: CreateAnonymousUserRequest!) {
    createAnonymousUser(request: $request) {
      ...AnonymousUserFields
      __typename
    }
  }
  ${AnonymousUserFieldsFragmentDoc}
`;
export type CreateAnonymousUserMutationFn = Apollo.MutationFunction<
  CreateAnonymousUserMutation,
  CreateAnonymousUserMutationVariables
>;

/**
 * __useCreateAnonymousUserMutation__
 *
 * To run a mutation, you first call `useCreateAnonymousUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnonymousUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnonymousUserMutation, { data, loading, error }] = useCreateAnonymousUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateAnonymousUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAnonymousUserMutation,
    CreateAnonymousUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateAnonymousUserMutation,
    CreateAnonymousUserMutationVariables
  >(CreateAnonymousUserDocument, options);
}
export type CreateAnonymousUserMutationHookResult = ReturnType<
  typeof useCreateAnonymousUserMutation
>;
export type CreateAnonymousUserMutationResult =
  Apollo.MutationResult<CreateAnonymousUserMutation>;
export type CreateAnonymousUserMutationOptions = Apollo.BaseMutationOptions<
  CreateAnonymousUserMutation,
  CreateAnonymousUserMutationVariables
>;
export const CreateEmbedSurveyResultDocument = gql`
  mutation CreateEmbedSurveyResult($request: CreateEmbedSurveyResultRequest!) {
    createEmbedSurveyResult(request: $request) {
      ...EmbedSurveyResultFields
      __typename
    }
  }
  ${EmbedSurveyResultFieldsFragmentDoc}
`;
export type CreateEmbedSurveyResultMutationFn = Apollo.MutationFunction<
  CreateEmbedSurveyResultMutation,
  CreateEmbedSurveyResultMutationVariables
>;

/**
 * __useCreateEmbedSurveyResultMutation__
 *
 * To run a mutation, you first call `useCreateEmbedSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmbedSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmbedSurveyResultMutation, { data, loading, error }] = useCreateEmbedSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateEmbedSurveyResultMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEmbedSurveyResultMutation,
    CreateEmbedSurveyResultMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateEmbedSurveyResultMutation,
    CreateEmbedSurveyResultMutationVariables
  >(CreateEmbedSurveyResultDocument, options);
}
export type CreateEmbedSurveyResultMutationHookResult = ReturnType<
  typeof useCreateEmbedSurveyResultMutation
>;
export type CreateEmbedSurveyResultMutationResult =
  Apollo.MutationResult<CreateEmbedSurveyResultMutation>;
export type CreateEmbedSurveyResultMutationOptions = Apollo.BaseMutationOptions<
  CreateEmbedSurveyResultMutation,
  CreateEmbedSurveyResultMutationVariables
>;
export const CreateErc721NftGalleryDocument = gql`
  mutation CreateErc721NftGallery($request: NftGalleryCreateRequest!) {
    createErc721NftGallery(request: $request)
  }
`;
export type CreateErc721NftGalleryMutationFn = Apollo.MutationFunction<
  CreateErc721NftGalleryMutation,
  CreateErc721NftGalleryMutationVariables
>;

/**
 * __useCreateErc721NftGalleryMutation__
 *
 * To run a mutation, you first call `useCreateErc721NftGalleryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateErc721NftGalleryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createErc721NftGalleryMutation, { data, loading, error }] = useCreateErc721NftGalleryMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateErc721NftGalleryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateErc721NftGalleryMutation,
    CreateErc721NftGalleryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateErc721NftGalleryMutation,
    CreateErc721NftGalleryMutationVariables
  >(CreateErc721NftGalleryDocument, options);
}
export type CreateErc721NftGalleryMutationHookResult = ReturnType<
  typeof useCreateErc721NftGalleryMutation
>;
export type CreateErc721NftGalleryMutationResult =
  Apollo.MutationResult<CreateErc721NftGalleryMutation>;
export type CreateErc721NftGalleryMutationOptions = Apollo.BaseMutationOptions<
  CreateErc721NftGalleryMutation,
  CreateErc721NftGalleryMutationVariables
>;
export const CreateFillingQueueDocument = gql`
  mutation CreateFillingQueue($request: CreateFillingQueueRequest!) {
    createFillingQueue(request: $request) {
      ...FillingQueueFields
      __typename
    }
  }
  ${FillingQueueFieldsFragmentDoc}
`;
export type CreateFillingQueueMutationFn = Apollo.MutationFunction<
  CreateFillingQueueMutation,
  CreateFillingQueueMutationVariables
>;

/**
 * __useCreateFillingQueueMutation__
 *
 * To run a mutation, you first call `useCreateFillingQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFillingQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFillingQueueMutation, { data, loading, error }] = useCreateFillingQueueMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateFillingQueueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFillingQueueMutation,
    CreateFillingQueueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateFillingQueueMutation,
    CreateFillingQueueMutationVariables
  >(CreateFillingQueueDocument, options);
}
export type CreateFillingQueueMutationHookResult = ReturnType<
  typeof useCreateFillingQueueMutation
>;
export type CreateFillingQueueMutationResult =
  Apollo.MutationResult<CreateFillingQueueMutation>;
export type CreateFillingQueueMutationOptions = Apollo.BaseMutationOptions<
  CreateFillingQueueMutation,
  CreateFillingQueueMutationVariables
>;
export const CreateMarketplaceOrderDocument = gql`
  mutation CreateMarketplaceOrder($request: CreateMarketplaceOrderRequest!) {
    createMarketplaceOrder(request: $request) {
      ...MarketplaceOrderFields
      __typename
    }
  }
  ${MarketplaceOrderFieldsFragmentDoc}
`;
export type CreateMarketplaceOrderMutationFn = Apollo.MutationFunction<
  CreateMarketplaceOrderMutation,
  CreateMarketplaceOrderMutationVariables
>;

/**
 * __useCreateMarketplaceOrderMutation__
 *
 * To run a mutation, you first call `useCreateMarketplaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMarketplaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMarketplaceOrderMutation, { data, loading, error }] = useCreateMarketplaceOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMarketplaceOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMarketplaceOrderMutation,
    CreateMarketplaceOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMarketplaceOrderMutation,
    CreateMarketplaceOrderMutationVariables
  >(CreateMarketplaceOrderDocument, options);
}
export type CreateMarketplaceOrderMutationHookResult = ReturnType<
  typeof useCreateMarketplaceOrderMutation
>;
export type CreateMarketplaceOrderMutationResult =
  Apollo.MutationResult<CreateMarketplaceOrderMutation>;
export type CreateMarketplaceOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateMarketplaceOrderMutation,
  CreateMarketplaceOrderMutationVariables
>;
export const CreateNftGalleryDocument = gql`
  mutation CreateNftGallery($request: NftGalleryCreateRequest!) {
    createNftGallery(request: $request)
  }
`;
export type CreateNftGalleryMutationFn = Apollo.MutationFunction<
  CreateNftGalleryMutation,
  CreateNftGalleryMutationVariables
>;

/**
 * __useCreateNftGalleryMutation__
 *
 * To run a mutation, you first call `useCreateNftGalleryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNftGalleryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNftGalleryMutation, { data, loading, error }] = useCreateNftGalleryMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateNftGalleryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNftGalleryMutation,
    CreateNftGalleryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateNftGalleryMutation,
    CreateNftGalleryMutationVariables
  >(CreateNftGalleryDocument, options);
}
export type CreateNftGalleryMutationHookResult = ReturnType<
  typeof useCreateNftGalleryMutation
>;
export type CreateNftGalleryMutationResult =
  Apollo.MutationResult<CreateNftGalleryMutation>;
export type CreateNftGalleryMutationOptions = Apollo.BaseMutationOptions<
  CreateNftGalleryMutation,
  CreateNftGalleryMutationVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct($request: CreateProductRequest!) {
    createProduct(request: $request) {
      ...ProductFields
      __typename
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const CreateProfileDocument = gql`
  mutation CreateProfile($request: CreateProfileRequest!) {
    createProfile(request: $request) {
      ...UserFields
      __typename
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type CreateProfileMutationFn = Apollo.MutationFunction<
  CreateProfileMutation,
  CreateProfileMutationVariables
>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProfileMutation,
    CreateProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProfileMutation,
    CreateProfileMutationVariables
  >(CreateProfileDocument, options);
}
export type CreateProfileMutationHookResult = ReturnType<
  typeof useCreateProfileMutation
>;
export type CreateProfileMutationResult =
  Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<
  CreateProfileMutation,
  CreateProfileMutationVariables
>;
export const CreateSurveyDocument = gql`
  mutation CreateSurvey($request: SurveyCreateRequest!) {
    createSurvey(request: $request) {
      ...SurveyFields
      __typename
    }
  }
  ${SurveyFieldsFragmentDoc}
`;
export type CreateSurveyMutationFn = Apollo.MutationFunction<
  CreateSurveyMutation,
  CreateSurveyMutationVariables
>;

/**
 * __useCreateSurveyMutation__
 *
 * To run a mutation, you first call `useCreateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyMutation, { data, loading, error }] = useCreateSurveyMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSurveyMutation,
    CreateSurveyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSurveyMutation,
    CreateSurveyMutationVariables
  >(CreateSurveyDocument, options);
}
export type CreateSurveyMutationHookResult = ReturnType<
  typeof useCreateSurveyMutation
>;
export type CreateSurveyMutationResult =
  Apollo.MutationResult<CreateSurveyMutation>;
export type CreateSurveyMutationOptions = Apollo.BaseMutationOptions<
  CreateSurveyMutation,
  CreateSurveyMutationVariables
>;
export const CreateSurveyGatingDocument = gql`
  mutation CreateSurveyGating($request: CreateSurveyGatingRequest!) {
    createSurveyGating(request: $request) {
      ...SurveyGatingFields
      __typename
    }
  }
  ${SurveyGatingFieldsFragmentDoc}
`;
export type CreateSurveyGatingMutationFn = Apollo.MutationFunction<
  CreateSurveyGatingMutation,
  CreateSurveyGatingMutationVariables
>;

/**
 * __useCreateSurveyGatingMutation__
 *
 * To run a mutation, you first call `useCreateSurveyGatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyGatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyGatingMutation, { data, loading, error }] = useCreateSurveyGatingMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyGatingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSurveyGatingMutation,
    CreateSurveyGatingMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSurveyGatingMutation,
    CreateSurveyGatingMutationVariables
  >(CreateSurveyGatingDocument, options);
}
export type CreateSurveyGatingMutationHookResult = ReturnType<
  typeof useCreateSurveyGatingMutation
>;
export type CreateSurveyGatingMutationResult =
  Apollo.MutationResult<CreateSurveyGatingMutation>;
export type CreateSurveyGatingMutationOptions = Apollo.BaseMutationOptions<
  CreateSurveyGatingMutation,
  CreateSurveyGatingMutationVariables
>;
export const CreateSurveyReferralDocument = gql`
  mutation CreateSurveyReferral($request: CreateSurveyReferralRequest!) {
    createSurveyReferral(request: $request) {
      ...SurveyReferralFields
      __typename
    }
  }
  ${SurveyReferralFieldsFragmentDoc}
`;
export type CreateSurveyReferralMutationFn = Apollo.MutationFunction<
  CreateSurveyReferralMutation,
  CreateSurveyReferralMutationVariables
>;

/**
 * __useCreateSurveyReferralMutation__
 *
 * To run a mutation, you first call `useCreateSurveyReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyReferralMutation, { data, loading, error }] = useCreateSurveyReferralMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyReferralMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSurveyReferralMutation,
    CreateSurveyReferralMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSurveyReferralMutation,
    CreateSurveyReferralMutationVariables
  >(CreateSurveyReferralDocument, options);
}
export type CreateSurveyReferralMutationHookResult = ReturnType<
  typeof useCreateSurveyReferralMutation
>;
export type CreateSurveyReferralMutationResult =
  Apollo.MutationResult<CreateSurveyReferralMutation>;
export type CreateSurveyReferralMutationOptions = Apollo.BaseMutationOptions<
  CreateSurveyReferralMutation,
  CreateSurveyReferralMutationVariables
>;
export const CreateSurveyResultDocument = gql`
  mutation CreateSurveyResult($request: CreateSurveyResultRequest!) {
    createSurveyResult(request: $request) {
      ...SurveyResultFields
      __typename
    }
  }
  ${SurveyResultFieldsFragmentDoc}
`;
export type CreateSurveyResultMutationFn = Apollo.MutationFunction<
  CreateSurveyResultMutation,
  CreateSurveyResultMutationVariables
>;

/**
 * __useCreateSurveyResultMutation__
 *
 * To run a mutation, you first call `useCreateSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyResultMutation, { data, loading, error }] = useCreateSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyResultMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSurveyResultMutation,
    CreateSurveyResultMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSurveyResultMutation,
    CreateSurveyResultMutationVariables
  >(CreateSurveyResultDocument, options);
}
export type CreateSurveyResultMutationHookResult = ReturnType<
  typeof useCreateSurveyResultMutation
>;
export type CreateSurveyResultMutationResult =
  Apollo.MutationResult<CreateSurveyResultMutation>;
export type CreateSurveyResultMutationOptions = Apollo.BaseMutationOptions<
  CreateSurveyResultMutation,
  CreateSurveyResultMutationVariables
>;
export const CreateSurveyRewardDocument = gql`
  mutation CreateSurveyReward($request: CreateSurveyRewardRequest!) {
    createSurveyReward(request: $request) {
      ...SurveyRewardFields
      __typename
    }
  }
  ${SurveyRewardFieldsFragmentDoc}
`;
export type CreateSurveyRewardMutationFn = Apollo.MutationFunction<
  CreateSurveyRewardMutation,
  CreateSurveyRewardMutationVariables
>;

/**
 * __useCreateSurveyRewardMutation__
 *
 * To run a mutation, you first call `useCreateSurveyRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyRewardMutation, { data, loading, error }] = useCreateSurveyRewardMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyRewardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSurveyRewardMutation,
    CreateSurveyRewardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSurveyRewardMutation,
    CreateSurveyRewardMutationVariables
  >(CreateSurveyRewardDocument, options);
}
export type CreateSurveyRewardMutationHookResult = ReturnType<
  typeof useCreateSurveyRewardMutation
>;
export type CreateSurveyRewardMutationResult =
  Apollo.MutationResult<CreateSurveyRewardMutation>;
export type CreateSurveyRewardMutationOptions = Apollo.BaseMutationOptions<
  CreateSurveyRewardMutation,
  CreateSurveyRewardMutationVariables
>;
export const CreateTransactionCreditDocument = gql`
  mutation CreateTransactionCredit($request: TransactionCreditRequest!) {
    createTransactionCredit(request: $request) {
      ...TransactionCreditFields
      __typename
    }
  }
  ${TransactionCreditFieldsFragmentDoc}
`;
export type CreateTransactionCreditMutationFn = Apollo.MutationFunction<
  CreateTransactionCreditMutation,
  CreateTransactionCreditMutationVariables
>;

/**
 * __useCreateTransactionCreditMutation__
 *
 * To run a mutation, you first call `useCreateTransactionCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionCreditMutation, { data, loading, error }] = useCreateTransactionCreditMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateTransactionCreditMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTransactionCreditMutation,
    CreateTransactionCreditMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateTransactionCreditMutation,
    CreateTransactionCreditMutationVariables
  >(CreateTransactionCreditDocument, options);
}
export type CreateTransactionCreditMutationHookResult = ReturnType<
  typeof useCreateTransactionCreditMutation
>;
export type CreateTransactionCreditMutationResult =
  Apollo.MutationResult<CreateTransactionCreditMutation>;
export type CreateTransactionCreditMutationOptions = Apollo.BaseMutationOptions<
  CreateTransactionCreditMutation,
  CreateTransactionCreditMutationVariables
>;
export const CreateTransactionDebitDocument = gql`
  mutation CreateTransactionDebit($request: TransactionDebitRequest!) {
    createTransactionDebit(request: $request) {
      ...TransactionCreditFields
      __typename
    }
  }
  ${TransactionCreditFieldsFragmentDoc}
`;
export type CreateTransactionDebitMutationFn = Apollo.MutationFunction<
  CreateTransactionDebitMutation,
  CreateTransactionDebitMutationVariables
>;

/**
 * __useCreateTransactionDebitMutation__
 *
 * To run a mutation, you first call `useCreateTransactionDebitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionDebitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionDebitMutation, { data, loading, error }] = useCreateTransactionDebitMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateTransactionDebitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTransactionDebitMutation,
    CreateTransactionDebitMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateTransactionDebitMutation,
    CreateTransactionDebitMutationVariables
  >(CreateTransactionDebitDocument, options);
}
export type CreateTransactionDebitMutationHookResult = ReturnType<
  typeof useCreateTransactionDebitMutation
>;
export type CreateTransactionDebitMutationResult =
  Apollo.MutationResult<CreateTransactionDebitMutation>;
export type CreateTransactionDebitMutationOptions = Apollo.BaseMutationOptions<
  CreateTransactionDebitMutation,
  CreateTransactionDebitMutationVariables
>;
export const CreateUserBoostDocument = gql`
  mutation CreateUserBoost($request: CreateUserBoostRequest!) {
    createUserBoost(request: $request) {
      ...UserBoostFields
      __typename
    }
  }
  ${UserBoostFieldsFragmentDoc}
`;
export type CreateUserBoostMutationFn = Apollo.MutationFunction<
  CreateUserBoostMutation,
  CreateUserBoostMutationVariables
>;

/**
 * __useCreateUserBoostMutation__
 *
 * To run a mutation, you first call `useCreateUserBoostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserBoostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserBoostMutation, { data, loading, error }] = useCreateUserBoostMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserBoostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserBoostMutation,
    CreateUserBoostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserBoostMutation,
    CreateUserBoostMutationVariables
  >(CreateUserBoostDocument, options);
}
export type CreateUserBoostMutationHookResult = ReturnType<
  typeof useCreateUserBoostMutation
>;
export type CreateUserBoostMutationResult =
  Apollo.MutationResult<CreateUserBoostMutation>;
export type CreateUserBoostMutationOptions = Apollo.BaseMutationOptions<
  CreateUserBoostMutation,
  CreateUserBoostMutationVariables
>;
export const CreateUserContractDocument = gql`
  mutation CreateUserContract($request: CreateUserContractRequest!) {
    createUserContract(request: $request) {
      ...UserContractFields
      __typename
    }
  }
  ${UserContractFieldsFragmentDoc}
`;
export type CreateUserContractMutationFn = Apollo.MutationFunction<
  CreateUserContractMutation,
  CreateUserContractMutationVariables
>;

/**
 * __useCreateUserContractMutation__
 *
 * To run a mutation, you first call `useCreateUserContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserContractMutation, { data, loading, error }] = useCreateUserContractMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserContractMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserContractMutation,
    CreateUserContractMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserContractMutation,
    CreateUserContractMutationVariables
  >(CreateUserContractDocument, options);
}
export type CreateUserContractMutationHookResult = ReturnType<
  typeof useCreateUserContractMutation
>;
export type CreateUserContractMutationResult =
  Apollo.MutationResult<CreateUserContractMutation>;
export type CreateUserContractMutationOptions = Apollo.BaseMutationOptions<
  CreateUserContractMutation,
  CreateUserContractMutationVariables
>;
export const CreateUserMembershipDocument = gql`
  mutation CreateUserMembership($request: CreateUserMembershipRequest!) {
    createUserMembership(request: $request) {
      ...UserMembershipFields
      __typename
    }
  }
  ${UserMembershipFieldsFragmentDoc}
`;
export type CreateUserMembershipMutationFn = Apollo.MutationFunction<
  CreateUserMembershipMutation,
  CreateUserMembershipMutationVariables
>;

/**
 * __useCreateUserMembershipMutation__
 *
 * To run a mutation, you first call `useCreateUserMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMembershipMutation, { data, loading, error }] = useCreateUserMembershipMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserMembershipMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMembershipMutation,
    CreateUserMembershipMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserMembershipMutation,
    CreateUserMembershipMutationVariables
  >(CreateUserMembershipDocument, options);
}
export type CreateUserMembershipMutationHookResult = ReturnType<
  typeof useCreateUserMembershipMutation
>;
export type CreateUserMembershipMutationResult =
  Apollo.MutationResult<CreateUserMembershipMutation>;
export type CreateUserMembershipMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMembershipMutation,
  CreateUserMembershipMutationVariables
>;
export const CreateUserRefferalDocument = gql`
  mutation CreateUserRefferal($request: CreateUserRefferalRequest!) {
    createUserRefferal(request: $request) {
      ...UserRefferalFields
      __typename
    }
  }
  ${UserRefferalFieldsFragmentDoc}
`;
export type CreateUserRefferalMutationFn = Apollo.MutationFunction<
  CreateUserRefferalMutation,
  CreateUserRefferalMutationVariables
>;

/**
 * __useCreateUserRefferalMutation__
 *
 * To run a mutation, you first call `useCreateUserRefferalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserRefferalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserRefferalMutation, { data, loading, error }] = useCreateUserRefferalMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserRefferalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserRefferalMutation,
    CreateUserRefferalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserRefferalMutation,
    CreateUserRefferalMutationVariables
  >(CreateUserRefferalDocument, options);
}
export type CreateUserRefferalMutationHookResult = ReturnType<
  typeof useCreateUserRefferalMutation
>;
export type CreateUserRefferalMutationResult =
  Apollo.MutationResult<CreateUserRefferalMutation>;
export type CreateUserRefferalMutationOptions = Apollo.BaseMutationOptions<
  CreateUserRefferalMutation,
  CreateUserRefferalMutationVariables
>;
export const CreateWalletDocument = gql`
  mutation CreateWallet($request: CreateWalletRequest!) {
    createWallet(request: $request) {
      ...WalletFields
      __typename
    }
  }
  ${WalletFieldsFragmentDoc}
`;
export type CreateWalletMutationFn = Apollo.MutationFunction<
  CreateWalletMutation,
  CreateWalletMutationVariables
>;

/**
 * __useCreateWalletMutation__
 *
 * To run a mutation, you first call `useCreateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletMutation, { data, loading, error }] = useCreateWalletMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateWalletMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateWalletMutation,
    CreateWalletMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateWalletMutation,
    CreateWalletMutationVariables
  >(CreateWalletDocument, options);
}
export type CreateWalletMutationHookResult = ReturnType<
  typeof useCreateWalletMutation
>;
export type CreateWalletMutationResult =
  Apollo.MutationResult<CreateWalletMutation>;
export type CreateWalletMutationOptions = Apollo.BaseMutationOptions<
  CreateWalletMutation,
  CreateWalletMutationVariables
>;
export const DeleteFillingQueueDocument = gql`
  mutation DeleteFillingQueue($request: DeleteFillingQueueRequest!) {
    deleteFillingQueue(request: $request)
  }
`;
export type DeleteFillingQueueMutationFn = Apollo.MutationFunction<
  DeleteFillingQueueMutation,
  DeleteFillingQueueMutationVariables
>;

/**
 * __useDeleteFillingQueueMutation__
 *
 * To run a mutation, you first call `useDeleteFillingQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFillingQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFillingQueueMutation, { data, loading, error }] = useDeleteFillingQueueMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteFillingQueueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteFillingQueueMutation,
    DeleteFillingQueueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteFillingQueueMutation,
    DeleteFillingQueueMutationVariables
  >(DeleteFillingQueueDocument, options);
}
export type DeleteFillingQueueMutationHookResult = ReturnType<
  typeof useDeleteFillingQueueMutation
>;
export type DeleteFillingQueueMutationResult =
  Apollo.MutationResult<DeleteFillingQueueMutation>;
export type DeleteFillingQueueMutationOptions = Apollo.BaseMutationOptions<
  DeleteFillingQueueMutation,
  DeleteFillingQueueMutationVariables
>;
export const DeleteProductDocument = gql`
  mutation DeleteProduct($request: DeleteProductRequest!) {
    deleteProduct(request: $request)
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >(DeleteProductDocument, options);
}
export type DeleteProductMutationHookResult = ReturnType<
  typeof useDeleteProductMutation
>;
export type DeleteProductMutationResult =
  Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const DeleteSurveyDocument = gql`
  mutation DeleteSurvey($request: SurveyDeleteRequest!) {
    deleteSurvey(request: $request)
  }
`;
export type DeleteSurveyMutationFn = Apollo.MutationFunction<
  DeleteSurveyMutation,
  DeleteSurveyMutationVariables
>;

/**
 * __useDeleteSurveyMutation__
 *
 * To run a mutation, you first call `useDeleteSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSurveyMutation, { data, loading, error }] = useDeleteSurveyMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteSurveyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteSurveyMutation,
    DeleteSurveyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteSurveyMutation,
    DeleteSurveyMutationVariables
  >(DeleteSurveyDocument, options);
}
export type DeleteSurveyMutationHookResult = ReturnType<
  typeof useDeleteSurveyMutation
>;
export type DeleteSurveyMutationResult =
  Apollo.MutationResult<DeleteSurveyMutation>;
export type DeleteSurveyMutationOptions = Apollo.BaseMutationOptions<
  DeleteSurveyMutation,
  DeleteSurveyMutationVariables
>;
export const DeleteSurveyResultDocument = gql`
  mutation DeleteSurveyResult($request: DeleteSurveyResultRequest!) {
    deleteSurveyResult(request: $request)
  }
`;
export type DeleteSurveyResultMutationFn = Apollo.MutationFunction<
  DeleteSurveyResultMutation,
  DeleteSurveyResultMutationVariables
>;

/**
 * __useDeleteSurveyResultMutation__
 *
 * To run a mutation, you first call `useDeleteSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSurveyResultMutation, { data, loading, error }] = useDeleteSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteSurveyResultMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteSurveyResultMutation,
    DeleteSurveyResultMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteSurveyResultMutation,
    DeleteSurveyResultMutationVariables
  >(DeleteSurveyResultDocument, options);
}
export type DeleteSurveyResultMutationHookResult = ReturnType<
  typeof useDeleteSurveyResultMutation
>;
export type DeleteSurveyResultMutationResult =
  Apollo.MutationResult<DeleteSurveyResultMutation>;
export type DeleteSurveyResultMutationOptions = Apollo.BaseMutationOptions<
  DeleteSurveyResultMutation,
  DeleteSurveyResultMutationVariables
>;
export const DeleteTransactionCreditDocument = gql`
  mutation DeleteTransactionCredit($request: DeleteTransactionCreditRequest!) {
    deleteTransactionCredit(request: $request)
  }
`;
export type DeleteTransactionCreditMutationFn = Apollo.MutationFunction<
  DeleteTransactionCreditMutation,
  DeleteTransactionCreditMutationVariables
>;

/**
 * __useDeleteTransactionCreditMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionCreditMutation, { data, loading, error }] = useDeleteTransactionCreditMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteTransactionCreditMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTransactionCreditMutation,
    DeleteTransactionCreditMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteTransactionCreditMutation,
    DeleteTransactionCreditMutationVariables
  >(DeleteTransactionCreditDocument, options);
}
export type DeleteTransactionCreditMutationHookResult = ReturnType<
  typeof useDeleteTransactionCreditMutation
>;
export type DeleteTransactionCreditMutationResult =
  Apollo.MutationResult<DeleteTransactionCreditMutation>;
export type DeleteTransactionCreditMutationOptions = Apollo.BaseMutationOptions<
  DeleteTransactionCreditMutation,
  DeleteTransactionCreditMutationVariables
>;
export const DeleteWalletDocument = gql`
  mutation DeleteWallet($request: DeleteWalletRequest!) {
    deleteWallet(request: $request)
  }
`;
export type DeleteWalletMutationFn = Apollo.MutationFunction<
  DeleteWalletMutation,
  DeleteWalletMutationVariables
>;

/**
 * __useDeleteWalletMutation__
 *
 * To run a mutation, you first call `useDeleteWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWalletMutation, { data, loading, error }] = useDeleteWalletMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteWalletMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteWalletMutation,
    DeleteWalletMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteWalletMutation,
    DeleteWalletMutationVariables
  >(DeleteWalletDocument, options);
}
export type DeleteWalletMutationHookResult = ReturnType<
  typeof useDeleteWalletMutation
>;
export type DeleteWalletMutationResult =
  Apollo.MutationResult<DeleteWalletMutation>;
export type DeleteWalletMutationOptions = Apollo.BaseMutationOptions<
  DeleteWalletMutation,
  DeleteWalletMutationVariables
>;
export const InviteUserDocument = gql`
  mutation InviteUser($request: InviteUserRequest!) {
    inviteUser(request: $request) {
      ...UserFields
      __typename
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type InviteUserMutationFn = Apollo.MutationFunction<
  InviteUserMutation,
  InviteUserMutationVariables
>;

/**
 * __useInviteUserMutation__
 *
 * To run a mutation, you first call `useInviteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteUserMutation, { data, loading, error }] = useInviteUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useInviteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InviteUserMutation,
    InviteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InviteUserMutation, InviteUserMutationVariables>(
    InviteUserDocument,
    options
  );
}
export type InviteUserMutationHookResult = ReturnType<
  typeof useInviteUserMutation
>;
export type InviteUserMutationResult =
  Apollo.MutationResult<InviteUserMutation>;
export type InviteUserMutationOptions = Apollo.BaseMutationOptions<
  InviteUserMutation,
  InviteUserMutationVariables
>;
export const RefreshDocument = gql`
  mutation Refresh($request: RefreshRequest!) {
    refresh(request: $request) {
      accessToken
      refreshToken
    }
  }
`;
export type RefreshMutationFn = Apollo.MutationFunction<
  RefreshMutation,
  RefreshMutationVariables
>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRefreshMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshMutation,
    RefreshMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RefreshMutation, RefreshMutationVariables>(
    RefreshDocument,
    options
  );
}
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = Apollo.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = Apollo.BaseMutationOptions<
  RefreshMutation,
  RefreshMutationVariables
>;
export const RefundMarketplaceOrderDocument = gql`
  mutation RefundMarketplaceOrder($request: RefundMarketplaceOrderRequest!) {
    refundMarketplaceOrder(request: $request) {
      ...MarketplaceOrderFields
      __typename
    }
  }
  ${MarketplaceOrderFieldsFragmentDoc}
`;
export type RefundMarketplaceOrderMutationFn = Apollo.MutationFunction<
  RefundMarketplaceOrderMutation,
  RefundMarketplaceOrderMutationVariables
>;

/**
 * __useRefundMarketplaceOrderMutation__
 *
 * To run a mutation, you first call `useRefundMarketplaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefundMarketplaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refundMarketplaceOrderMutation, { data, loading, error }] = useRefundMarketplaceOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRefundMarketplaceOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefundMarketplaceOrderMutation,
    RefundMarketplaceOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RefundMarketplaceOrderMutation,
    RefundMarketplaceOrderMutationVariables
  >(RefundMarketplaceOrderDocument, options);
}
export type RefundMarketplaceOrderMutationHookResult = ReturnType<
  typeof useRefundMarketplaceOrderMutation
>;
export type RefundMarketplaceOrderMutationResult =
  Apollo.MutationResult<RefundMarketplaceOrderMutation>;
export type RefundMarketplaceOrderMutationOptions = Apollo.BaseMutationOptions<
  RefundMarketplaceOrderMutation,
  RefundMarketplaceOrderMutationVariables
>;
export const RegistryUserPrizeDocument = gql`
  mutation RegistryUserPrize($request: RegistryUserPrizeRequest!) {
    registryUserPrize(request: $request) {
      ...UserPrizeFields
      __typename
    }
  }
  ${UserPrizeFieldsFragmentDoc}
`;
export type RegistryUserPrizeMutationFn = Apollo.MutationFunction<
  RegistryUserPrizeMutation,
  RegistryUserPrizeMutationVariables
>;

/**
 * __useRegistryUserPrizeMutation__
 *
 * To run a mutation, you first call `useRegistryUserPrizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistryUserPrizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registryUserPrizeMutation, { data, loading, error }] = useRegistryUserPrizeMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRegistryUserPrizeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegistryUserPrizeMutation,
    RegistryUserPrizeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegistryUserPrizeMutation,
    RegistryUserPrizeMutationVariables
  >(RegistryUserPrizeDocument, options);
}
export type RegistryUserPrizeMutationHookResult = ReturnType<
  typeof useRegistryUserPrizeMutation
>;
export type RegistryUserPrizeMutationResult =
  Apollo.MutationResult<RegistryUserPrizeMutation>;
export type RegistryUserPrizeMutationOptions = Apollo.BaseMutationOptions<
  RegistryUserPrizeMutation,
  RegistryUserPrizeMutationVariables
>;
export const ScoreSurveyResultDocument = gql`
  mutation ScoreSurveyResult($request: ScoreSurveyResultRequest!) {
    scoreSurveyResult(request: $request) {
      ...SurveyResultFields
      __typename
    }
  }
  ${SurveyResultFieldsFragmentDoc}
`;
export type ScoreSurveyResultMutationFn = Apollo.MutationFunction<
  ScoreSurveyResultMutation,
  ScoreSurveyResultMutationVariables
>;

/**
 * __useScoreSurveyResultMutation__
 *
 * To run a mutation, you first call `useScoreSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScoreSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scoreSurveyResultMutation, { data, loading, error }] = useScoreSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useScoreSurveyResultMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ScoreSurveyResultMutation,
    ScoreSurveyResultMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ScoreSurveyResultMutation,
    ScoreSurveyResultMutationVariables
  >(ScoreSurveyResultDocument, options);
}
export type ScoreSurveyResultMutationHookResult = ReturnType<
  typeof useScoreSurveyResultMutation
>;
export type ScoreSurveyResultMutationResult =
  Apollo.MutationResult<ScoreSurveyResultMutation>;
export type ScoreSurveyResultMutationOptions = Apollo.BaseMutationOptions<
  ScoreSurveyResultMutation,
  ScoreSurveyResultMutationVariables
>;
export const SyncMediaProductsDocument = gql`
  mutation SyncMediaProducts($request: SyncMediaProductsRequest!) {
    syncMediaProducts(request: $request)
  }
`;
export type SyncMediaProductsMutationFn = Apollo.MutationFunction<
  SyncMediaProductsMutation,
  SyncMediaProductsMutationVariables
>;

/**
 * __useSyncMediaProductsMutation__
 *
 * To run a mutation, you first call `useSyncMediaProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncMediaProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncMediaProductsMutation, { data, loading, error }] = useSyncMediaProductsMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSyncMediaProductsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SyncMediaProductsMutation,
    SyncMediaProductsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SyncMediaProductsMutation,
    SyncMediaProductsMutationVariables
  >(SyncMediaProductsDocument, options);
}
export type SyncMediaProductsMutationHookResult = ReturnType<
  typeof useSyncMediaProductsMutation
>;
export type SyncMediaProductsMutationResult =
  Apollo.MutationResult<SyncMediaProductsMutation>;
export type SyncMediaProductsMutationOptions = Apollo.BaseMutationOptions<
  SyncMediaProductsMutation,
  SyncMediaProductsMutationVariables
>;
export const SyncNftGalleryDocument = gql`
  mutation SyncNftGallery($request: SyncNftGalleryRequest!) {
    syncNftGallery(request: $request)
  }
`;
export type SyncNftGalleryMutationFn = Apollo.MutationFunction<
  SyncNftGalleryMutation,
  SyncNftGalleryMutationVariables
>;

/**
 * __useSyncNftGalleryMutation__
 *
 * To run a mutation, you first call `useSyncNftGalleryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncNftGalleryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncNftGalleryMutation, { data, loading, error }] = useSyncNftGalleryMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSyncNftGalleryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SyncNftGalleryMutation,
    SyncNftGalleryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SyncNftGalleryMutation,
    SyncNftGalleryMutationVariables
  >(SyncNftGalleryDocument, options);
}
export type SyncNftGalleryMutationHookResult = ReturnType<
  typeof useSyncNftGalleryMutation
>;
export type SyncNftGalleryMutationResult =
  Apollo.MutationResult<SyncNftGalleryMutation>;
export type SyncNftGalleryMutationOptions = Apollo.BaseMutationOptions<
  SyncNftGalleryMutation,
  SyncNftGalleryMutationVariables
>;
export const SyncPageviewSourcesDocument = gql`
  mutation SyncPageviewSources($request: SyncPageviewSourcesRequest!) {
    syncPageviewSources(request: $request)
  }
`;
export type SyncPageviewSourcesMutationFn = Apollo.MutationFunction<
  SyncPageviewSourcesMutation,
  SyncPageviewSourcesMutationVariables
>;

/**
 * __useSyncPageviewSourcesMutation__
 *
 * To run a mutation, you first call `useSyncPageviewSourcesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncPageviewSourcesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncPageviewSourcesMutation, { data, loading, error }] = useSyncPageviewSourcesMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSyncPageviewSourcesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SyncPageviewSourcesMutation,
    SyncPageviewSourcesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SyncPageviewSourcesMutation,
    SyncPageviewSourcesMutationVariables
  >(SyncPageviewSourcesDocument, options);
}
export type SyncPageviewSourcesMutationHookResult = ReturnType<
  typeof useSyncPageviewSourcesMutation
>;
export type SyncPageviewSourcesMutationResult =
  Apollo.MutationResult<SyncPageviewSourcesMutation>;
export type SyncPageviewSourcesMutationOptions = Apollo.BaseMutationOptions<
  SyncPageviewSourcesMutation,
  SyncPageviewSourcesMutationVariables
>;
export const UpdateAnonymousUserDocument = gql`
  mutation UpdateAnonymousUser($request: UpdateAnonymousUserRequest!) {
    updateAnonymousUser(request: $request) {
      ...AnonymousUserFields
      __typename
    }
  }
  ${AnonymousUserFieldsFragmentDoc}
`;
export type UpdateAnonymousUserMutationFn = Apollo.MutationFunction<
  UpdateAnonymousUserMutation,
  UpdateAnonymousUserMutationVariables
>;

/**
 * __useUpdateAnonymousUserMutation__
 *
 * To run a mutation, you first call `useUpdateAnonymousUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnonymousUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnonymousUserMutation, { data, loading, error }] = useUpdateAnonymousUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateAnonymousUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAnonymousUserMutation,
    UpdateAnonymousUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAnonymousUserMutation,
    UpdateAnonymousUserMutationVariables
  >(UpdateAnonymousUserDocument, options);
}
export type UpdateAnonymousUserMutationHookResult = ReturnType<
  typeof useUpdateAnonymousUserMutation
>;
export type UpdateAnonymousUserMutationResult =
  Apollo.MutationResult<UpdateAnonymousUserMutation>;
export type UpdateAnonymousUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateAnonymousUserMutation,
  UpdateAnonymousUserMutationVariables
>;
export const UpdateEmbedSurveyResultDocument = gql`
  mutation UpdateEmbedSurveyResult($request: UpdateEmbedSurveyResultRequest!) {
    updateEmbedSurveyResult(request: $request) {
      ...EmbedSurveyResultFields
      __typename
    }
  }
  ${EmbedSurveyResultFieldsFragmentDoc}
`;
export type UpdateEmbedSurveyResultMutationFn = Apollo.MutationFunction<
  UpdateEmbedSurveyResultMutation,
  UpdateEmbedSurveyResultMutationVariables
>;

/**
 * __useUpdateEmbedSurveyResultMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedSurveyResultMutation, { data, loading, error }] = useUpdateEmbedSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateEmbedSurveyResultMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateEmbedSurveyResultMutation,
    UpdateEmbedSurveyResultMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateEmbedSurveyResultMutation,
    UpdateEmbedSurveyResultMutationVariables
  >(UpdateEmbedSurveyResultDocument, options);
}
export type UpdateEmbedSurveyResultMutationHookResult = ReturnType<
  typeof useUpdateEmbedSurveyResultMutation
>;
export type UpdateEmbedSurveyResultMutationResult =
  Apollo.MutationResult<UpdateEmbedSurveyResultMutation>;
export type UpdateEmbedSurveyResultMutationOptions = Apollo.BaseMutationOptions<
  UpdateEmbedSurveyResultMutation,
  UpdateEmbedSurveyResultMutationVariables
>;
export const UpdateFillingQueueDocument = gql`
  mutation UpdateFillingQueue($request: UpdateFillingQueueRequest!) {
    updateFillingQueue(request: $request) {
      ...FillingQueueFields
      __typename
    }
  }
  ${FillingQueueFieldsFragmentDoc}
`;
export type UpdateFillingQueueMutationFn = Apollo.MutationFunction<
  UpdateFillingQueueMutation,
  UpdateFillingQueueMutationVariables
>;

/**
 * __useUpdateFillingQueueMutation__
 *
 * To run a mutation, you first call `useUpdateFillingQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFillingQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFillingQueueMutation, { data, loading, error }] = useUpdateFillingQueueMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateFillingQueueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateFillingQueueMutation,
    UpdateFillingQueueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateFillingQueueMutation,
    UpdateFillingQueueMutationVariables
  >(UpdateFillingQueueDocument, options);
}
export type UpdateFillingQueueMutationHookResult = ReturnType<
  typeof useUpdateFillingQueueMutation
>;
export type UpdateFillingQueueMutationResult =
  Apollo.MutationResult<UpdateFillingQueueMutation>;
export type UpdateFillingQueueMutationOptions = Apollo.BaseMutationOptions<
  UpdateFillingQueueMutation,
  UpdateFillingQueueMutationVariables
>;
export const UpdateMarketplaceOrderDocument = gql`
  mutation UpdateMarketplaceOrder($request: UpdateMarketplaceOrderRequest!) {
    updateMarketplaceOrder(request: $request) {
      ...MarketplaceOrderFields
      __typename
    }
  }
  ${MarketplaceOrderFieldsFragmentDoc}
`;
export type UpdateMarketplaceOrderMutationFn = Apollo.MutationFunction<
  UpdateMarketplaceOrderMutation,
  UpdateMarketplaceOrderMutationVariables
>;

/**
 * __useUpdateMarketplaceOrderMutation__
 *
 * To run a mutation, you first call `useUpdateMarketplaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMarketplaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMarketplaceOrderMutation, { data, loading, error }] = useUpdateMarketplaceOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateMarketplaceOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMarketplaceOrderMutation,
    UpdateMarketplaceOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMarketplaceOrderMutation,
    UpdateMarketplaceOrderMutationVariables
  >(UpdateMarketplaceOrderDocument, options);
}
export type UpdateMarketplaceOrderMutationHookResult = ReturnType<
  typeof useUpdateMarketplaceOrderMutation
>;
export type UpdateMarketplaceOrderMutationResult =
  Apollo.MutationResult<UpdateMarketplaceOrderMutation>;
export type UpdateMarketplaceOrderMutationOptions = Apollo.BaseMutationOptions<
  UpdateMarketplaceOrderMutation,
  UpdateMarketplaceOrderMutationVariables
>;
export const UpdateProductDocument = gql`
  mutation UpdateProduct($request: UpdateProductRequest!) {
    updateProduct(request: $request) {
      ...ProductFields
      __typename
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<
  typeof useUpdateProductMutation
>;
export type UpdateProductMutationResult =
  Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export const UpdateProfileDocument = gql`
  mutation UpdateProfile($request: UpdateProfileRequest!) {
    updateProfile(request: $request) {
      ...UserFields
      __typename
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >(UpdateProfileDocument, options);
}
export type UpdateProfileMutationHookResult = ReturnType<
  typeof useUpdateProfileMutation
>;
export type UpdateProfileMutationResult =
  Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;
export const UpdateSurveyDocument = gql`
  mutation UpdateSurvey($request: SurveyUpdateInfoRequest!) {
    updateSurvey(request: $request) {
      ...SurveyFields
      __typename
    }
  }
  ${SurveyFieldsFragmentDoc}
`;
export type UpdateSurveyMutationFn = Apollo.MutationFunction<
  UpdateSurveyMutation,
  UpdateSurveyMutationVariables
>;

/**
 * __useUpdateSurveyMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyMutation, { data, loading, error }] = useUpdateSurveyMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSurveyMutation,
    UpdateSurveyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSurveyMutation,
    UpdateSurveyMutationVariables
  >(UpdateSurveyDocument, options);
}
export type UpdateSurveyMutationHookResult = ReturnType<
  typeof useUpdateSurveyMutation
>;
export type UpdateSurveyMutationResult =
  Apollo.MutationResult<UpdateSurveyMutation>;
export type UpdateSurveyMutationOptions = Apollo.BaseMutationOptions<
  UpdateSurveyMutation,
  UpdateSurveyMutationVariables
>;
export const UpdateSurveyGatingDocument = gql`
  mutation UpdateSurveyGating($request: UpdateSurveyGatingRequest!) {
    updateSurveyGating(request: $request) {
      ...SurveyGatingFields
      __typename
    }
  }
  ${SurveyGatingFieldsFragmentDoc}
`;
export type UpdateSurveyGatingMutationFn = Apollo.MutationFunction<
  UpdateSurveyGatingMutation,
  UpdateSurveyGatingMutationVariables
>;

/**
 * __useUpdateSurveyGatingMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyGatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyGatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyGatingMutation, { data, loading, error }] = useUpdateSurveyGatingMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyGatingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSurveyGatingMutation,
    UpdateSurveyGatingMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSurveyGatingMutation,
    UpdateSurveyGatingMutationVariables
  >(UpdateSurveyGatingDocument, options);
}
export type UpdateSurveyGatingMutationHookResult = ReturnType<
  typeof useUpdateSurveyGatingMutation
>;
export type UpdateSurveyGatingMutationResult =
  Apollo.MutationResult<UpdateSurveyGatingMutation>;
export type UpdateSurveyGatingMutationOptions = Apollo.BaseMutationOptions<
  UpdateSurveyGatingMutation,
  UpdateSurveyGatingMutationVariables
>;
export const UpdateSurveyReferralDocument = gql`
  mutation UpdateSurveyReferral($request: UpdateSurveyReferralRequest!) {
    updateSurveyReferral(request: $request) {
      ...SurveyReferralFields
      __typename
    }
  }
  ${SurveyReferralFieldsFragmentDoc}
`;
export type UpdateSurveyReferralMutationFn = Apollo.MutationFunction<
  UpdateSurveyReferralMutation,
  UpdateSurveyReferralMutationVariables
>;

/**
 * __useUpdateSurveyReferralMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyReferralMutation, { data, loading, error }] = useUpdateSurveyReferralMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyReferralMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSurveyReferralMutation,
    UpdateSurveyReferralMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSurveyReferralMutation,
    UpdateSurveyReferralMutationVariables
  >(UpdateSurveyReferralDocument, options);
}
export type UpdateSurveyReferralMutationHookResult = ReturnType<
  typeof useUpdateSurveyReferralMutation
>;
export type UpdateSurveyReferralMutationResult =
  Apollo.MutationResult<UpdateSurveyReferralMutation>;
export type UpdateSurveyReferralMutationOptions = Apollo.BaseMutationOptions<
  UpdateSurveyReferralMutation,
  UpdateSurveyReferralMutationVariables
>;
export const UpdateSurveyResultDocument = gql`
  mutation UpdateSurveyResult($request: UpdateSurveyResultRequest!) {
    updateSurveyResult(request: $request) {
      ...SurveyResultFields
      __typename
    }
  }
  ${SurveyResultFieldsFragmentDoc}
`;
export type UpdateSurveyResultMutationFn = Apollo.MutationFunction<
  UpdateSurveyResultMutation,
  UpdateSurveyResultMutationVariables
>;

/**
 * __useUpdateSurveyResultMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyResultMutation, { data, loading, error }] = useUpdateSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyResultMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSurveyResultMutation,
    UpdateSurveyResultMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSurveyResultMutation,
    UpdateSurveyResultMutationVariables
  >(UpdateSurveyResultDocument, options);
}
export type UpdateSurveyResultMutationHookResult = ReturnType<
  typeof useUpdateSurveyResultMutation
>;
export type UpdateSurveyResultMutationResult =
  Apollo.MutationResult<UpdateSurveyResultMutation>;
export type UpdateSurveyResultMutationOptions = Apollo.BaseMutationOptions<
  UpdateSurveyResultMutation,
  UpdateSurveyResultMutationVariables
>;
export const UpdateSurveyRewardDocument = gql`
  mutation UpdateSurveyReward($request: UpdateSurveyRewardRequest!) {
    updateSurveyReward(request: $request) {
      ...SurveyRewardFields
      __typename
    }
  }
  ${SurveyRewardFieldsFragmentDoc}
`;
export type UpdateSurveyRewardMutationFn = Apollo.MutationFunction<
  UpdateSurveyRewardMutation,
  UpdateSurveyRewardMutationVariables
>;

/**
 * __useUpdateSurveyRewardMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyRewardMutation, { data, loading, error }] = useUpdateSurveyRewardMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyRewardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSurveyRewardMutation,
    UpdateSurveyRewardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSurveyRewardMutation,
    UpdateSurveyRewardMutationVariables
  >(UpdateSurveyRewardDocument, options);
}
export type UpdateSurveyRewardMutationHookResult = ReturnType<
  typeof useUpdateSurveyRewardMutation
>;
export type UpdateSurveyRewardMutationResult =
  Apollo.MutationResult<UpdateSurveyRewardMutation>;
export type UpdateSurveyRewardMutationOptions = Apollo.BaseMutationOptions<
  UpdateSurveyRewardMutation,
  UpdateSurveyRewardMutationVariables
>;
export const UpdateTransactionCreditDocument = gql`
  mutation UpdateTransactionCredit($request: UpdateTransactionCreditRequest!) {
    updateTransactionCredit(request: $request) {
      ...TransactionCreditFields
      __typename
    }
  }
  ${TransactionCreditFieldsFragmentDoc}
`;
export type UpdateTransactionCreditMutationFn = Apollo.MutationFunction<
  UpdateTransactionCreditMutation,
  UpdateTransactionCreditMutationVariables
>;

/**
 * __useUpdateTransactionCreditMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionCreditMutation, { data, loading, error }] = useUpdateTransactionCreditMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateTransactionCreditMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTransactionCreditMutation,
    UpdateTransactionCreditMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateTransactionCreditMutation,
    UpdateTransactionCreditMutationVariables
  >(UpdateTransactionCreditDocument, options);
}
export type UpdateTransactionCreditMutationHookResult = ReturnType<
  typeof useUpdateTransactionCreditMutation
>;
export type UpdateTransactionCreditMutationResult =
  Apollo.MutationResult<UpdateTransactionCreditMutation>;
export type UpdateTransactionCreditMutationOptions = Apollo.BaseMutationOptions<
  UpdateTransactionCreditMutation,
  UpdateTransactionCreditMutationVariables
>;
export const UpdateUserBoostDocument = gql`
  mutation UpdateUserBoost($request: UpdateUserBoostRequest!) {
    updateUserBoost(request: $request) {
      ...UserBoostFields
      __typename
    }
  }
  ${UserBoostFieldsFragmentDoc}
`;
export type UpdateUserBoostMutationFn = Apollo.MutationFunction<
  UpdateUserBoostMutation,
  UpdateUserBoostMutationVariables
>;

/**
 * __useUpdateUserBoostMutation__
 *
 * To run a mutation, you first call `useUpdateUserBoostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBoostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBoostMutation, { data, loading, error }] = useUpdateUserBoostMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateUserBoostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserBoostMutation,
    UpdateUserBoostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserBoostMutation,
    UpdateUserBoostMutationVariables
  >(UpdateUserBoostDocument, options);
}
export type UpdateUserBoostMutationHookResult = ReturnType<
  typeof useUpdateUserBoostMutation
>;
export type UpdateUserBoostMutationResult =
  Apollo.MutationResult<UpdateUserBoostMutation>;
export type UpdateUserBoostMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserBoostMutation,
  UpdateUserBoostMutationVariables
>;
export const UpdateUserMembershipDocument = gql`
  mutation UpdateUserMembership($request: UpdateUserMembershipRequest!) {
    updateUserMembership(request: $request) {
      ...UserMembershipFields
      __typename
    }
  }
  ${UserMembershipFieldsFragmentDoc}
`;
export type UpdateUserMembershipMutationFn = Apollo.MutationFunction<
  UpdateUserMembershipMutation,
  UpdateUserMembershipMutationVariables
>;

/**
 * __useUpdateUserMembershipMutation__
 *
 * To run a mutation, you first call `useUpdateUserMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMembershipMutation, { data, loading, error }] = useUpdateUserMembershipMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateUserMembershipMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMembershipMutation,
    UpdateUserMembershipMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserMembershipMutation,
    UpdateUserMembershipMutationVariables
  >(UpdateUserMembershipDocument, options);
}
export type UpdateUserMembershipMutationHookResult = ReturnType<
  typeof useUpdateUserMembershipMutation
>;
export type UpdateUserMembershipMutationResult =
  Apollo.MutationResult<UpdateUserMembershipMutation>;
export type UpdateUserMembershipMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMembershipMutation,
  UpdateUserMembershipMutationVariables
>;
export const UpdateUserRefferalDocument = gql`
  mutation UpdateUserRefferal($request: UpdateUserRefferalRequest!) {
    updateUserRefferal(request: $request) {
      ...UserRefferalFields
      __typename
    }
  }
  ${UserRefferalFieldsFragmentDoc}
`;
export type UpdateUserRefferalMutationFn = Apollo.MutationFunction<
  UpdateUserRefferalMutation,
  UpdateUserRefferalMutationVariables
>;

/**
 * __useUpdateUserRefferalMutation__
 *
 * To run a mutation, you first call `useUpdateUserRefferalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRefferalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRefferalMutation, { data, loading, error }] = useUpdateUserRefferalMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateUserRefferalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserRefferalMutation,
    UpdateUserRefferalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserRefferalMutation,
    UpdateUserRefferalMutationVariables
  >(UpdateUserRefferalDocument, options);
}
export type UpdateUserRefferalMutationHookResult = ReturnType<
  typeof useUpdateUserRefferalMutation
>;
export type UpdateUserRefferalMutationResult =
  Apollo.MutationResult<UpdateUserRefferalMutation>;
export type UpdateUserRefferalMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserRefferalMutation,
  UpdateUserRefferalMutationVariables
>;
export const UpdateWalletDocument = gql`
  mutation UpdateWallet($request: UpdateWalletRequest!) {
    updateWallet(request: $request) {
      ...WalletFields
      __typename
    }
  }
  ${WalletFieldsFragmentDoc}
`;
export type UpdateWalletMutationFn = Apollo.MutationFunction<
  UpdateWalletMutation,
  UpdateWalletMutationVariables
>;

/**
 * __useUpdateWalletMutation__
 *
 * To run a mutation, you first call `useUpdateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWalletMutation, { data, loading, error }] = useUpdateWalletMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateWalletMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateWalletMutation,
    UpdateWalletMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateWalletMutation,
    UpdateWalletMutationVariables
  >(UpdateWalletDocument, options);
}
export type UpdateWalletMutationHookResult = ReturnType<
  typeof useUpdateWalletMutation
>;
export type UpdateWalletMutationResult =
  Apollo.MutationResult<UpdateWalletMutation>;
export type UpdateWalletMutationOptions = Apollo.BaseMutationOptions<
  UpdateWalletMutation,
  UpdateWalletMutationVariables
>;
export const VerifyUserDocument = gql`
  mutation VerifyUser($request: VerifyUserRequest!) {
    verifyUser(request: $request) {
      ...UserFields
      __typename
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type VerifyUserMutationFn = Apollo.MutationFunction<
  VerifyUserMutation,
  VerifyUserMutationVariables
>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useVerifyUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyUserMutation,
    VerifyUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(
    VerifyUserDocument,
    options
  );
}
export type VerifyUserMutationHookResult = ReturnType<
  typeof useVerifyUserMutation
>;
export type VerifyUserMutationResult =
  Apollo.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = Apollo.BaseMutationOptions<
  VerifyUserMutation,
  VerifyUserMutationVariables
>;
export const AnonymousUserDocument = gql`
  query AnonymousUser($request: AnonymousUserQueryRequest!) {
    anonymousUser(request: $request) {
      ...AnonymousUserFields
    }
  }
  ${AnonymousUserFieldsFragmentDoc}
`;

/**
 * __useAnonymousUserQuery__
 *
 * To run a query within a React component, call `useAnonymousUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnonymousUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnonymousUserQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAnonymousUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    AnonymousUserQuery,
    AnonymousUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AnonymousUserQuery, AnonymousUserQueryVariables>(
    AnonymousUserDocument,
    options
  );
}
export function useAnonymousUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AnonymousUserQuery,
    AnonymousUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AnonymousUserQuery, AnonymousUserQueryVariables>(
    AnonymousUserDocument,
    options
  );
}
export type AnonymousUserQueryHookResult = ReturnType<
  typeof useAnonymousUserQuery
>;
export type AnonymousUserLazyQueryHookResult = ReturnType<
  typeof useAnonymousUserLazyQuery
>;
export type AnonymousUserQueryResult = Apollo.QueryResult<
  AnonymousUserQuery,
  AnonymousUserQueryVariables
>;
export const ChallengeDocument = gql`
  query Challenge($request: ChallengeRequest!) {
    challenge(request: $request) {
      text
    }
  }
`;

/**
 * __useChallengeQuery__
 *
 * To run a query within a React component, call `useChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useChallengeQuery(
  baseOptions: Apollo.QueryHookOptions<ChallengeQuery, ChallengeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ChallengeQuery, ChallengeQueryVariables>(
    ChallengeDocument,
    options
  );
}
export function useChallengeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ChallengeQuery,
    ChallengeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(
    ChallengeDocument,
    options
  );
}
export type ChallengeQueryHookResult = ReturnType<typeof useChallengeQuery>;
export type ChallengeLazyQueryHookResult = ReturnType<
  typeof useChallengeLazyQuery
>;
export type ChallengeQueryResult = Apollo.QueryResult<
  ChallengeQuery,
  ChallengeQueryVariables
>;
export const CheckTransactionDocument = gql`
  query CheckTransaction($request: TransactionHashRequest!) {
    checkTransaction(request: $request) {
      ...TransactionCreditFields
    }
  }
  ${TransactionCreditFieldsFragmentDoc}
`;

/**
 * __useCheckTransactionQuery__
 *
 * To run a query within a React component, call `useCheckTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckTransactionQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCheckTransactionQuery(
  baseOptions: Apollo.QueryHookOptions<
    CheckTransactionQuery,
    CheckTransactionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckTransactionQuery, CheckTransactionQueryVariables>(
    CheckTransactionDocument,
    options
  );
}
export function useCheckTransactionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckTransactionQuery,
    CheckTransactionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CheckTransactionQuery,
    CheckTransactionQueryVariables
  >(CheckTransactionDocument, options);
}
export type CheckTransactionQueryHookResult = ReturnType<
  typeof useCheckTransactionQuery
>;
export type CheckTransactionLazyQueryHookResult = ReturnType<
  typeof useCheckTransactionLazyQuery
>;
export type CheckTransactionQueryResult = Apollo.QueryResult<
  CheckTransactionQuery,
  CheckTransactionQueryVariables
>;
export const DataUserRequestDocument = gql`
  query DataUserRequest($request: CategoriesRequest) {
    dataUser(request: $request) {
      ...DataUserFields
    }
  }
  ${DataUserFieldsFragmentDoc}
`;

/**
 * __useDataUserRequestQuery__
 *
 * To run a query within a React component, call `useDataUserRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useDataUserRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDataUserRequestQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDataUserRequestQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DataUserRequestQuery,
    DataUserRequestQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DataUserRequestQuery, DataUserRequestQueryVariables>(
    DataUserRequestDocument,
    options
  );
}
export function useDataUserRequestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DataUserRequestQuery,
    DataUserRequestQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DataUserRequestQuery,
    DataUserRequestQueryVariables
  >(DataUserRequestDocument, options);
}
export type DataUserRequestQueryHookResult = ReturnType<
  typeof useDataUserRequestQuery
>;
export type DataUserRequestLazyQueryHookResult = ReturnType<
  typeof useDataUserRequestLazyQuery
>;
export type DataUserRequestQueryResult = Apollo.QueryResult<
  DataUserRequestQuery,
  DataUserRequestQueryVariables
>;
export const EmbedSurveyResultsDocument = gql`
  query EmbedSurveyResults($request: EmbedSurveyResultQueryRequest!) {
    embedSurveyResults(request: $request) {
      items {
        ...EmbedSurveyResultFields
      }
    }
  }
  ${EmbedSurveyResultFieldsFragmentDoc}
`;

/**
 * __useEmbedSurveyResultsQuery__
 *
 * To run a query within a React component, call `useEmbedSurveyResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedSurveyResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedSurveyResultsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useEmbedSurveyResultsQuery(
  baseOptions: Apollo.QueryHookOptions<
    EmbedSurveyResultsQuery,
    EmbedSurveyResultsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    EmbedSurveyResultsQuery,
    EmbedSurveyResultsQueryVariables
  >(EmbedSurveyResultsDocument, options);
}
export function useEmbedSurveyResultsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EmbedSurveyResultsQuery,
    EmbedSurveyResultsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    EmbedSurveyResultsQuery,
    EmbedSurveyResultsQueryVariables
  >(EmbedSurveyResultsDocument, options);
}
export type EmbedSurveyResultsQueryHookResult = ReturnType<
  typeof useEmbedSurveyResultsQuery
>;
export type EmbedSurveyResultsLazyQueryHookResult = ReturnType<
  typeof useEmbedSurveyResultsLazyQuery
>;
export type EmbedSurveyResultsQueryResult = Apollo.QueryResult<
  EmbedSurveyResultsQuery,
  EmbedSurveyResultsQueryVariables
>;
export const FillingQueueDocument = gql`
  query FillingQueue($request: FillingQueueQueryRequest!) {
    fillingQueue(request: $request) {
      items {
        ...FillingQueueFields
      }
    }
  }
  ${FillingQueueFieldsFragmentDoc}
`;

/**
 * __useFillingQueueQuery__
 *
 * To run a query within a React component, call `useFillingQueueQuery` and pass it any options that fit your needs.
 * When your component renders, `useFillingQueueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFillingQueueQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFillingQueueQuery(
  baseOptions: Apollo.QueryHookOptions<
    FillingQueueQuery,
    FillingQueueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FillingQueueQuery, FillingQueueQueryVariables>(
    FillingQueueDocument,
    options
  );
}
export function useFillingQueueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FillingQueueQuery,
    FillingQueueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FillingQueueQuery, FillingQueueQueryVariables>(
    FillingQueueDocument,
    options
  );
}
export type FillingQueueQueryHookResult = ReturnType<
  typeof useFillingQueueQuery
>;
export type FillingQueueLazyQueryHookResult = ReturnType<
  typeof useFillingQueueLazyQuery
>;
export type FillingQueueQueryResult = Apollo.QueryResult<
  FillingQueueQuery,
  FillingQueueQueryVariables
>;
export const LeaderboardEntriesDocument = gql`
  query LeaderboardEntries($request: LeaderboardEntriesRequest!) {
    leaderboardEntries(request: $request) {
      items {
        ...LeaderboardEntryFields
      }
    }
  }
  ${LeaderboardEntryFieldsFragmentDoc}
`;

/**
 * __useLeaderboardEntriesQuery__
 *
 * To run a query within a React component, call `useLeaderboardEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderboardEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderboardEntriesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useLeaderboardEntriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    LeaderboardEntriesQuery,
    LeaderboardEntriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    LeaderboardEntriesQuery,
    LeaderboardEntriesQueryVariables
  >(LeaderboardEntriesDocument, options);
}
export function useLeaderboardEntriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LeaderboardEntriesQuery,
    LeaderboardEntriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    LeaderboardEntriesQuery,
    LeaderboardEntriesQueryVariables
  >(LeaderboardEntriesDocument, options);
}
export type LeaderboardEntriesQueryHookResult = ReturnType<
  typeof useLeaderboardEntriesQuery
>;
export type LeaderboardEntriesLazyQueryHookResult = ReturnType<
  typeof useLeaderboardEntriesLazyQuery
>;
export type LeaderboardEntriesQueryResult = Apollo.QueryResult<
  LeaderboardEntriesQuery,
  LeaderboardEntriesQueryVariables
>;
export const MarketplaceOrderDocument = gql`
  query MarketplaceOrder($request: MarketplaceOrderQueryRequest!) {
    marketplaceOrder(request: $request) {
      ...MarketplaceOrderFields
    }
  }
  ${MarketplaceOrderFieldsFragmentDoc}
`;

/**
 * __useMarketplaceOrderQuery__
 *
 * To run a query within a React component, call `useMarketplaceOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketplaceOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketplaceOrderQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMarketplaceOrderQuery(
  baseOptions: Apollo.QueryHookOptions<
    MarketplaceOrderQuery,
    MarketplaceOrderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MarketplaceOrderQuery, MarketplaceOrderQueryVariables>(
    MarketplaceOrderDocument,
    options
  );
}
export function useMarketplaceOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MarketplaceOrderQuery,
    MarketplaceOrderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MarketplaceOrderQuery,
    MarketplaceOrderQueryVariables
  >(MarketplaceOrderDocument, options);
}
export type MarketplaceOrderQueryHookResult = ReturnType<
  typeof useMarketplaceOrderQuery
>;
export type MarketplaceOrderLazyQueryHookResult = ReturnType<
  typeof useMarketplaceOrderLazyQuery
>;
export type MarketplaceOrderQueryResult = Apollo.QueryResult<
  MarketplaceOrderQuery,
  MarketplaceOrderQueryVariables
>;
export const MarketplaceOrdersDocument = gql`
  query MarketplaceOrders($request: MarketplaceOrdersQueryRequest!) {
    marketplaceOrders(request: $request) {
      items {
        ...MarketplaceOrderFields
      }
    }
  }
  ${MarketplaceOrderFieldsFragmentDoc}
`;

/**
 * __useMarketplaceOrdersQuery__
 *
 * To run a query within a React component, call `useMarketplaceOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketplaceOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketplaceOrdersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMarketplaceOrdersQuery(
  baseOptions: Apollo.QueryHookOptions<
    MarketplaceOrdersQuery,
    MarketplaceOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    MarketplaceOrdersQuery,
    MarketplaceOrdersQueryVariables
  >(MarketplaceOrdersDocument, options);
}
export function useMarketplaceOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MarketplaceOrdersQuery,
    MarketplaceOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MarketplaceOrdersQuery,
    MarketplaceOrdersQueryVariables
  >(MarketplaceOrdersDocument, options);
}
export type MarketplaceOrdersQueryHookResult = ReturnType<
  typeof useMarketplaceOrdersQuery
>;
export type MarketplaceOrdersLazyQueryHookResult = ReturnType<
  typeof useMarketplaceOrdersLazyQuery
>;
export type MarketplaceOrdersQueryResult = Apollo.QueryResult<
  MarketplaceOrdersQuery,
  MarketplaceOrdersQueryVariables
>;
export const MethodsPromotionDocument = gql`
  query MethodsPromotion {
    methodsPromotions {
      name
      totalCount
      effectiveness
    }
  }
`;

/**
 * __useMethodsPromotionQuery__
 *
 * To run a query within a React component, call `useMethodsPromotionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMethodsPromotionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMethodsPromotionQuery({
 *   variables: {
 *   },
 * });
 */
export function useMethodsPromotionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MethodsPromotionQuery,
    MethodsPromotionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MethodsPromotionQuery, MethodsPromotionQueryVariables>(
    MethodsPromotionDocument,
    options
  );
}
export function useMethodsPromotionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MethodsPromotionQuery,
    MethodsPromotionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MethodsPromotionQuery,
    MethodsPromotionQueryVariables
  >(MethodsPromotionDocument, options);
}
export type MethodsPromotionQueryHookResult = ReturnType<
  typeof useMethodsPromotionQuery
>;
export type MethodsPromotionLazyQueryHookResult = ReturnType<
  typeof useMethodsPromotionLazyQuery
>;
export type MethodsPromotionQueryResult = Apollo.QueryResult<
  MethodsPromotionQuery,
  MethodsPromotionQueryVariables
>;
export const NftGalleriesDocument = gql`
  query NftGalleries($request: NftGalleriesQueryRequest!) {
    nftGalleries(request: $request) {
      items {
        ...NftGalleryFields
      }
    }
  }
  ${NftGalleryFieldsFragmentDoc}
`;

/**
 * __useNftGalleriesQuery__
 *
 * To run a query within a React component, call `useNftGalleriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftGalleriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftGalleriesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftGalleriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    NftGalleriesQuery,
    NftGalleriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NftGalleriesQuery, NftGalleriesQueryVariables>(
    NftGalleriesDocument,
    options
  );
}
export function useNftGalleriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NftGalleriesQuery,
    NftGalleriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NftGalleriesQuery, NftGalleriesQueryVariables>(
    NftGalleriesDocument,
    options
  );
}
export type NftGalleriesQueryHookResult = ReturnType<
  typeof useNftGalleriesQuery
>;
export type NftGalleriesLazyQueryHookResult = ReturnType<
  typeof useNftGalleriesLazyQuery
>;
export type NftGalleriesQueryResult = Apollo.QueryResult<
  NftGalleriesQuery,
  NftGalleriesQueryVariables
>;
export const NftUserGalleriesDocument = gql`
  query NftUserGalleries($request: NftGalleriesQueryRequest!) {
    nftUserGalleries(request: $request) {
      items {
        ...NftGalleryFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${NftGalleryFieldsFragmentDoc}
`;

/**
 * __useNftUserGalleriesQuery__
 *
 * To run a query within a React component, call `useNftUserGalleriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftUserGalleriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftUserGalleriesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftUserGalleriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    NftUserGalleriesQuery,
    NftUserGalleriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NftUserGalleriesQuery, NftUserGalleriesQueryVariables>(
    NftUserGalleriesDocument,
    options
  );
}
export function useNftUserGalleriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NftUserGalleriesQuery,
    NftUserGalleriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    NftUserGalleriesQuery,
    NftUserGalleriesQueryVariables
  >(NftUserGalleriesDocument, options);
}
export type NftUserGalleriesQueryHookResult = ReturnType<
  typeof useNftUserGalleriesQuery
>;
export type NftUserGalleriesLazyQueryHookResult = ReturnType<
  typeof useNftUserGalleriesLazyQuery
>;
export type NftUserGalleriesQueryResult = Apollo.QueryResult<
  NftUserGalleriesQuery,
  NftUserGalleriesQueryVariables
>;
export const NftsDocument = gql`
  query Nfts($request: NftsRequest!) {
    nfts(request: $request) {
      items {
        ...NftFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${NftFieldsFragmentDoc}
`;

/**
 * __useNftsQuery__
 *
 * To run a query within a React component, call `useNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftsQuery(
  baseOptions: Apollo.QueryHookOptions<NftsQuery, NftsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NftsQuery, NftsQueryVariables>(NftsDocument, options);
}
export function useNftsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NftsQuery, NftsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NftsQuery, NftsQueryVariables>(
    NftsDocument,
    options
  );
}
export type NftsQueryHookResult = ReturnType<typeof useNftsQuery>;
export type NftsLazyQueryHookResult = ReturnType<typeof useNftsLazyQuery>;
export type NftsQueryResult = Apollo.QueryResult<NftsQuery, NftsQueryVariables>;
export const ProductDocument = gql`
  query Product($request: ProductQueryRequest!) {
    product(request: $request) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  );
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>;
export const ProductsDocument = gql`
  query Products($request: ProductsQueryRequest!) {
    products(request: $request) {
      items {
        ...ProductFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>;
export const SearchBusinessDocument = gql`
  query SearchBusiness($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on BusinessSearchResult {
        items {
          ...UserFields
        }
        pageInfo {
          totalCount
          next
        }
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useSearchBusinessQuery__
 *
 * To run a query within a React component, call `useSearchBusinessQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBusinessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBusinessQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchBusinessQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchBusinessQuery,
    SearchBusinessQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchBusinessQuery, SearchBusinessQueryVariables>(
    SearchBusinessDocument,
    options
  );
}
export function useSearchBusinessLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchBusinessQuery,
    SearchBusinessQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchBusinessQuery, SearchBusinessQueryVariables>(
    SearchBusinessDocument,
    options
  );
}
export type SearchBusinessQueryHookResult = ReturnType<
  typeof useSearchBusinessQuery
>;
export type SearchBusinessLazyQueryHookResult = ReturnType<
  typeof useSearchBusinessLazyQuery
>;
export type SearchBusinessQueryResult = Apollo.QueryResult<
  SearchBusinessQuery,
  SearchBusinessQueryVariables
>;
export const SearchEndusersDocument = gql`
  query SearchEndusers($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on EnduserSearchResult {
        items {
          ...UserFields
        }
        pageInfo {
          totalCount
          next
        }
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useSearchEndusersQuery__
 *
 * To run a query within a React component, call `useSearchEndusersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEndusersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchEndusersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchEndusersQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchEndusersQuery,
    SearchEndusersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchEndusersQuery, SearchEndusersQueryVariables>(
    SearchEndusersDocument,
    options
  );
}
export function useSearchEndusersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchEndusersQuery,
    SearchEndusersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchEndusersQuery, SearchEndusersQueryVariables>(
    SearchEndusersDocument,
    options
  );
}
export type SearchEndusersQueryHookResult = ReturnType<
  typeof useSearchEndusersQuery
>;
export type SearchEndusersLazyQueryHookResult = ReturnType<
  typeof useSearchEndusersLazyQuery
>;
export type SearchEndusersQueryResult = Apollo.QueryResult<
  SearchEndusersQuery,
  SearchEndusersQueryVariables
>;
export const SearchMarketplaceDocument = gql`
  query SearchMarketplace($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on MarketplaceSearchResult {
        items {
          ...ProductFields
        }
        pageInfo {
          next
        }
      }
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useSearchMarketplaceQuery__
 *
 * To run a query within a React component, call `useSearchMarketplaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMarketplaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMarketplaceQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchMarketplaceQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchMarketplaceQuery,
    SearchMarketplaceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SearchMarketplaceQuery,
    SearchMarketplaceQueryVariables
  >(SearchMarketplaceDocument, options);
}
export function useSearchMarketplaceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchMarketplaceQuery,
    SearchMarketplaceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchMarketplaceQuery,
    SearchMarketplaceQueryVariables
  >(SearchMarketplaceDocument, options);
}
export type SearchMarketplaceQueryHookResult = ReturnType<
  typeof useSearchMarketplaceQuery
>;
export type SearchMarketplaceLazyQueryHookResult = ReturnType<
  typeof useSearchMarketplaceLazyQuery
>;
export type SearchMarketplaceQueryResult = Apollo.QueryResult<
  SearchMarketplaceQuery,
  SearchMarketplaceQueryVariables
>;
export const SearchNftsDocument = gql`
  query SearchNfts($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on NftSearchResult {
        items {
          ...NftFields
        }
        pageInfo {
          next
        }
      }
    }
  }
  ${NftFieldsFragmentDoc}
`;

/**
 * __useSearchNftsQuery__
 *
 * To run a query within a React component, call `useSearchNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchNftsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchNftsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchNftsQuery,
    SearchNftsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchNftsQuery, SearchNftsQueryVariables>(
    SearchNftsDocument,
    options
  );
}
export function useSearchNftsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchNftsQuery,
    SearchNftsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchNftsQuery, SearchNftsQueryVariables>(
    SearchNftsDocument,
    options
  );
}
export type SearchNftsQueryHookResult = ReturnType<typeof useSearchNftsQuery>;
export type SearchNftsLazyQueryHookResult = ReturnType<
  typeof useSearchNftsLazyQuery
>;
export type SearchNftsQueryResult = Apollo.QueryResult<
  SearchNftsQuery,
  SearchNftsQueryVariables
>;
export const SearchSurveysDocument = gql`
  query SearchSurveys($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on SurveySearchResult {
        items {
          ...SurveyFields
        }
        pageInfo {
          next
        }
      }
    }
  }
  ${SurveyFieldsFragmentDoc}
`;

/**
 * __useSearchSurveysQuery__
 *
 * To run a query within a React component, call `useSearchSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSurveysQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchSurveysQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchSurveysQuery,
    SearchSurveysQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchSurveysQuery, SearchSurveysQueryVariables>(
    SearchSurveysDocument,
    options
  );
}
export function useSearchSurveysLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchSurveysQuery,
    SearchSurveysQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchSurveysQuery, SearchSurveysQueryVariables>(
    SearchSurveysDocument,
    options
  );
}
export type SearchSurveysQueryHookResult = ReturnType<
  typeof useSearchSurveysQuery
>;
export type SearchSurveysLazyQueryHookResult = ReturnType<
  typeof useSearchSurveysLazyQuery
>;
export type SearchSurveysQueryResult = Apollo.QueryResult<
  SearchSurveysQuery,
  SearchSurveysQueryVariables
>;
export const SearchTutorialsDocument = gql`
  query SearchTutorials($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on TutorialSearchResult {
        items {
          ...SurveyFields
        }
        pageInfo {
          next
        }
      }
    }
  }
  ${SurveyFieldsFragmentDoc}
`;

/**
 * __useSearchTutorialsQuery__
 *
 * To run a query within a React component, call `useSearchTutorialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTutorialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTutorialsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchTutorialsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchTutorialsQuery,
    SearchTutorialsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchTutorialsQuery, SearchTutorialsQueryVariables>(
    SearchTutorialsDocument,
    options
  );
}
export function useSearchTutorialsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchTutorialsQuery,
    SearchTutorialsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchTutorialsQuery,
    SearchTutorialsQueryVariables
  >(SearchTutorialsDocument, options);
}
export type SearchTutorialsQueryHookResult = ReturnType<
  typeof useSearchTutorialsQuery
>;
export type SearchTutorialsLazyQueryHookResult = ReturnType<
  typeof useSearchTutorialsLazyQuery
>;
export type SearchTutorialsQueryResult = Apollo.QueryResult<
  SearchTutorialsQuery,
  SearchTutorialsQueryVariables
>;
export const SubscriptionHistoryDocument = gql`
  query SubscriptionHistory($request: SubscriptionHistoryRequest!) {
    subscriptionHistory(request: $request) {
      id
      subscriptionLevel
      startDate
      endDate
    }
  }
`;

/**
 * __useSubscriptionHistoryQuery__
 *
 * To run a query within a React component, call `useSubscriptionHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionHistoryQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSubscriptionHistoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    SubscriptionHistoryQuery,
    SubscriptionHistoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SubscriptionHistoryQuery,
    SubscriptionHistoryQueryVariables
  >(SubscriptionHistoryDocument, options);
}
export function useSubscriptionHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubscriptionHistoryQuery,
    SubscriptionHistoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SubscriptionHistoryQuery,
    SubscriptionHistoryQueryVariables
  >(SubscriptionHistoryDocument, options);
}
export type SubscriptionHistoryQueryHookResult = ReturnType<
  typeof useSubscriptionHistoryQuery
>;
export type SubscriptionHistoryLazyQueryHookResult = ReturnType<
  typeof useSubscriptionHistoryLazyQuery
>;
export type SubscriptionHistoryQueryResult = Apollo.QueryResult<
  SubscriptionHistoryQuery,
  SubscriptionHistoryQueryVariables
>;
export const SubscriptionLevelDocument = gql`
  query SubscriptionLevel($request: SubscriptionLevelRequest!) {
    subscriptionLevel(request: $request) {
      id
      subscriptionLevel
    }
  }
`;

/**
 * __useSubscriptionLevelQuery__
 *
 * To run a query within a React component, call `useSubscriptionLevelQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionLevelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionLevelQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSubscriptionLevelQuery(
  baseOptions: Apollo.QueryHookOptions<
    SubscriptionLevelQuery,
    SubscriptionLevelQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SubscriptionLevelQuery,
    SubscriptionLevelQueryVariables
  >(SubscriptionLevelDocument, options);
}
export function useSubscriptionLevelLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubscriptionLevelQuery,
    SubscriptionLevelQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SubscriptionLevelQuery,
    SubscriptionLevelQueryVariables
  >(SubscriptionLevelDocument, options);
}
export type SubscriptionLevelQueryHookResult = ReturnType<
  typeof useSubscriptionLevelQuery
>;
export type SubscriptionLevelLazyQueryHookResult = ReturnType<
  typeof useSubscriptionLevelLazyQuery
>;
export type SubscriptionLevelQueryResult = Apollo.QueryResult<
  SubscriptionLevelQuery,
  SubscriptionLevelQueryVariables
>;
export const SurveyDocument = gql`
  query Survey($request: SingleSurveyQueryRequest!) {
    survey(request: $request) {
      ...SurveyFields
    }
  }
  ${SurveyFieldsFragmentDoc}
`;

/**
 * __useSurveyQuery__
 *
 * To run a query within a React component, call `useSurveyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyQuery(
  baseOptions: Apollo.QueryHookOptions<SurveyQuery, SurveyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SurveyQuery, SurveyQueryVariables>(
    SurveyDocument,
    options
  );
}
export function useSurveyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SurveyQuery, SurveyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SurveyQuery, SurveyQueryVariables>(
    SurveyDocument,
    options
  );
}
export type SurveyQueryHookResult = ReturnType<typeof useSurveyQuery>;
export type SurveyLazyQueryHookResult = ReturnType<typeof useSurveyLazyQuery>;
export type SurveyQueryResult = Apollo.QueryResult<
  SurveyQuery,
  SurveyQueryVariables
>;
export const SurveyAnalyticsDocument = gql`
  query SurveyAnalytics($request: SurveyAnalyticsRequest!) {
    surveyAnalytics(request: $request) {
      ...ChartDataLabelsFields
    }
  }
  ${ChartDataLabelsFieldsFragmentDoc}
`;

/**
 * __useSurveyAnalyticsQuery__
 *
 * To run a query within a React component, call `useSurveyAnalyticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyAnalyticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyAnalyticsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyAnalyticsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SurveyAnalyticsQuery,
    SurveyAnalyticsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SurveyAnalyticsQuery, SurveyAnalyticsQueryVariables>(
    SurveyAnalyticsDocument,
    options
  );
}
export function useSurveyAnalyticsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SurveyAnalyticsQuery,
    SurveyAnalyticsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SurveyAnalyticsQuery,
    SurveyAnalyticsQueryVariables
  >(SurveyAnalyticsDocument, options);
}
export type SurveyAnalyticsQueryHookResult = ReturnType<
  typeof useSurveyAnalyticsQuery
>;
export type SurveyAnalyticsLazyQueryHookResult = ReturnType<
  typeof useSurveyAnalyticsLazyQuery
>;
export type SurveyAnalyticsQueryResult = Apollo.QueryResult<
  SurveyAnalyticsQuery,
  SurveyAnalyticsQueryVariables
>;
export const SurveyGatingDocument = gql`
  query SurveyGating($request: SurveyGatingQueryRequest!) {
    surveyGating(request: $request) {
      ...SurveyGatingFields
    }
  }
  ${SurveyGatingFieldsFragmentDoc}
`;

/**
 * __useSurveyGatingQuery__
 *
 * To run a query within a React component, call `useSurveyGatingQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyGatingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyGatingQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyGatingQuery(
  baseOptions: Apollo.QueryHookOptions<
    SurveyGatingQuery,
    SurveyGatingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SurveyGatingQuery, SurveyGatingQueryVariables>(
    SurveyGatingDocument,
    options
  );
}
export function useSurveyGatingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SurveyGatingQuery,
    SurveyGatingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SurveyGatingQuery, SurveyGatingQueryVariables>(
    SurveyGatingDocument,
    options
  );
}
export type SurveyGatingQueryHookResult = ReturnType<
  typeof useSurveyGatingQuery
>;
export type SurveyGatingLazyQueryHookResult = ReturnType<
  typeof useSurveyGatingLazyQuery
>;
export type SurveyGatingQueryResult = Apollo.QueryResult<
  SurveyGatingQuery,
  SurveyGatingQueryVariables
>;
export const SurveyReferralsDocument = gql`
  query SurveyReferrals($request: SurveyReferralQueryRequest!) {
    surveyReferrals(request: $request) {
      items {
        ...SurveyReferralFields
      }
    }
  }
  ${SurveyReferralFieldsFragmentDoc}
`;

/**
 * __useSurveyReferralsQuery__
 *
 * To run a query within a React component, call `useSurveyReferralsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyReferralsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyReferralsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyReferralsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SurveyReferralsQuery,
    SurveyReferralsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SurveyReferralsQuery, SurveyReferralsQueryVariables>(
    SurveyReferralsDocument,
    options
  );
}
export function useSurveyReferralsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SurveyReferralsQuery,
    SurveyReferralsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SurveyReferralsQuery,
    SurveyReferralsQueryVariables
  >(SurveyReferralsDocument, options);
}
export type SurveyReferralsQueryHookResult = ReturnType<
  typeof useSurveyReferralsQuery
>;
export type SurveyReferralsLazyQueryHookResult = ReturnType<
  typeof useSurveyReferralsLazyQuery
>;
export type SurveyReferralsQueryResult = Apollo.QueryResult<
  SurveyReferralsQuery,
  SurveyReferralsQueryVariables
>;
export const SurveyResultsDocument = gql`
  query SurveyResults($request: SurveyResultQueryRequest!) {
    surveyResults(request: $request) {
      items {
        ...SurveyResultFields
      }
    }
  }
  ${SurveyResultFieldsFragmentDoc}
`;

/**
 * __useSurveyResultsQuery__
 *
 * To run a query within a React component, call `useSurveyResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyResultsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyResultsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SurveyResultsQuery,
    SurveyResultsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SurveyResultsQuery, SurveyResultsQueryVariables>(
    SurveyResultsDocument,
    options
  );
}
export function useSurveyResultsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SurveyResultsQuery,
    SurveyResultsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SurveyResultsQuery, SurveyResultsQueryVariables>(
    SurveyResultsDocument,
    options
  );
}
export type SurveyResultsQueryHookResult = ReturnType<
  typeof useSurveyResultsQuery
>;
export type SurveyResultsLazyQueryHookResult = ReturnType<
  typeof useSurveyResultsLazyQuery
>;
export type SurveyResultsQueryResult = Apollo.QueryResult<
  SurveyResultsQuery,
  SurveyResultsQueryVariables
>;
export const SurveyRewardDocument = gql`
  query SurveyReward($request: SurveyRewardQueryRequest!) {
    surveyReward(request: $request) {
      ...SurveyRewardFields
    }
  }
  ${SurveyRewardFieldsFragmentDoc}
`;

/**
 * __useSurveyRewardQuery__
 *
 * To run a query within a React component, call `useSurveyRewardQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyRewardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyRewardQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyRewardQuery(
  baseOptions: Apollo.QueryHookOptions<
    SurveyRewardQuery,
    SurveyRewardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SurveyRewardQuery, SurveyRewardQueryVariables>(
    SurveyRewardDocument,
    options
  );
}
export function useSurveyRewardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SurveyRewardQuery,
    SurveyRewardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SurveyRewardQuery, SurveyRewardQueryVariables>(
    SurveyRewardDocument,
    options
  );
}
export type SurveyRewardQueryHookResult = ReturnType<
  typeof useSurveyRewardQuery
>;
export type SurveyRewardLazyQueryHookResult = ReturnType<
  typeof useSurveyRewardLazyQuery
>;
export type SurveyRewardQueryResult = Apollo.QueryResult<
  SurveyRewardQuery,
  SurveyRewardQueryVariables
>;
export const SurveyRewardErc721Document = gql`
  query SurveyRewardErc721($request: SurveyRewardQueryRequest!) {
    surveyRewardErc721(request: $request) {
      ...SurveyRewardFields
    }
  }
  ${SurveyRewardFieldsFragmentDoc}
`;

/**
 * __useSurveyRewardErc721Query__
 *
 * To run a query within a React component, call `useSurveyRewardErc721Query` and pass it any options that fit your needs.
 * When your component renders, `useSurveyRewardErc721Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyRewardErc721Query({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyRewardErc721Query(
  baseOptions: Apollo.QueryHookOptions<
    SurveyRewardErc721Query,
    SurveyRewardErc721QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SurveyRewardErc721Query,
    SurveyRewardErc721QueryVariables
  >(SurveyRewardErc721Document, options);
}
export function useSurveyRewardErc721LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SurveyRewardErc721Query,
    SurveyRewardErc721QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SurveyRewardErc721Query,
    SurveyRewardErc721QueryVariables
  >(SurveyRewardErc721Document, options);
}
export type SurveyRewardErc721QueryHookResult = ReturnType<
  typeof useSurveyRewardErc721Query
>;
export type SurveyRewardErc721LazyQueryHookResult = ReturnType<
  typeof useSurveyRewardErc721LazyQuery
>;
export type SurveyRewardErc721QueryResult = Apollo.QueryResult<
  SurveyRewardErc721Query,
  SurveyRewardErc721QueryVariables
>;
export const SurveysDocument = gql`
  query Surveys($request: SurveyQueryRequest!) {
    surveys(request: $request) {
      items {
        ...SurveyFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${SurveyFieldsFragmentDoc}
`;

/**
 * __useSurveysQuery__
 *
 * To run a query within a React component, call `useSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveysQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveysQuery(
  baseOptions: Apollo.QueryHookOptions<SurveysQuery, SurveysQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SurveysQuery, SurveysQueryVariables>(
    SurveysDocument,
    options
  );
}
export function useSurveysLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SurveysQuery, SurveysQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SurveysQuery, SurveysQueryVariables>(
    SurveysDocument,
    options
  );
}
export type SurveysQueryHookResult = ReturnType<typeof useSurveysQuery>;
export type SurveysLazyQueryHookResult = ReturnType<typeof useSurveysLazyQuery>;
export type SurveysQueryResult = Apollo.QueryResult<
  SurveysQuery,
  SurveysQueryVariables
>;
export const TopBusinessDocument = gql`
  query TopBusiness($request: TopBusinessRequest!) {
    topBusiness(request: $request) {
      ...ChartDataLabelsFields
    }
  }
  ${ChartDataLabelsFieldsFragmentDoc}
`;

/**
 * __useTopBusinessQuery__
 *
 * To run a query within a React component, call `useTopBusinessQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopBusinessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopBusinessQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useTopBusinessQuery(
  baseOptions: Apollo.QueryHookOptions<
    TopBusinessQuery,
    TopBusinessQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TopBusinessQuery, TopBusinessQueryVariables>(
    TopBusinessDocument,
    options
  );
}
export function useTopBusinessLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TopBusinessQuery,
    TopBusinessQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TopBusinessQuery, TopBusinessQueryVariables>(
    TopBusinessDocument,
    options
  );
}
export type TopBusinessQueryHookResult = ReturnType<typeof useTopBusinessQuery>;
export type TopBusinessLazyQueryHookResult = ReturnType<
  typeof useTopBusinessLazyQuery
>;
export type TopBusinessQueryResult = Apollo.QueryResult<
  TopBusinessQuery,
  TopBusinessQueryVariables
>;
export const UserDocument = gql`
  query User($request: SingleProfileQueryRequest!) {
    user(request: $request) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserByIssuerDocument = gql`
  query UserByIssuer($request: IssuerProfileQueryRequest!) {
    userbyIssuer(request: $request) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUserByIssuerQuery__
 *
 * To run a query within a React component, call `useUserByIssuerQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIssuerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIssuerQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserByIssuerQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserByIssuerQuery,
    UserByIssuerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserByIssuerQuery, UserByIssuerQueryVariables>(
    UserByIssuerDocument,
    options
  );
}
export function useUserByIssuerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserByIssuerQuery,
    UserByIssuerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserByIssuerQuery, UserByIssuerQueryVariables>(
    UserByIssuerDocument,
    options
  );
}
export type UserByIssuerQueryHookResult = ReturnType<
  typeof useUserByIssuerQuery
>;
export type UserByIssuerLazyQueryHookResult = ReturnType<
  typeof useUserByIssuerLazyQuery
>;
export type UserByIssuerQueryResult = Apollo.QueryResult<
  UserByIssuerQuery,
  UserByIssuerQueryVariables
>;
export const UserByWalletIssuerDocument = gql`
  query UserByWalletIssuer($request: Iden3IssuerProfileQueryRequest!) {
    userbyWalletIssuer(request: $request) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUserByWalletIssuerQuery__
 *
 * To run a query within a React component, call `useUserByWalletIssuerQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByWalletIssuerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByWalletIssuerQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserByWalletIssuerQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserByWalletIssuerQuery,
    UserByWalletIssuerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    UserByWalletIssuerQuery,
    UserByWalletIssuerQueryVariables
  >(UserByWalletIssuerDocument, options);
}
export function useUserByWalletIssuerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserByWalletIssuerQuery,
    UserByWalletIssuerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UserByWalletIssuerQuery,
    UserByWalletIssuerQueryVariables
  >(UserByWalletIssuerDocument, options);
}
export type UserByWalletIssuerQueryHookResult = ReturnType<
  typeof useUserByWalletIssuerQuery
>;
export type UserByWalletIssuerLazyQueryHookResult = ReturnType<
  typeof useUserByWalletIssuerLazyQuery
>;
export type UserByWalletIssuerQueryResult = Apollo.QueryResult<
  UserByWalletIssuerQuery,
  UserByWalletIssuerQueryVariables
>;
export const UserContractDocument = gql`
  query UserContract($request: UserContractQueryRequest!) {
    userContract(request: $request) {
      ...UserContractFields
    }
  }
  ${UserContractFieldsFragmentDoc}
`;

/**
 * __useUserContractQuery__
 *
 * To run a query within a React component, call `useUserContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserContractQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserContractQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserContractQuery,
    UserContractQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserContractQuery, UserContractQueryVariables>(
    UserContractDocument,
    options
  );
}
export function useUserContractLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserContractQuery,
    UserContractQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserContractQuery, UserContractQueryVariables>(
    UserContractDocument,
    options
  );
}
export type UserContractQueryHookResult = ReturnType<
  typeof useUserContractQuery
>;
export type UserContractLazyQueryHookResult = ReturnType<
  typeof useUserContractLazyQuery
>;
export type UserContractQueryResult = Apollo.QueryResult<
  UserContractQuery,
  UserContractQueryVariables
>;
export const UserContractsDocument = gql`
  query UserContracts($request: UserContractsQueryRequest!) {
    userContracts(request: $request) {
      items {
        ...UserContractFields
      }
    }
  }
  ${UserContractFieldsFragmentDoc}
`;

/**
 * __useUserContractsQuery__
 *
 * To run a query within a React component, call `useUserContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserContractsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserContractsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserContractsQuery,
    UserContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserContractsQuery, UserContractsQueryVariables>(
    UserContractsDocument,
    options
  );
}
export function useUserContractsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserContractsQuery,
    UserContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserContractsQuery, UserContractsQueryVariables>(
    UserContractsDocument,
    options
  );
}
export type UserContractsQueryHookResult = ReturnType<
  typeof useUserContractsQuery
>;
export type UserContractsLazyQueryHookResult = ReturnType<
  typeof useUserContractsLazyQuery
>;
export type UserContractsQueryResult = Apollo.QueryResult<
  UserContractsQuery,
  UserContractsQueryVariables
>;
export const UserNftsDocument = gql`
  query UserNfts($request: NftsRequest!) {
    userNfts(request: $request) {
      items {
        ...NftFields
      }
    }
  }
  ${NftFieldsFragmentDoc}
`;

/**
 * __useUserNftsQuery__
 *
 * To run a query within a React component, call `useUserNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserNftsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserNftsQuery(
  baseOptions: Apollo.QueryHookOptions<UserNftsQuery, UserNftsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserNftsQuery, UserNftsQueryVariables>(
    UserNftsDocument,
    options
  );
}
export function useUserNftsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserNftsQuery,
    UserNftsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserNftsQuery, UserNftsQueryVariables>(
    UserNftsDocument,
    options
  );
}
export type UserNftsQueryHookResult = ReturnType<typeof useUserNftsQuery>;
export type UserNftsLazyQueryHookResult = ReturnType<
  typeof useUserNftsLazyQuery
>;
export type UserNftsQueryResult = Apollo.QueryResult<
  UserNftsQuery,
  UserNftsQueryVariables
>;
export const UserRefferalsDocument = gql`
  query UserRefferals($request: UserRefferalQueryRequest!) {
    userRefferals(request: $request) {
      items {
        ...UserRefferalFields
      }
    }
  }
  ${UserRefferalFieldsFragmentDoc}
`;

/**
 * __useUserRefferalsQuery__
 *
 * To run a query within a React component, call `useUserRefferalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserRefferalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserRefferalsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserRefferalsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserRefferalsQuery,
    UserRefferalsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserRefferalsQuery, UserRefferalsQueryVariables>(
    UserRefferalsDocument,
    options
  );
}
export function useUserRefferalsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserRefferalsQuery,
    UserRefferalsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserRefferalsQuery, UserRefferalsQueryVariables>(
    UserRefferalsDocument,
    options
  );
}
export type UserRefferalsQueryHookResult = ReturnType<
  typeof useUserRefferalsQuery
>;
export type UserRefferalsLazyQueryHookResult = ReturnType<
  typeof useUserRefferalsLazyQuery
>;
export type UserRefferalsQueryResult = Apollo.QueryResult<
  UserRefferalsQuery,
  UserRefferalsQueryVariables
>;
export const UserTransactionsDocument = gql`
  query UserTransactions($request: UserTransactionQueryRequest!) {
    userTransactions(request: $request) {
      items {
        ...TransactionCreditFields
      }
    }
  }
  ${TransactionCreditFieldsFragmentDoc}
`;

/**
 * __useUserTransactionsQuery__
 *
 * To run a query within a React component, call `useUserTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTransactionsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserTransactionsQuery,
    UserTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserTransactionsQuery, UserTransactionsQueryVariables>(
    UserTransactionsDocument,
    options
  );
}
export function useUserTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserTransactionsQuery,
    UserTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UserTransactionsQuery,
    UserTransactionsQueryVariables
  >(UserTransactionsDocument, options);
}
export type UserTransactionsQueryHookResult = ReturnType<
  typeof useUserTransactionsQuery
>;
export type UserTransactionsLazyQueryHookResult = ReturnType<
  typeof useUserTransactionsLazyQuery
>;
export type UserTransactionsQueryResult = Apollo.QueryResult<
  UserTransactionsQuery,
  UserTransactionsQueryVariables
>;
export const UserWalletDocument = gql`
  query UserWallet($request: UserWalletQueryRequest!) {
    userWallet(request: $request) {
      walletId
      credit
      recipient
      nearAddress
      auroraAddress
      avaxAddress
      polygonAddress
      moonbeamAddress
      ethereumAddress
      tonAddress
      cronosAddress
      bobaAddress
      bscAddress
      opbnbAddress
      filecoinAddress
      baseAddress
      hederaAddress
      stellarAddress
      solanaAddress
      polkadotAddress
      icpAddress
      bitfinityAddress
      stripeAccountId
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useUserWalletQuery__
 *
 * To run a query within a React component, call `useUserWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWalletQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserWalletQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserWalletQuery,
    UserWalletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserWalletQuery, UserWalletQueryVariables>(
    UserWalletDocument,
    options
  );
}
export function useUserWalletLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserWalletQuery,
    UserWalletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserWalletQuery, UserWalletQueryVariables>(
    UserWalletDocument,
    options
  );
}
export type UserWalletQueryHookResult = ReturnType<typeof useUserWalletQuery>;
export type UserWalletLazyQueryHookResult = ReturnType<
  typeof useUserWalletLazyQuery
>;
export type UserWalletQueryResult = Apollo.QueryResult<
  UserWalletQuery,
  UserWalletQueryVariables
>;
export const UsersDocument = gql`
  query Users($request: ProfileQueryRequest!) {
    users(request: $request) {
      items {
        ...UserFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const UsersAdminDocument = gql`
  query UsersAdmin($request: ProfileQueryRequest!) {
    usersAdmin(request: $request) {
      items {
        ...UserFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUsersAdminQuery__
 *
 * To run a query within a React component, call `useUsersAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersAdminQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUsersAdminQuery(
  baseOptions: Apollo.QueryHookOptions<
    UsersAdminQuery,
    UsersAdminQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersAdminQuery, UsersAdminQueryVariables>(
    UsersAdminDocument,
    options
  );
}
export function useUsersAdminLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersAdminQuery,
    UsersAdminQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersAdminQuery, UsersAdminQueryVariables>(
    UsersAdminDocument,
    options
  );
}
export type UsersAdminQueryHookResult = ReturnType<typeof useUsersAdminQuery>;
export type UsersAdminLazyQueryHookResult = ReturnType<
  typeof useUsersAdminLazyQuery
>;
export type UsersAdminQueryResult = Apollo.QueryResult<
  UsersAdminQuery,
  UsersAdminQueryVariables
>;
export const VerifyDocument = gql`
  query Verify($request: VerifyRequest!) {
    verify(request: $request)
  }
`;

/**
 * __useVerifyQuery__
 *
 * To run a query within a React component, call `useVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useVerifyQuery(
  baseOptions: Apollo.QueryHookOptions<VerifyQuery, VerifyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VerifyQuery, VerifyQueryVariables>(
    VerifyDocument,
    options
  );
}
export function useVerifyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VerifyQuery, VerifyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VerifyQuery, VerifyQueryVariables>(
    VerifyDocument,
    options
  );
}
export type VerifyQueryHookResult = ReturnType<typeof useVerifyQuery>;
export type VerifyLazyQueryHookResult = ReturnType<typeof useVerifyLazyQuery>;
export type VerifyQueryResult = Apollo.QueryResult<
  VerifyQuery,
  VerifyQueryVariables
>;
export const PingDocument = gql`
  query ping {
    ping
  }
`;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(
  baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
}
export function usePingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(
    PingDocument,
    options
  );
}
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    NFT: ['Erc721', 'Nep171'],
    SearchResult: [
      'BusinessSearchResult',
      'EnduserSearchResult',
      'MarketplaceSearchResult',
      'NftSearchResult',
      'SurveySearchResult',
      'TutorialSearchResult'
    ],
    SurveyElement: [
      'BooleanElement',
      'CommentElement',
      'RadiogroupElement',
      'RankingElement',
      'RatingElement',
      'TextElement'
    ],
    SurveyElementItemValueType: ['TextValueType', 'ValueType']
  }
};
export default result;
