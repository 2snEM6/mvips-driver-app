import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import auth from '@react-native-firebase/auth';
import * as uuid from '../utils/uuid';
import config from '../config';

let instance: ApolloClient<any>;

const createClient = async (): Promise<ApolloClient<NormalizedCacheObject>> => {
  const cache = new InMemoryCache({
    dataIdFromObject: (object: { id?: any; __typename?: any }) => {
      if (object.id) {
        // eslint-disable-next-line no-underscore-dangle
        return `${object.__typename}-${object.id}`;
      }
      // eslint-disable-next-line no-underscore-dangle
      return `${object.__typename}-${uuid.v4()}`;
    },
  });

  // await before instantiating ApolloClient, else queries might run before the cache is persisted
  //   await persistCache({
  //     cache,
  //     // @ts-ignore
  //     storage: AsyncStorage,
  //   });
  const httpLink = createHttpLink({
    uri: config.GRAPHQL_ENDPOINT,
  });

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await auth().currentUser?.getIdToken();
    console.log('TOKEN: ' + token);
    // return the headers to the context so httpLink can read them
    return {
      uri: config.GRAPHQL_ENDPOINT,
      headers: {
        ...headers,
        // Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

  return apolloClient;
};

export const setupClient = async (): Promise<ApolloClient<any>> => {
  if (instance) return instance;
  instance = await createClient();
  return instance;
};

export const getClient = () => instance;
