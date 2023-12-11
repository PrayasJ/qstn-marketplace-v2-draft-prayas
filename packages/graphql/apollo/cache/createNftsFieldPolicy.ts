import type { FieldPolicy } from '@apollo/client';

import { cursorBasedPagination } from '../lib';

const createNftsFieldPolicy = (): FieldPolicy => {
  return cursorBasedPagination([
    'request',
    [
      'status',
      'profileIds',
      'creatorIds',
      'mediaIds',
      'ownerAddress',
      'chainIds'
    ]
  ]);
};

export default createNftsFieldPolicy;
