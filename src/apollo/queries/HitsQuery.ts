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

export const HIT_BY_ID_QUERY = gql`
  query hits($hitId: Float!) {
    hit(id: $hitId) {
    id
    name
    status
    description
    createUser: createUser {
      id
      name
    }
    assignUser: assignUser { 
      id
      name
    }
  }
  }
`;
