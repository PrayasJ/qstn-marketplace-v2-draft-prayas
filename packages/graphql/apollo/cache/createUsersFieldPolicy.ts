import type { FieldPolicy } from '@apollo/client';

import { cursorBasedPagination } from '../lib';

const createUsersFieldPolicy = (): FieldPolicy => {
  return cursorBasedPagination([
    'request',
    [
      'type',
      'status',
      'verified',
      'boosted',
      'visibility',
      'category',
      'ownedBy',
      'profileIds',
      'businessIds',
      'emails',
      'numberOfSurveys',
      'sorting'
    ]
  ]);
};

export default createUsersFieldPolicy;
