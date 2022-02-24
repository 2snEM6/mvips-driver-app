import { ENVIRONMENT, TERMS_AND_CONDITIONS_URL, PRIVACY_POLICY_URL } from '@env';

const common = {
  APP: {
    BUNDLE_ID: 'net.mvips.driver',
    STORE_URL: '',
  },
};

const environments = {
  production: {
    ENVIRONMENT: 'production',
    GRAPHQL_ENDPOINT: 'https://mvips-server-prod.herokuapp.com',
  },
  development: {
    GRAPHQL_ENDPOINT: 'https://mvips-server-dev.herokuapp.com',
    ENVIRONMENT: 'development',
  },
};

const env = ENVIRONMENT || 'development';

export default {
  // @ts-ignore
  ...environments[env],
  ...common,
};