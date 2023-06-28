import { gql } from "@apollo/client";

export const HITS_QUERY = gql`
  query hits {
    hits {
    id
    status
    name
    description
    assignId
    User {
      id
      name
      email
    }
  }
  }
`;
