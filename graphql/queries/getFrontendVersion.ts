/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_FRONTEND_VERSION = gql`
  query GetFrontendVersion {
    getFrontendVersion {
      version
    }
  }
`;
