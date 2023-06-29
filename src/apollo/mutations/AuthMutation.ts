import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(password: $password, email: $email) {
      token
      user {
        id
        name
        roleId
        email
      }
    }
  }
`;

export const GET_USER = gql`
  mutation getUser($email: String!, $password: String!) {
    login(password: $password, email: $email)
  }
`;

export const REGISTER_USER = gql`
  mutation createUser($userData: CreateUserInput!) {
    createUser(userData: $userData) {
      id
    }
  }
`;
