import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const UPDATE_LOCATION = gql`
  mutation UpdateLocation($latitude: Float, $longitude: Float) {
    updateDriver(latitude: $latitude, longitude: $longitude) {
      location {
        latitude
        longitude
      }
    }
  }
`;
