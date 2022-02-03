import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const DRIVER = gql`
  query Driver($id: ID, $departureDateMin: String, $departureDateMax: String) {
    driver(id: $id, departureDateMin: $departureDateMin, departureDateMax: $departureDateMax) {
      id
      name
      phone
      services {
        id
        volcanoServiceId
      }
    }
  }
`;
