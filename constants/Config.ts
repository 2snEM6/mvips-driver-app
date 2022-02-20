import { ENVIRONMENT, TERMS_AND_CONDITIONS_URL, PRIVACY_POLICY_URL, GRAPHQL_ENDPOINT } from '@env';

const common = {
  APP: {
    BUNDLE_ID: 'TBD',
    STORE_URL: 'https://apps.apple.com/us/app/TBD',
  },
  NOTIFICATIONS: {},
  IAP: {
    IOS: {},
  },
  LEGAL: {
    TERMS_AND_CONDITIONS_URL,
    PRIVACY_POLICY_URL,
  },
};

const environments = {
  production: {
    ENVIRONMENT: 'production',
    GRAPHQL_ENDPOINT,
  },
  development: {
    ENVIRONMENT: 'development',
    GRAPHQL_ENDPOINT,
  },
};

const env = ENVIRONMENT || 'development';

export default {
  // @ts-ignore
  ...environments[env],
  ...common,
};
