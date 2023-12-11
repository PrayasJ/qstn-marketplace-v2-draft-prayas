import { InMemoryCache } from '@apollo/client';

import result from '../../generated';
import createNftsFieldPolicy from './createNftsFieldPolicy';
import createProductsFieldPolicy from './createProductsFieldPolicy';
import createSearchFieldPolicy from './createSearchFieldPolicy';
import createUsersFieldPolicy from './createUsersFieldPolicy';

const cache = new InMemoryCache({
  possibleTypes: result.possibleTypes,
  typePolicies: {
    Query: {
      fields: {
        search: createSearchFieldPolicy(),
        users: createUsersFieldPolicy(),
        nfts: createNftsFieldPolicy(),
        products: createProductsFieldPolicy()
      }
    }
  }
});

export default cache;
