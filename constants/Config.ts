import { ENVIRONMENT, TERMS_AND_CONDITIONS_URL, PRIVACY_POLICY_URL } from '@env';

const common = {
  APP: {
    BUNDLE_ID: 'com.bumblebee.lynk',
    STORE_URL: 'https://apps.apple.com/us/app/lynk-make-friends/id1544665917',
  },
  NOTIFICATIONS: {
    NEW_FRIEND_REQUEST: 'NEW_FRIEND_REQUEST',
    USER_ACCEPTED_REQUEST: 'USER_ACCEPTED_REQUEST',
    DIAMONDS_RECEIVED: 'DIAMONDS_RECEIVED',
  },
  IAP: {
    IOS: {
      SINGLE_ITEMS: [
        { sku: 'com.bumblebee.lynk.100diamonds', diamonds: 100 },
        { sku: 'com.bumblebee.lynk.500diamonds', diamonds: 500 },
        { sku: 'com.bumblebee.lynk.2000diamonds', diamonds: 2000 },
        { sku: 'com.bumblebee.lynk.superSwipe' },
      ],
      SUBSCRIPTIONS: [{ sku: 'com.bumblebee.lynk.diamonds.subscription.monthly.unlimited' }],
    },
  },
  DIAMONDS_PER_SWIPE: 10,
  DIAMONDS_MAX_TOTAL_AMOUNT: 9999,
  UNDERAGE_MAXIMUM_AGE: 17,
  UNDERAGE_MINIMUM_AGE: 13,
  ADULT_MAXIMUM_AGE: 70,
  ADULT_MINIMUM_AGE: 18,
  MINIMUM_DISTANCE: 10,
  MAXIMUM_DISTANCE: 100,
  DISTANCE_UNITS: 'MI',
  GENDERS: ['FEMALE', 'MALE', 'OTHER'],
  GET_NEARBY_USERS_MAX_NUM_USERS_TO_FETCH: 20,
  REMAINING_CARDS_TO_TRIGGER_REFETCH: 5,
  LEGAL: {
    TERMS_AND_CONDITIONS_URL,
    PRIVACY_POLICY_URL,
  },
};

const environments = {
  production: {
    ENVIRONMENT: 'production',
    GRAPHQL_ENDPOINT: 'https://api.getlynk.app/',
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
