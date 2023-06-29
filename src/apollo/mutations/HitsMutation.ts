import { gql } from "@apollo/client";

export const CREATE_HIT = gql`
  mutation createHit($data: CreateHitInput!) {
    createHit(data: $data) {
      id
      name
      status
      description
      createId
      assignId
    }
  }
`;
