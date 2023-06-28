import { gql } from "@apollo/client";

export const HITS_QUERY = gql`
  query hits {
    hits {
    id
    status
    target
    hitmanId
    hitman {
      id
      userId
      user {
        name
        email
        id
      }
    }
  }
  }
`;
