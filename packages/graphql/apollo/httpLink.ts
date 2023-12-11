import { HttpLink } from '@apollo/client';
import { GRAPHQL_API_URL } from '@qstn/data';

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
  fetchOptions: 'no-cors',
  fetch
});

export default httpLink;
