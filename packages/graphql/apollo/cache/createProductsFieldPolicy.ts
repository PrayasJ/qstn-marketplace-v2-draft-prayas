import type { FieldPolicy } from '@apollo/client';

import { cursorBasedPagination } from '../lib';

const createProductsFieldPolicy = (): FieldPolicy => {
  return cursorBasedPagination(['request', ['status', 'type']]);
};

export default createProductsFieldPolicy;
