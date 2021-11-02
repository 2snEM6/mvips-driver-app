import { ENVIRONMENT, TERMS_AND_CONDITIONS_URL, PRIVACY_POLICY_URL } from '@env';

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
    GRAPHQL_ENDPOINT: 'TBD',
  },
  development: {
    GRAPHQL_ENDPOINT: 'http://bumblebee.local:4001',
    ENVIRONMENT: 'development',
  },
};

const env = ENVIRONMENT || 'development';

export default {
  // @ts-ignore
  ...environments[env],
  ...common,
};
