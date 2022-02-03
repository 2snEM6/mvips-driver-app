import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const SERVICES_QUERY = gql`
  query Services($departureDateMin: String, $departureDateMax: String) {
    services(departureDateMin: $departureDateMin, departureDateMax: $departureDateMax) {
      id
      description
      volcanoServiceId
    }
  }
`;
