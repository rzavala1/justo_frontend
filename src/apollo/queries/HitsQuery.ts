import { gql } from "@apollo/client";

export const HITS_QUERY = gql`
  query hits {
    hits {
    id
    name
    status
    description
    createId
    assignUser {
      id
      name
    }
    createUser {
      id
      name
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
