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

export const UPDATE_HIT = gql`
  mutation updateHit($data: UpdateHitInput!, $updateHitId: Float!) {
    updateHit(data: $data, id: $updateHitId) {
      id
    }
  }
`;



