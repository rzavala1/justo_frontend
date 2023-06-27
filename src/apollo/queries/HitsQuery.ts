import { gql } from "@apollo/client";

export const HITS_QUERY = gql`
  query hits {
    hits {
      id
    }
  }
`;
