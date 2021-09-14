import gql from "graphql-tag";

export const Dummy = gql`
query Dummy {
    getFrontendVersion {
        version
    }
}
`;